import { dirname } from 'path'
import { l10n, Uri, WorkspaceFolder, window, workspace } from 'vscode'

import {
  ContentTemplate,
  EXTENSION_DISPLAY_NAME,
  ExtensionConfig,
} from '../configs'
import {
  getName,
  getPath,
  getSelectedWorkspaceFolder,
  relativePath,
  saveFile,
  showError,
  showMessage,
} from '../helpers'

const OPERATION_CANCELED_MESSAGE = l10n.t('Operation canceled')

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
const title = "Basic Page";
const description = "This is a basic page generated automatically.";
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="description" content={description} />
    <title>{title}</title>
  </head>

  <body>
    <h1>Hello, Astro!</h1>
    <p>This is a basic page generated automatically.</p>
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
interface Props {
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
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
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
interface Post {
  id: number;
  title: string;
  description: string;
}

const posts: Post[] = [
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
        <li>
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
   * The generatePageWithDataFetching method.
   *
   * @function generatePageWithDataFetching
   * @public
   * @async
   * @memberof FilesController
   * @example
   * controller.generatePageWithDataFetching(Uri.parse('path'));
   *
   * @param {Uri} folderPath - The folder path
   *
   * @returns {Promise<void>} - The promise with no return value
   */
  async generatePageWithDataFetching(folderPath?: Uri): Promise<void> {
    const template = `---
const response = await fetch("https://api.example.com/data")
const data: Array<{
  id: number;
  name: string;
  description: string;
}> = await response.json();
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
        <li>
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
interface Props {
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
    const relativeDirectoryPath: string | undefined =
      await this.resolveTargetDirectory(folderPath, true)

    if (!relativeDirectoryPath) {
      return
    }

    const componentName: string | undefined = await this.promptComponentName()

    if (!componentName) {
      return
    }

    const filename: string = `${componentName}.astro`
    const fileContent: string = this.fileContent(componentName, template)

    await saveFile(relativeDirectoryPath, filename, fileContent, this.config)
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
    const relativeDirectoryPath: string | undefined =
      await this.resolveTargetDirectory(folderPath)

    if (!relativeDirectoryPath) {
      return
    }

    const { customComponents } = this.config

    // Build quick pick items for user selection. Note: the `extension`
    // field must NOT include a leading dot. The generator constructs
    // filenames as `${ComponentName}.${extension}`.
    const templateOptions = customComponents.map((item: ContentTemplate) => {
      return {
        label: item.name,
        description: item.description,
        detail: l10n.t('Extension: {0}', item.extension),
      }
    })

    const selectedTemplateOption = await window.showQuickPick(templateOptions, {
      placeHolder: l10n.t(
        'Select the template for the custom element generation',
      ),
    })

    if (!selectedTemplateOption) {
      void showMessage(OPERATION_CANCELED_MESSAGE)
      return
    }

    const componentName: string | undefined = await this.promptComponentName()

    if (!componentName) {
      return
    }

    const selectedTemplateDescriptor = customComponents.find(
      (item: ContentTemplate) => item.name === selectedTemplateOption.label,
    )

    if (!selectedTemplateDescriptor) {
      const message = l10n.t(
        'The template for the custom component does not exist. Please try again',
      )
      showError(message)
      return
    }

    const componentTemplate: string =
      selectedTemplateDescriptor.template.join('\n')

    // Compose filename with extension (no leading dot expected in config)
    const filename: string = `${componentName}.${selectedTemplateDescriptor.extension}`
    const fileContent: string = this.fileContent(
      componentName,
      componentTemplate,
    )

    await saveFile(relativeDirectoryPath, filename, fileContent, this.config)
  }

  private async resolveTargetDirectory(
    folderPath: Uri | undefined,
    allowActiveEditorFallback: boolean = false,
  ): Promise<string | undefined> {
    let workspaceFolder: WorkspaceFolder | undefined
    let relativeDirectoryPath: string = ''
    const hasWorkspaceFolders: boolean = Boolean(
      workspace.workspaceFolders?.length,
    )

    if (folderPath) {
      workspaceFolder = workspace.getWorkspaceFolder(folderPath)
      relativeDirectoryPath = relativePath(folderPath, true, this.config)
    } else {
      workspaceFolder = getSelectedWorkspaceFolder(this.config)

      if (!workspaceFolder && hasWorkspaceFolders) {
        const placeHolder: string = l10n.t(
          'Select a workspace folder to use. This folder will be used to generate the file',
        )
        workspaceFolder = await window.showWorkspaceFolderPick({
          placeHolder,
        })
      }
    }

    if (!workspaceFolder) {
      void showMessage(OPERATION_CANCELED_MESSAGE)
      return undefined
    }

    if (allowActiveEditorFallback) {
      relativeDirectoryPath = this.resolveInitialDirectoryPath(
        workspaceFolder,
        folderPath,
        relativeDirectoryPath,
      )
    }

    if (folderPath && this.config.skipFolderConfirmation) {
      return relativeDirectoryPath
    }

    const relativeDirectoryInput: string | undefined = await getPath(
      l10n.t('Enter the folder name where the file will be created'),
      l10n.t('Enter the folder name, e.g. models, services, utils, etc'),
      relativeDirectoryPath,
      (path) =>
        !/^(?!\/)[^\sÀ-ÿ]+?$/.test(path)
          ? l10n.t(
              'The folder name is invalid! Please enter a valid folder name',
            )
          : undefined,
    )

    if (!relativeDirectoryInput) {
      void showMessage(OPERATION_CANCELED_MESSAGE)
      return undefined
    }

    return relativeDirectoryInput
  }

  private async promptComponentName(): Promise<string | undefined> {
    const componentName: string | undefined = await getName(
      l10n.t('Enter the component name'),
      l10n.t('Enter the component name, e.g. User, Product, Order, etc'),
      (name) =>
        !/^[a-zA-Z\-]+?$/.test(name)
          ? l10n.t('The component name is invalid! Please enter a valid name')
          : undefined,
    )

    if (!componentName) {
      void showMessage(OPERATION_CANCELED_MESSAGE)
      return undefined
    }

    return componentName
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

  private resolveInitialDirectoryPath(
    workspaceFolder: WorkspaceFolder,
    folderPath: Uri | undefined,
    currentRelativePath: string,
  ): string {
    if (folderPath || currentRelativePath) {
      return currentRelativePath
    }

    const activeEditor = window.activeTextEditor
    if (
      !activeEditor ||
      activeEditor.document.isUntitled ||
      activeEditor.document.uri.scheme !== workspaceFolder.uri.scheme
    ) {
      return currentRelativePath
    }

    const activeWorkspaceFolder = workspace.getWorkspaceFolder(
      activeEditor.document.uri,
    )

    if (
      !activeWorkspaceFolder ||
      activeWorkspaceFolder.uri.toString() !== workspaceFolder.uri.toString()
    ) {
      return currentRelativePath
    }

    const activeFolderUri = Uri.file(dirname(activeEditor.document.uri.fsPath))
    const relativeFolderPath = relativePath(activeFolderUri, true, this.config)

    if (!relativeFolderPath || relativeFolderPath === '.') {
      return ''
    }

    return relativeFolderPath
  }
}
