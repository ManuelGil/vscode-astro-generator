import { access, existsSync, mkdirSync, writeFile } from 'fs'
import { dirname, join } from 'path'
import { Uri, WorkspaceFolder, l10n, window, workspace } from 'vscode'

import { EXTENSION_DISPLAY_NAME, ExtensionConfig } from '../configs'
import { getName, getPath, showError, showMessage } from '../helpers'

/**
 * The FileGeneratorController class.
 * This class is responsible for generating files.
 *
 * @class
 * @example
 * const service = new FileGeneratorController(config);
 * service.generateBasicPage(Uri.parse('path'));
 */
export class FileGeneratorController {
  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * The constructor.
   *
   * @param {ExtensionConfig} config - The extension configuration.
   * @memberof FileGeneratorController
   */
  constructor(private readonly config: ExtensionConfig) {}

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods

  /**
   * The generateBasicPage method.
   *
   * @function generateBasicPage
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generateBasicPage(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async generateBasicPage(folderPath?: Uri): Promise<void> {
    const template = `---
title: "Basic Page"
description: "This is a basic page generated automatically."
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <h1>Hello, Astro!</h1>
    <p> This is a basic page generated automatically. </p>
  </body>
</html>`

    await this.generateAstroFile(template, folderPath)
  }

  /**
   * The generateBasicComponent method.
   *
   * @function generateBasicComponent
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generateBasicComponent(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async generateBasicComponent(folderPath?: Uri): Promise<void> {
    const template = `---
export interface Props {
  message: string;
}
const { message } = Astro.props;
---
<div>
  <p>{message}</p>
</div>`

    await this.generateAstroFile(template, folderPath)
  }

  /**
   * The generateLayoutWithSlots method.
   *
   * @function generateLayoutWithSlots
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generateLayoutWithSlots(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async generateLayoutWithSlots(folderPath?: Uri): Promise<void> {
    const template = `---
export interface Props {
  title: string;
}
const { title } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>{title}</title>
  </head>
  <body>
    <header>
      <h1>{title}</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>© {new Date().getFullYear()} My Company</p>
    </footer>
  </body>
</html>`

    await this.generateAstroFile(template, folderPath)
  }

  /**
   * The generateStaticDataPage method.
   *
   * @function generateStaticDataPage
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generateStaticDataPage(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async generateStaticDataPage(folderPath?: Uri): Promise<void> {
    const template = `---
const posts = [
  { id: 1, title: "First post", description: "This is the first post." },
  { id: 2, title: "Second post", description: "This is the second post." },
];
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Blog</title>
  </head>
  <body>
    <h1>Blog</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </li>
      ))}
    </ul>
  </body>
</html>`

    await this.generateAstroFile(template, folderPath)
  }

  /**
   * The generatePageWithGetStaticProps method.
   *
   * @function generatePageWithGetStaticProps
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generatePageWithGetStaticProps(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async generatePageWithGetStaticProps(folderPath?: Uri): Promise<void> {
    const template = `---
const response = await fetch("https://api.example.com/data")
const data = await response.json()
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Data from API</title>
  </head>
  <body>
    <h1>Data from API</h1>
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <strong>{item.name}</strong>: {item.description}
        </li>
      ))}
    </ul>
  </body>
</html>`

    await this.generateAstroFile(template, folderPath)
  }

  /**
   * The generateStyledComponent method.
   *
   * @function generateStyledComponent
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generateStyledComponent(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async generateStyledComponent(folderPath?: Uri): Promise<void> {
    const template = `---
export interface Props {
  text: string;
}
const { text } = Astro.props;
---
<style>
  div {
    background-color: #f0f0f0;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  p {
    color: #333;
  }
</style>
<div>
  <p>{text}</p>
</div>`

    await this.generateAstroFile(template, folderPath)
  }

  /**
   * The generateCustomComponent method.
   *
   * @function generateCustomComponent
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generateCustomComponent(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async generateCustomComponent(folderPath?: Uri): Promise<void> {
    await this.generateCustomComponentFile(folderPath)
  }

  // Private methods

  /**
   * The generateAstroFile method.
   *
   * @function generateAstroFile
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generateAstroFile('class', Uri.parse('path'));
   *
   * @param {string} entityType - The entity type
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  private async generateAstroFile(
    template: string,
    folderPath?: Uri,
  ): Promise<void> {
    const { enable } = this.config

    if (!enable) {
      const message = l10n.t(
        '{0} is disabled in settings. Enable it to use its features',
        EXTENSION_DISPLAY_NAME,
      )
      showError(message)
      return
    }

    let workspaceFolder: WorkspaceFolder | undefined
    let relativeFolderPath: string = ''

    if (folderPath) {
      workspaceFolder = workspace.getWorkspaceFolder(folderPath)
      relativeFolderPath = workspace.asRelativePath(folderPath)
    } else if (
      workspace.workspaceFolders &&
      workspace.workspaceFolders.length === 1
    ) {
      workspaceFolder = workspace.workspaceFolders[0]
    } else {
      const placeHolder = l10n.t(
        'Select a workspace folder to use. This folder will be used to generate the file',
      )
      workspaceFolder = await window.showWorkspaceFolderPick({
        placeHolder,
      })
    }

    if (!workspaceFolder) {
      // User likely canceled the picker
      showMessage(l10n.t('Operation canceled'))
      return
    }

    const skipFolderConfirmation = this.config.skipFolderConfirmation
    let folderName: string | undefined

    if (!folderPath || !skipFolderConfirmation) {
      folderName = await getPath(
        l10n.t('Enter the folder name where the file will be created'),
        l10n.t('Enter the folder name, e.g. models, services, utils, etc'),
        relativeFolderPath,
        (path) =>
          !/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)
            ? l10n.t(
                'The folder name is invalid! Please enter a valid folder name',
              )
            : undefined,
      )

      if (!folderName) {
        showMessage(l10n.t('Operation canceled'))
        return
      }
    } else {
      folderName = relativeFolderPath
    }

    const componentName = await getName(
      l10n.t('Enter the component name'),
      l10n.t('Enter the component name, e.g. User, Product, Order, etc'),
      (name) =>
        !/^[a-zA-Z\-]+?$/.test(name)
          ? l10n.t('The component name is invalid! Please enter a valid name')
          : undefined,
    )

    if (!componentName) {
      showMessage(l10n.t('Operation canceled'))
      return
    }

    const resolvedFolderPath = join(workspaceFolder.uri.fsPath, folderName)
    const fileName = `${componentName}.astro`
    const content = this.fileContent(componentName, template)

    this.saveFile(resolvedFolderPath, fileName, content)
  }

  /**
   * The generateCustomComponent method.
   *
   * @function generateCustomComponent
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generateCustomComponent(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  private async generateCustomComponentFile(folderPath?: Uri): Promise<void> {
    const { enable, customComponents } = this.config

    if (!enable) {
      const message = l10n.t(
        '{0} is disabled in settings. Enable it to use its features',
        EXTENSION_DISPLAY_NAME,
      )
      showError(message)
      return
    }

    let workspaceFolder: WorkspaceFolder | undefined
    let relativeFolderPath: string = ''

    if (folderPath) {
      workspaceFolder = workspace.getWorkspaceFolder(folderPath)
      relativeFolderPath = workspace.asRelativePath(folderPath)
    } else if (
      workspace.workspaceFolders &&
      workspace.workspaceFolders.length === 1
    ) {
      workspaceFolder = workspace.workspaceFolders[0]
    } else {
      const placeHolder = l10n.t(
        'Select a workspace folder to use. This folder will be used to generate the file',
      )
      workspaceFolder = await window.showWorkspaceFolderPick({
        placeHolder,
      })
    }

    if (!workspaceFolder) {
      // User likely canceled the picker
      showMessage(l10n.t('Operation canceled'))
      return
    }

    const skipFolderConfirmation = this.config.skipFolderConfirmation
    let folderName: string | undefined

    if (!folderPath || !skipFolderConfirmation) {
      folderName = await getPath(
        l10n.t('Enter the folder name where the file will be created'),
        l10n.t('Enter the folder name, e.g. models, services, utils, etc'),
        relativeFolderPath,
        (path) =>
          !/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)
            ? l10n.t(
                'The folder name is invalid! Please enter a valid folder name',
              )
            : undefined,
      )

      if (!folderName) {
        showMessage(l10n.t('Operation canceled'))
        return
      }
    } else {
      folderName = relativeFolderPath
    }

    // Build quick pick items for user selection. Note: the `extension`
    // field must NOT include a leading dot. The generator constructs
    // filenames as `${ComponentName}.${extension}`.
    const items = customComponents.map((item: any) => {
      return {
        label: item.name,
        description: item.description,
        detail: `Extension: ${item.extension}`,
      }
    })

    const option = await window.showQuickPick(items, {
      placeHolder: l10n.t(
        'Select the template for the custom element generation',
      ),
    })

    if (option === undefined) {
      showMessage(l10n.t('Operation canceled'))
      return
    }

    const componentName = await getName(
      l10n.t('Enter the component name'),
      l10n.t('Enter the component name, e.g. User, Product, Order, etc'),
      (name) =>
        !/^[a-zA-Z\-]+?$/.test(name)
          ? l10n.t('The component name is invalid! Please enter a valid name')
          : undefined,
    )

    if (!componentName) {
      showMessage(l10n.t('Operation canceled'))
      return
    }

    const template = customComponents.find(
      (item: any) => item.name === option.label,
    )

    if (!template) {
      const message = l10n.t(
        'The template for the custom component does not exist. Please try again',
      )
      showError(message)
      return
    }

    const componentTemplate = template.template.join('\n')

    const resolvedFolderPath = join(workspaceFolder.uri.fsPath, folderName)
    // Compose filename with extension (no leading dot expected in config)
    const fileName = `${componentName}.${template.extension}`
    const content = this.fileContent(componentName, componentTemplate)

    this.saveFile(resolvedFolderPath, fileName, content)
  }

  /**
   * The fileContent method.
   *
   * @function fileContent
   * @memberof FilesController
   * @private
   * @example
   * controller.fileContent('entityName', 'class');
   *
   * @param {string} componentName - The entity name
   * @param {string} template - The template
   *
   * @returns {string} - The file content
   */
  private fileContent(componentName: string, template: string): string {
    const { headerCommentTemplate, insertFinalNewline } = this.config

    let content: string = ''

    // Prepend configured header comment (if any). This is applied only
    // at generation time; there is no on-save formatter integration.
    if (headerCommentTemplate.length > 0) {
      content += headerCommentTemplate.join('\n') + '\n\n'
    }

    // Add the template
    content += template.replace(/{{ComponentName}}/g, componentName)

    // Optionally append a final newline if configured
    if (insertFinalNewline) {
      content += '\n'
    }

    return content
  }

  /**
   * The saveFile method.
   *
   * @function saveFile
   * @private
   * @async
   * @memberof FilesController
   * @example
   * controller.saveFile('path', 'filename', 'data');
   *
   * @param {string} directoryPath - The path
   * @param {string} fileName - The filename
   * @param {string} fileContent - The data
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  private async saveFile(
    directoryPath: string,
    fileName: string,
    fileContent: string,
  ): Promise<void> {
    const file = join(directoryPath, fileName)

    if (!existsSync(dirname(file))) {
      mkdirSync(dirname(file), { recursive: true })
    }

    access(file, (err: any) => {
      if (err) {
        // File does not exist: write directly to path (no fd to manage)
        writeFile(file, fileContent, 'utf8', (writeErr: any) => {
          if (writeErr) {
            const message = l10n.t(
              'The file has not been created! Please try again',
            )
            showError(message)
            return
          }

          const openPath = Uri.file(file)
          workspace.openTextDocument(openPath).then(async (doc) => {
            await window.showTextDocument(doc)
          })

          const message = l10n.t('File created successfully!')
          showMessage(message)
        })
      } else {
        // File exists: offer to open it
        const message = l10n.t(
          'The file name already exists! Please enter a different name',
        )
        const openLabel = l10n.t('Open File')
        window.showWarningMessage(message, openLabel).then((action) => {
          if (action === openLabel) {
            const openPath = Uri.file(file)
            workspace
              .openTextDocument(openPath)
              .then((doc) => window.showTextDocument(doc))
          }
        })
      }
    })
  }
}
