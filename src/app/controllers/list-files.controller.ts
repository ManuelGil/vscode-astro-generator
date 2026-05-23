import {
  l10n,
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
import { type FindFilesOptions, findFiles } from '../helpers/find-files.helper'
import { relativePath } from '../helpers/relative-path.helper'
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
    try {
      // Get the workspace folder
      const workspaceFolder = workspace.workspaceFolders?.[0]
      if (!workspaceFolder) {
        return
      }

      // Prepare options for findFiles helper
      const findFilesOptions: FindFilesOptions = {
        baseDirectoryPath: workspaceFolder.uri.fsPath,
        includeFilePatterns: this.config.include.map(
          (ext) => `**/*${ext.startsWith('.') ? '' : '.'}${ext}`,
        ),
        excludedPatterns: this.config.exclude,
        enableGitignoreDetection: true,
      }

      // Get the files using the findFiles helper
      const fileUris = await findFiles(findFilesOptions)

      if (fileUris.length !== 0) {
        let nodes: NodeModel[] = []

        // Limit results if needed
        const limitedFiles = fileUris.slice(0, maxResults)

        // Sort files by path
        limitedFiles.sort((a, b) => a.fsPath.localeCompare(b.fsPath))

        for (const fileUri of limitedFiles) {
          try {
            const document = await workspace.openTextDocument(fileUri)

            const relativeFilePath = relativePath(
              document.uri,
              this.config.showPath,
            )
            let displayFilename = relativeFilePath.split('/').pop()

            if (displayFilename && this.config.showPath) {
              const containingFolderPath = relativeFilePath
                .split('/')
                .slice(0, -1)
                .join('/')

              displayFilename += containingFolderPath
                ? ` (${containingFolderPath})`
                : ' (root)'
            }

            nodes.push(
              new NodeModel(
                displayFilename ?? 'Untitled',
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
          } catch (docError) {
            console.warn(
              `Failed to open document for ${fileUri.fsPath}:`,
              docError,
            )
          }
        }

        return nodes
      }

      return
    } catch (error) {
      console.error('Error in getFiles:', error)
      window.showErrorMessage(l10n.t('Failed to get files'))
      return
    }
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
  async openFile(uri: Uri): Promise<void> {
    try {
      const document = await workspace.openTextDocument(uri)
      await window.showTextDocument(document)
    } catch (error: unknown) {
      console.error('Error opening file:', error)
      window.showErrorMessage(l10n.t('Failed to open file'))
    }
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
  async gotoLine(uri: Uri, line: number): Promise<void> {
    try {
      const document = await workspace.openTextDocument(uri)
      const editor = await window.showTextDocument(document)
      const targetPosition = new Position(line, 0)
      editor.revealRange(
        new Range(targetPosition, targetPosition),
        TextEditorRevealType.InCenterIfOutsideViewport,
      )
      editor.selection = new Selection(targetPosition, targetPosition)
    } catch (error: unknown) {
      console.error('Error navigating to line:', error)
      window.showErrorMessage(l10n.t('Failed to go to line'))
    }
  }
}
