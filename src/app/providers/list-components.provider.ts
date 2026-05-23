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
    if (this._isDisposed) {
      return
    }

    this._isDisposed = true
    this._onDidChangeTreeData.dispose()
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
   * @returns {Promise<NodeModel[]>} - The list of files
   */
  private async getListComponents(): Promise<NodeModel[]> {
    const files = await ListFilesController.getFiles()

    if (!files) {
      return []
    }

    const componentRegex = /<([A-Z][A-Za-z0-9_]*)\b/g

    const { default: pLimit } = await import('p-limit')
    const limit = pLimit(2)

    await Promise.all(
      files.map((file) =>
        limit(async () => {
          if (!file.resourceUri) {
            file.setChildren([])
            return
          }

          try {
            const document = await workspace.openTextDocument(file.resourceUri)
            const fullText = document.getText()
            const children: NodeModel[] = []

            const lines = fullText.split(/\r?\n/)

            for (let i = 0; i < lines.length; i++) {
              const text = lines[i]

              const trimmed = text.trim()
              if (
                trimmed.startsWith('//') ||
                trimmed.startsWith('/*') ||
                trimmed.startsWith('*')
              ) {
                continue
              }

              let match: RegExpExecArray | null
              componentRegex.lastIndex = 0
              while ((match = componentRegex.exec(text)) !== null) {
                const componentName = match[1]
                if (!componentName) {
                  continue
                }

                children.push(
                  new NodeModel(trimmed, new ThemeIcon('symbol-method'), {
                    command: `${EXTENSION_ID}.list.gotoLine`,
                    title: trimmed,
                    arguments: [file.resourceUri, i],
                  }),
                )
              }
            }

            file.setChildren(children)
          } catch (err) {
            console.error(
              `Error reading file ${file.resourceUri?.fsPath}:`,
              err instanceof Error ? err.message : String(err),
            )

            file.setChildren([])
          }
        }),
      ),
    )

    return files.filter((file) => file.children?.length! > 0)
  }
}
