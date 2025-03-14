import {
  Position,
  Range,
  Selection,
  TextEditorRevealType,
  ThemeIcon,
  Uri,
  window,
  workspace,
} from 'vscode'

import { EXTENSION_ID, ExtensionConfig } from '../configs'
import { directoryMap, getRelativePath } from '../helpers'
import { NodeModel } from '../models'

/**
 * The ListFilesController class.
 *
 * @class
 * @classdesc The class that represents the list files controller.
 * @export
 * @public
 * @example
 * const controller = new ListFilesController();
 */
export class ListFilesController {
  // -----------------------------------------------------------------
  // Properties
  // -----------------------------------------------------------------

  // Public properties
  /**
   * The static config property.
   *
   * @static
   * @property
   * @public
   * @type {ExtensionConfig}
   * @memberof ListFilesController
   */
  static config: ExtensionConfig

  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the ListFilesController class
   *
   * @constructor
   * @param {ExtensionConfig} config - The configuration object
   * @public
   * @memberof ListFilesController
   */
  constructor(config: ExtensionConfig) {
    ListFilesController.config = config
  }

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * The getFiles method.
   *
   * @function getFiles
   * @param {number} maxResults - The maximum number of results
   * @public
   * @async
   * @memberof ListFilesController
   * @example
   * controller.getFiles();
   *
   * @returns {Promise<NodeModel[] | void>} - The list of files
   */
  static async getFiles(
    maxResults: number = Number.MAX_SAFE_INTEGER,
  ): Promise<NodeModel[] | void> {
    // Get the files in the folder
    const files = await directoryMap('/', {
      extensions: this.config.include,
      ignore: this.config.exclude,
      maxResults,
    })

    if (files.length !== 0) {
      let nodes: NodeModel[] = []

      files.sort((a, b) => a.path.localeCompare(b.path))

      for (const file of files) {
        const document = await workspace.openTextDocument(file)

        const path = await getRelativePath(document.fileName)
        let filename = path.split('/').pop()

        if (filename && this.config.showPath) {
          const folder = path.split('/').slice(0, -1).join('/')

          filename += folder ? ` (${folder})` : ' (root)'
        }

        nodes.push(
          new NodeModel(
            filename ?? 'Untitled',
            new ThemeIcon('file'),
            {
              command: `${EXTENSION_ID}.list.openFile`,
              title: 'Open File',
              arguments: [document.uri],
            },
            document.uri,
            document.fileName,
          ),
        )
      }

      return nodes
    }

    return
  }

  /**
   * The openFile method.
   *
   * @function openFile
   * @param {Uri} uri - The file URI
   * @public
   * @memberof ListFilesController
   * @example
   * controller.openFile('file:///path/to/file');
   *
   * @returns {Promise<void>} - The promise
   */
  openFile(uri: Uri) {
    workspace.openTextDocument(uri).then((filename) => {
      window.showTextDocument(filename)
    })
  }

  /**
   * The gotoLine method.
   *
   * @function gotoLine
   * @param {Uri} uri - The file URI
   * @param {number} line - The line number
   * @public
   * @memberof ListFilesController
   * @example
   * controller.gotoLine('file:///path/to/file', 1);
   *
   * @returns {void} - The promise
   */
  gotoLine(uri: Uri, line: number) {
    workspace.openTextDocument(uri).then((document) => {
      window.showTextDocument(document).then((editor) => {
        const pos = new Position(line, 0)
        editor.revealRange(
          new Range(pos, pos),
          TextEditorRevealType.InCenterIfOutsideViewport,
        )
        editor.selection = new Selection(pos, pos)
      })
    })
  }
}
