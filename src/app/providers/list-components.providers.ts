import {
  Event,
  EventEmitter,
  ProviderResult,
  ThemeIcon,
  TreeDataProvider,
  TreeItem,
  workspace,
} from 'vscode'

import { EXTENSION_ID } from '../configs'
import { ListFilesController } from '../controllers'
import { NodeModel } from '../models'

/**
 * The ListComponentsProvider class
 *
 * @class
 * @classdesc The class that represents the list of files provider.
 * @export
 * @public
 * @implements {TreeDataProvider<NodeModel>}
 * @property {EventEmitter<NodeModel | undefined | null | void>} _onDidChangeTreeData - The onDidChangeTreeData event emitter
 * @property {Event<NodeModel | undefined | null | void>} onDidChangeTreeData - The onDidChangeTreeData event
 * @property {ListFilesController} controller - The list of files controller
 * @example
 * const provider = new ListComponentsProvider();
 *
 * @see https://code.visualstudio.com/api/references/vscode-api#TreeDataProvider
 */
export class ListComponentsProvider implements TreeDataProvider<NodeModel> {
  // -----------------------------------------------------------------
  // Properties
  // -----------------------------------------------------------------

  // Private properties
  /**
   * The onDidChangeTreeData event emitter.
   * @type {EventEmitter<NodeModel | undefined | null | void>}
   * @private
   * @memberof ListComponentsProvider
   * @example
   * this._onDidChangeTreeData = new EventEmitter<Node | undefined | null | void>();
   * this.onDidChangeTreeData = this._onDidChangeTreeData.event;
   *
   * @see https://code.visualstudio.com/api/references/vscode-api#EventEmitter
   */
  private _onDidChangeTreeData: EventEmitter<
    NodeModel | undefined | null | void
  >

  /**
   * Indicates whether the provider has been disposed.
   * @type {boolean}
   * @private
   * @memberof ListComponentsProvider
   * @example
   * this._isDisposed = false;
   */
  private _isDisposed = false

  /**
   * The cached nodes.
   * @type {NodeModel[] | undefined}
   * @private
   * @memberof ListComponentsProvider
   * @example
   * this._cachedNodes = undefined;
   */
  private _cachedNodes: NodeModel[] | undefined = undefined

  /**
   * The cache promise.
   * @type {Promise<NodeModel[] | undefined> | undefined}
   * @private
   * @memberof ListComponentsProvider
   * @example
   * this._cachePromise = undefined;
   */
  private _cachePromise: Promise<NodeModel[] | undefined> | undefined =
    undefined

  // Public properties
  /**
   * The onDidChangeTreeData event.
   * @type {Event<NodeModel | undefined | null | void>}
   * @public
   * @memberof ListComponentsProvider
   * @example
   * readonly onDidChangeTreeData: Event<Node | undefined | null | void>;
   * this.onDidChangeTreeData = this._onDidChangeTreeData.event;
   *
   * @see https://code.visualstudio.com/api/references/vscode-api#Event
   */
  readonly onDidChangeTreeData: Event<NodeModel | undefined | null | void>

  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the ListComponentsProvider class
   *
   * @constructor
   * @public
   * @memberof ListComponentsProvider
   */
  constructor() {
    this._onDidChangeTreeData = new EventEmitter<
      NodeModel | undefined | null | void
    >()
    this.onDidChangeTreeData = this._onDidChangeTreeData.event
  }

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * Returns the tree item for the supplied element.
   *
   * @function getTreeItem
   * @param {NodeModel} element - The element
   * @public
   * @memberof ListComponentsProvider
   * @example
   * const treeItem = provider.getTreeItem(element);
   *
   * @returns {TreeItem | Thenable<TreeItem>} - The tree item
   *
   * @see https://code.visualstudio.com/api/references/vscode-api#TreeDataProvider
   */
  getTreeItem(element: NodeModel): TreeItem | Thenable<TreeItem> {
    return element
  }

  /**
   * Returns the children for the supplied element.
   *
   * @function getChildren
   * @param {NodeModel} [element] - The element
   * @public
   * @memberof ListComponentsProvider
   * @example
   * const children = provider.getChildren(element);
   *
   * @returns {ProviderResult<NodeModel[]>} - The children
   *
   * @see https://code.visualstudio.com/api/references/vscode-api#TreeDataProvider
   */
  getChildren(element?: NodeModel): ProviderResult<NodeModel[]> {
    if (element) {
      return element.children
    }

    if (this._cachedNodes) {
      return this._cachedNodes
    }

    if (this._cachePromise) {
      return this._cachePromise
    }

    this._cachePromise = this.getListComponents().then((nodes) => {
      this._cachedNodes = nodes
      this._cachePromise = undefined
      return nodes
    })

    return this._cachePromise
  }

  /**
   * Refreshes the tree data.
   *
   * @function refresh
   * @public
   * @memberof FeedbackProvider
   * @example
   * provider.refresh();
   *
   * @returns {void} - No return value
   */
  refresh(): void {
    this._cachedNodes = undefined
    this._cachePromise = undefined
    this._onDidChangeTreeData.fire()
  }

  /**
   * Disposes the provider.
   *
   * @function dispose
   * @public
   * @memberof ListComponentsProvider
   * @example
   * provider.dispose();
   *
   * @returns {void} - No return value
   */
  dispose(): void {
    this._onDidChangeTreeData.dispose()
    if (this._isDisposed) {
      return
    }

    this._isDisposed = true

    if (this._onDidChangeTreeData) {
      this._onDidChangeTreeData.dispose()
    }
  }

  // Private methods
  /**
   * Returns the list of files.
   *
   * @function getListComponents
   * @private
   * @memberof ListComponentsProvider
   * @example
   * const files = provider.getListComponents();
   *
   * @returns {Promise<NodeModel[] | undefined>} - The list of files
   */
  private async getListComponents(): Promise<NodeModel[] | undefined> {
    const files = await ListFilesController.getFiles()

    if (!files) {
      return
    }

    // Iterate through each file and extract components
    await Promise.all(
      files.map(async (file) => {
        const docPath = file.resourceUri?.path ?? ''

        if (!docPath) {
          return
        }

        let document

        try {
          document = await workspace.openTextDocument(docPath)
        } catch (err) {
          return
        }

        // Use a regex to find components in the document
        const componentRegex = /<([A-Z][\w]*)\b/g
        const children: NodeModel[] = []

        for (let index = 0; index < document.lineCount; index++) {
          const line = document.lineAt(index)
          if (componentRegex.test(line.text)) {
            children.push(
              new NodeModel(line.text.trim(), new ThemeIcon('symbol-method'), {
                command: `${EXTENSION_ID}.list.gotoLine`,
                title: line.text,
                arguments: [file.resourceUri, index],
              }),
            )
          }
        }
        file.setChildren(children)
      }),
    )

    const nodes = files.filter(
      (file) => file.children && file.children.length !== 0,
    )

    return nodes.length > 0 ? nodes : undefined
  }
}
