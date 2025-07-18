// The module 'vscode' contains the VSCode extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { VSCodeMarketplaceClient } from 'vscode-marketplace-client'

// Import the Configs, Controllers, and Providers
import {
  EXTENSION_DISPLAY_NAME,
  EXTENSION_ID,
  EXTENSION_NAME,
  ExtensionConfig,
  USER_PUBLISHER,
} from './app/configs'
import {
  FeedbackController,
  FileGeneratorController,
  ListFilesController,
} from './app/controllers'
import {
  FeedbackProvider,
  IntegrationsProvider,
  ListComponentsProvider,
} from './app/providers'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  // The code you place here will be executed every time your command is executed
  let resource: vscode.WorkspaceFolder | undefined

  // Check if there are workspace folders
  if (
    !vscode.workspace.workspaceFolders ||
    vscode.workspace.workspaceFolders.length === 0
  ) {
    const message = vscode.l10n.t(
      'No workspace folders are open. Please open a workspace folder to use this extension',
    )
    vscode.window.showErrorMessage(message)
    return
  }

  // Optionally, prompt the user to select a workspace folder if multiple are available
  if (vscode.workspace.workspaceFolders.length === 1) {
    resource = vscode.workspace.workspaceFolders[0]
  } else {
    const placeHolder = vscode.l10n.t(
      'Select a workspace folder to use. This folder will be used to load workspace-specific configuration for the extension',
    )
    const selectedFolder = await vscode.window.showWorkspaceFolderPick({
      placeHolder,
    })

    resource = selectedFolder
  }

  // -----------------------------------------------------------------
  // Initialize the extension
  // -----------------------------------------------------------------

  // Get the configuration for the extension
  const config = new ExtensionConfig(
    vscode.workspace.getConfiguration(EXTENSION_ID, resource?.uri),
  )

  // Watch for changes in the configuration
  vscode.workspace.onDidChangeConfiguration((event) => {
    const workspaceConfig = vscode.workspace.getConfiguration(
      EXTENSION_ID,
      resource?.uri,
    )

    if (event.affectsConfiguration(`${EXTENSION_ID}.enable`, resource?.uri)) {
      const isEnabled = workspaceConfig.get<boolean>('enable')

      config.update(workspaceConfig)

      if (isEnabled) {
        const message = vscode.l10n.t(
          'The {0} extension is now enabled and ready to use',
          [EXTENSION_DISPLAY_NAME],
        )
        vscode.window.showInformationMessage(message)
      } else {
        const message = vscode.l10n.t('The {0} extension is now disabled', [
          EXTENSION_DISPLAY_NAME,
        ])
        vscode.window.showInformationMessage(message)
      }
    }

    if (event.affectsConfiguration(EXTENSION_ID, resource?.uri)) {
      config.update(workspaceConfig)
    }
  })

  // -----------------------------------------------------------------
  // Get version of the extension
  // -----------------------------------------------------------------

  // Get the previous version of the extension
  const previousVersion = context.globalState.get('version')
  // Get the current version of the extension
  const currentVersion = context.extension.packageJSON.version

  // Check if the extension is running for the first time
  if (!previousVersion) {
    const message = vscode.l10n.t(
      'Welcome to {0} version {1}! The extension is now active',
      [EXTENSION_DISPLAY_NAME, currentVersion],
    )
    vscode.window.showInformationMessage(message)

    // Update the version in the global state
    context.globalState.update('version', currentVersion)
  }

  // Check if the extension has been updated
  if (previousVersion && previousVersion !== currentVersion) {
    const actions: vscode.MessageItem[] = [
      {
        title: vscode.l10n.t('Release Notes'),
      },
      {
        title: vscode.l10n.t('Dismiss'),
      },
    ]

    const message = vscode.l10n.t(
      "The {0} extension has been updated. Check out what's new in version {1}",
      [EXTENSION_DISPLAY_NAME, currentVersion],
    )
    vscode.window.showInformationMessage(message, ...actions).then((option) => {
      if (!option) {
        return
      }

      // Handle the actions
      switch (option?.title) {
        case actions[0].title:
          vscode.env.openExternal(
            vscode.Uri.parse(
              `https://marketplace.visualstudio.com/items/${USER_PUBLISHER}.${EXTENSION_NAME}/changelog`,
            ),
          )
          break

        default:
          break
      }
    })

    // Update the version in the global state
    context.globalState.update('version', currentVersion)
  }

  // -----------------------------------------------------------------
  // Check for updates
  // -----------------------------------------------------------------

  // Check for updates to the extension
  try {
    // Retrieve the latest version
    VSCodeMarketplaceClient.getLatestVersion(
      USER_PUBLISHER,
      EXTENSION_NAME,
    ).then((latestVersion) => {
      // Check if the latest version is different from the current version
      if (latestVersion !== currentVersion) {
        const actions: vscode.MessageItem[] = [
          {
            title: vscode.l10n.t('Update Now'),
          },
          {
            title: vscode.l10n.t('Dismiss'),
          },
        ]

        const message = vscode.l10n.t(
          'A new version of {0} is available. Update to version {1} now',
          [EXTENSION_DISPLAY_NAME, latestVersion],
        )
        vscode.window
          .showInformationMessage(message, ...actions)
          .then(async (option) => {
            if (!option) {
              return
            }

            // Handle the actions
            switch (option?.title) {
              case actions[0].title:
                await vscode.commands.executeCommand(
                  'workbench.extensions.action.install.anotherVersion',
                  `${USER_PUBLISHER}.${EXTENSION_NAME}`,
                )
                break

              default:
                break
            }
          })
      }
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`Error retrieving extension version: ${errorMessage}`)
  }

  // -----------------------------------------------------------------
  // Register ListFilesController
  // -----------------------------------------------------------------

  // Create a new ListFilesController
  const listFilesController = new ListFilesController(config)

  const disposableListOpenFile = vscode.commands.registerCommand(
    `${EXTENSION_ID}.list.openFile`,
    (uri) => listFilesController.openFile(uri),
  )

  const disposableListGotoLine = vscode.commands.registerCommand(
    `${EXTENSION_ID}.list.gotoLine`,
    (uri, line) => listFilesController.gotoLine(uri, line),
  )

  context.subscriptions.push(disposableListOpenFile, disposableListGotoLine)

  // -----------------------------------------------------------------
  // Register ListComponentsProvider and list commands
  // -----------------------------------------------------------------

  // Create a new ListComponentsProvider
  const listComponentsProvider = new ListComponentsProvider()

  // Register the list provider
  const disposableListComponentsTreeView = vscode.window.createTreeView(
    `${EXTENSION_ID}.listComponentsView`,
    {
      treeDataProvider: listComponentsProvider,
      showCollapseAll: true,
    },
  )

  const disposableRefreshListComponents = vscode.commands.registerCommand(
    `${EXTENSION_ID}.listComponents.refresh`,
    () => listComponentsProvider.refresh(),
  )

  context.subscriptions.push(
    disposableListComponentsTreeView,
    disposableRefreshListComponents,
  )

  // -----------------------------------------------------------------
  // Register FilesProvider and ListMethodsProvider events
  // -----------------------------------------------------------------

  vscode.workspace.onDidSaveTextDocument((document) => {
    const fileExtension = document.fileName.split('.').pop()?.toLowerCase()

    if (fileExtension && config.include.includes(fileExtension)) {
      listComponentsProvider.refresh()
    }
  })

  // -----------------------------------------------------------------
  // Register FeedbackProvider and Feedback commands
  // -----------------------------------------------------------------

  // Create a new FeedbackProvider
  const feedbackProvider = new FeedbackProvider(new FeedbackController())

  // Register the feedback provider
  const feedbackTreeView = vscode.window.createTreeView(
    `${EXTENSION_ID}.feedbackView`,
    {
      treeDataProvider: feedbackProvider,
    },
  )

  // Register the commands
  const disposableReportIssues = vscode.commands.registerCommand(
    `${EXTENSION_ID}.feedback.reportIssues`,
    () => feedbackProvider.controller.reportIssues(),
  )
  const disposableRateUs = vscode.commands.registerCommand(
    `${EXTENSION_ID}.feedback.rateUs`,
    () => feedbackProvider.controller.rateUs(),
  )
  const disposableFollowUs = vscode.commands.registerCommand(
    `${EXTENSION_ID}.feedback.followUs`,
    () => feedbackProvider.controller.followUs(),
  )
  const disposableSupportUs = vscode.commands.registerCommand(
    `${EXTENSION_ID}.feedback.supportUs`,
    () => feedbackProvider.controller.supportUs(),
  )

  context.subscriptions.push(
    feedbackTreeView,
    disposableReportIssues,
    disposableRateUs,
    disposableFollowUs,
    disposableSupportUs,
  )

  // -----------------------------------------------------------------
  // Register the IntegrationsProvider
  // -----------------------------------------------------------------

  // Create a new IntegrationsProvider
  const integrationsProvider = new IntegrationsProvider(context.extensionUri)

  // Register the IntegrationsProvider
  const integrationsWebviewProvider = vscode.window.registerWebviewViewProvider(
    IntegrationsProvider.viewType,
    integrationsProvider,
  )

  context.subscriptions.push(integrationsWebviewProvider)

  // -----------------------------------------------------------------
  // Register the commands
  // -----------------------------------------------------------------

  const fileGeneratorController = new FileGeneratorController(config)

  const disposableGenerateBasicPage = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.generateBasicPage`,
    (uri) => fileGeneratorController.generateBasicPage(uri),
  )
  const disposableGenerateBasicComponent = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.generateBasicComponent`,
    (uri) => fileGeneratorController.generateBasicComponent(uri),
  )
  const disposableGenerateLayoutWithSlots = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.generateLayoutWithSlots`,
    (uri) => fileGeneratorController.generateLayoutWithSlots(uri),
  )
  const disposableGenerateStaticDataPage = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.generateStaticDataPage`,
    (uri) => fileGeneratorController.generateStaticDataPage(uri),
  )
  const disposableGeneratePageWithGetStaticProps =
    vscode.commands.registerCommand(
      `${EXTENSION_ID}.file.generatePageWithGetStaticProps`,
      (uri) => fileGeneratorController.generatePageWithGetStaticProps(uri),
    )
  const disposableGenerateStyledComponent = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.generateStyledComponent`,
    (uri) => fileGeneratorController.generateStyledComponent(uri),
  )
  const disposableGenerateCustomComponent = vscode.commands.registerCommand(
    `${EXTENSION_ID}.file.generateCustomComponent`,
    (uri) => fileGeneratorController.generateCustomComponent(uri),
  )

  context.subscriptions.push(
    disposableGenerateBasicPage,
    disposableGenerateBasicComponent,
    disposableGenerateLayoutWithSlots,
    disposableGenerateStaticDataPage,
    disposableGeneratePageWithGetStaticProps,
    disposableGenerateStyledComponent,
    disposableGenerateCustomComponent,
  )
}

// this method is called when your extension is deactivated
export function deactivate() {}
