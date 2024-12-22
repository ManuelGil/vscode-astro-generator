import { access, existsSync, mkdirSync, open, writeFile } from 'fs'
import { dirname, join } from 'path'
import { Uri, WorkspaceFolder, commands, l10n, window, workspace } from 'vscode'

import { EXTENSION_DISPLAY_NAME, ExtensionConfig } from '../configs'
import {
  getName,
  getPath,
  showError,
  showMessage,
  showWarning,
} from '../helpers'

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
export async function getStaticProps() {
  const data = await fetch("https://api.example.com/data").then((res) => res.json());
  return { props: { data } };
}

const { data } = Astro.props;
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
      const message = l10n.t(
        'The workspace folder does not exist. Please select a valid workspace folder to use',
      )
      showError(message)
      return
    }

    const folderName = await getPath(
      l10n.t('Enter the folder name where the file will be created'),
      l10n.t('Enter the folder name, e.g. models, services, utils, etc.'),
      relativeFolderPath,
      (path) =>
        !/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)
          ? l10n.t(
              'The folder name is invalid! Please enter a valid folder name',
            )
          : undefined,
    )

    if (!folderName) {
      return
    }

    const componentName = await getName(
      l10n.t('Enter the component name'),
      l10n.t('Enter the component name, e.g. user, product, order, etc.'),
      (name) =>
        !/^[A-Z][a-zA-Z]+?$/.test(name)
          ? l10n.t('The component name is invalid! Please enter a valid name')
          : undefined,
    )

    if (!componentName) {
      return
    }

    const resolvedFolderPath = join(workspaceFolder.uri.fsPath, folderName)
    const fileName = `${this.toDashedString(componentName)}.astro`
    const content = this.fileContent(this.toTitleCase(componentName), template)

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
      const message = l10n.t(
        'The workspace folder does not exist. Please select a valid workspace folder to use',
      )
      showError(message)
      return
    }

    const folderName = await getPath(
      l10n.t('Enter the folder name where the file will be created'),
      l10n.t('Enter the folder name, e.g. models, services, utils, etc.'),
      relativeFolderPath,
      (path) =>
        !/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)
          ? l10n.t(
              'The folder name is invalid! Please enter a valid folder name',
            )
          : undefined,
    )

    if (!folderName) {
      return
    }

    const items = customComponents.map((item: any) => {
      return {
        label: item.name,
        description: item.command,
        detail: item.extension,
      }
    })

    const option = await window.showQuickPick(items, {
      placeHolder: l10n.t(
        'Select the template for the custom element generation',
      ),
    })

    if (option === undefined) {
      return
    }

    const componentName = await getName(
      l10n.t('Enter the component name'),
      l10n.t('Enter the component name, e.g. user, product, order, etc.'),
      (name) =>
        !/^[A-Z][a-zA-Z]+?$/.test(name)
          ? l10n.t('The component name is invalid! Please enter a valid name')
          : undefined,
    )

    if (!componentName) {
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
    const fileName = `${this.toDashedString(componentName)}.${template.extension}`
    const content = this.fileContent(
      this.toTitleCase(componentName),
      componentTemplate,
    )

    this.saveFile(resolvedFolderPath, fileName, content)
  }

  /**
   * The toTitleCase method.
   * Converts the first character of a string to uppercase.
   *
   * @function toTitleCase
   * @private
   * @memberof FilesController
   * @example
   * controller.toTitleCase('input');
   *
   * @param {string} input - The input string
   *
   * @returns {string} - The title case string
   */
  private toTitleCase(input: string) {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }

  /**
   * The toDashedString method.
   * Converts a camelCase string to a dashed string.
   *
   * @function toDashedString
   * @private
   * @memberof FilesController
   * @example
   * controller.toDashedString('input');
   *
   * @param {string} input - The input string
   *
   * @returns {string} - The dashed string
   */
  private toDashedString(input: string) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
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

    if (headerCommentTemplate.length > 0) {
      content += headerCommentTemplate.join('\n') + '\n\n'
    }

    // Add the template
    content += template
      .replace(/{{entityName}}/g, componentName)
      .replace(/{{entityNameLower}}/g, componentName.toLowerCase())

    // Add a final newline
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
        open(file, 'w+', (err: any, fd: any) => {
          if (err) {
            const message = l10n.t(
              'The file has not been created! Please try again',
            )
            showError(message)
            return
          }

          writeFile(fd, fileContent, 'utf8', (err: any) => {
            if (err) {
              const message = l10n.t(
                'The {0} has been created successfully',
                fileName,
              )
              showError(message)
              return
            }

            const openPath = Uri.file(file)

            workspace.openTextDocument(openPath).then(async (filename) => {
              await commands.executeCommand('workbench.action.files.saveAll')
              await window.showTextDocument(filename)
            })
          })
        })

        const message = l10n.t('File created successfully!')
        showMessage(message)
      } else {
        const message = l10n.t(
          'The file name already exists! Please enter a different name',
        )
        showWarning(message)
      }
    })
  }
}
