import {
  commands,
  ExtensionContext,
  env,
  l10n,
  MessageItem,
  Uri,
  WorkspaceFolder,
  window,
  workspace,
} from 'vscode'
import { VSCodeMarketplaceClient } from 'vscode-marketplace-client'

import {
  CommandIds,
  ContextKeys,
  EXTENSION_DISPLAY_NAME,
  EXTENSION_ID,
  EXTENSION_NAME,
  EXTENSION_REPOSITORY_URL,
  ExtensionConfig,
  USER_PUBLISHER,
  ViewIds,
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

export class ExtensionRuntime {
  /**
   * Avoids repeated disabled-state notifications across command invocations.
   */
  private hasDisabledWarningBeenShown = false

  /**
   * Current workspace-scoped extension configuration.
   */
  private config!: ExtensionConfig

  /**
   * Provider for the list components TreeView, allowing refresh on file changes.
   */
  private listComponentsProvider!: ListComponentsProvider

  constructor(public readonly context: ExtensionContext) {}

  async initialize(): Promise<boolean> {
    const workspaceFolder = await this.selectWorkspaceFolder()

    if (!workspaceFolder) {
      return false
    }

    this.initializeConfiguration(workspaceFolder)

    if (!this.isExtensionEnabled()) {
      return false
    }

    this.startVersionChecks()

    return true
  }

  async start(): Promise<void> {
    this.registerWorkspaceCommands()
    this.registerTreeViews()
    this.registerFileCommands()
    this.registerListCommands()
    this.registerFileWatchers()
    this.registerFeedbackCommands()
  }

  /**
   * Runs non-blocking version checks after startup.
   */
  private startVersionChecks(): void {
    void this.handleLocalVersionNotifications()
    void this.checkMarketplaceVersion()
  }

  /**
   * Returns the extension version declared in package metadata.
   */
  private getCurrentVersion(): string {
    return this.context.extension.packageJSON?.version ?? '0.0.0'
  }

  /**
   * Handles first-run and local update notifications.
   */
  private async handleLocalVersionNotifications(): Promise<void> {
    const previousVersion = this.context.globalState.get<string>(
      ContextKeys.Version,
    )

    const currentVersion = this.getCurrentVersion()

    if (!previousVersion) {
      const welcomeMessage = l10n.t(
        'Welcome to {0} version {1}! The extension is now active',
        EXTENSION_DISPLAY_NAME,
        currentVersion,
      )

      window.showInformationMessage(welcomeMessage)

      await this.context.globalState.update(ContextKeys.Version, currentVersion)

      return
    }

    if (previousVersion !== currentVersion) {
      const actionReleaseNotes: MessageItem = {
        title: l10n.t('Release Notes'),
      }
      const actionDismiss: MessageItem = { title: l10n.t('Dismiss') }
      const availableActions = [actionReleaseNotes, actionDismiss]

      const updateMessage = l10n.t(
        "The {0} extension has been updated. Check out what's new in version {1}",
        EXTENSION_DISPLAY_NAME,
        currentVersion,
      )

      const userSelection = await window.showInformationMessage(
        updateMessage,
        ...availableActions,
      )

      if (userSelection?.title === actionReleaseNotes.title) {
        const changelogUrl = `${EXTENSION_REPOSITORY_URL}/blob/main/CHANGELOG.md`
        env.openExternal(Uri.parse(changelogUrl))
      }

      await this.context.globalState.update(ContextKeys.Version, currentVersion)
    }
  }

  /**
   * Checks Marketplace for a newer published extension version.
   */
  private async checkMarketplaceVersion(): Promise<void> {
    const currentVersion = this.getCurrentVersion()

    try {
      const latestVersion = await VSCodeMarketplaceClient.getLatestVersion(
        USER_PUBLISHER,
        EXTENSION_NAME,
      )

      if (latestVersion === currentVersion) {
        return
      }

      const actionUpdateNow: MessageItem = { title: l10n.t('Update Now') }
      const actionDismiss: MessageItem = { title: l10n.t('Dismiss') }
      const availableActions = [actionUpdateNow, actionDismiss]

      const updateMessage = l10n.t(
        'A new version of {0} is available. Update to version {1} now',
        EXTENSION_DISPLAY_NAME,
        latestVersion,
      )

      const userSelection = await window.showInformationMessage(
        updateMessage,
        ...availableActions,
      )

      if (userSelection?.title === actionUpdateNow.title) {
        await commands.executeCommand(
          'workbench.extensions.action.install.anotherVersion',
          `${USER_PUBLISHER}.${EXTENSION_NAME}`,
        )
      }
    } catch (error) {
      console.error('Error retrieving extension version:', error)
    }
  }

  /**
   * Selects the workspace folder to use for the extension.
   * VSCode does not guarantee a workspace folder exists during activation,
   * so this method explicitly handles missing workspace scenarios.
   */
  private async selectWorkspaceFolder(): Promise<WorkspaceFolder | undefined> {
    const workspaceFolders = workspace.workspaceFolders

    // Check if there are workspace folders
    if (!workspaceFolders || workspaceFolders.length === 0) {
      const message = l10n.t(
        '{0}: No workspace folders are open. Please open a workspace folder to use this extension',
        EXTENSION_DISPLAY_NAME,
      )
      window.showErrorMessage(message)

      return undefined
    }

    // Try to load previously selected workspace folder from global state
    const previousFolderUri = this.context.globalState.get<string>(
      ContextKeys.SelectedWorkspaceFolder,
    )
    let previousFolder: WorkspaceFolder | undefined

    // Find the workspace folder by URI
    if (previousFolderUri) {
      previousFolder = workspaceFolders.find(
        (folder) => folder.uri.toString() === previousFolderUri,
      )
    }

    // Determine the workspace folder to use
    // Only one workspace folder available
    if (workspaceFolders.length === 1) {
      return workspaceFolders[0]
    }

    // Use previously selected workspace folder if available
    if (previousFolder) {
      // Notify the user which workspace is being used
      window.showInformationMessage(
        l10n.t('Using workspace folder: {0}', previousFolder.name),
      )

      return previousFolder
    }

    // Multiple workspace folders and no previous selection
    const placeHolder = l10n.t(
      '{0}: Select a workspace folder to use. This folder will be used to load workspace-specific configuration for the extension',
      EXTENSION_DISPLAY_NAME,
    )
    const selectedFolder = await window.showWorkspaceFolderPick({
      placeHolder,
    })

    // Remember the selection for future use
    if (selectedFolder) {
      this.context.globalState.update(
        ContextKeys.SelectedWorkspaceFolder,
        selectedFolder.uri.toString(),
      )
    }

    return selectedFolder
  }

  /**
   * Initializes workspace configuration and registers configuration listeners.
   *
   * @param selectedWorkspaceFolder - The workspace folder used to load the configuration.
   */
  private initializeConfiguration(
    selectedWorkspaceFolder: WorkspaceFolder,
  ): void {
    this.config = new ExtensionConfig(
      workspace.getConfiguration(EXTENSION_ID, selectedWorkspaceFolder.uri),
    )

    this.config.workspaceSelection = selectedWorkspaceFolder.uri.fsPath

    workspace.onDidChangeConfiguration((configurationChangeEvent) => {
      const updatedWorkspaceConfig = workspace.getConfiguration(
        EXTENSION_ID,
        selectedWorkspaceFolder.uri,
      )

      if (
        configurationChangeEvent.affectsConfiguration(
          `${EXTENSION_ID}.enable`,
          selectedWorkspaceFolder.uri,
        )
      ) {
        const isExtensionEnabled = updatedWorkspaceConfig.get<boolean>('enable')

        this.config.update(updatedWorkspaceConfig)

        if (isExtensionEnabled) {
          const enabledMessage = l10n.t(
            'The {0} extension is now enabled and ready to use',
            EXTENSION_DISPLAY_NAME,
          )
          window.showInformationMessage(enabledMessage)
        } else {
          const disabledMessage = l10n.t(
            'The {0} extension is now disabled',
            EXTENSION_DISPLAY_NAME,
          )
          window.showInformationMessage(disabledMessage)
        }
      }

      if (
        configurationChangeEvent.affectsConfiguration(
          EXTENSION_ID,
          selectedWorkspaceFolder.uri,
        )
      ) {
        this.config.update(updatedWorkspaceConfig)
      }
    })
  }

  /**
   * Returns whether commands should execute under current configuration.
   *
   * @remarks
   * Shows a disabled warning once until the extension is re-enabled.
   */
  private isExtensionEnabled(): boolean {
    const isEnabled = this.config.enable

    if (isEnabled) {
      this.hasDisabledWarningBeenShown = false
      return true
    }

    if (!this.hasDisabledWarningBeenShown) {
      window.showErrorMessage(
        l10n.t(
          'The {0} extension is disabled in settings. Enable it to use its features',
          EXTENSION_DISPLAY_NAME,
        ),
      )
      this.hasDisabledWarningBeenShown = true
    }

    return false
  }

  /**
   * Registers workspace selection command for multi-root workspaces.
   */
  private registerWorkspaceCommands(): void {
    const disposable = commands.registerCommand(
      `${EXTENSION_ID}.${CommandIds.ChangeWorkspace}`,
      async () => {
        const selectedFolder = await window.showWorkspaceFolderPick({
          placeHolder: l10n.t('Select a workspace folder to use'),
        })

        if (!selectedFolder) {
          return
        }

        await this.context.globalState.update(
          ContextKeys.SelectedWorkspaceFolder,
          selectedFolder.uri.toString(),
        )

        const updatedConfiguration = workspace.getConfiguration(
          EXTENSION_ID,
          selectedFolder.uri,
        )

        this.config.update(updatedConfiguration)

        this.config.workspaceSelection = selectedFolder.uri.fsPath

        window.showInformationMessage(
          l10n.t('Switched to workspace folder: {0}', selectedFolder.name),
        )
      },
    )

    this.context.subscriptions.push(disposable)
  }

  private registerFileCommands(): void {
    const fileGeneratorController = new FileGeneratorController(this.config)

    const registerGuardedFileCommand = (
      commandId: CommandIds,
      handler: (uri?: Uri) => Promise<void>,
    ): void => {
      const disposable = commands.registerCommand(
        `${EXTENSION_ID}.${commandId}`,
        async (uri?: Uri) => {
          if (!this.isExtensionEnabled()) {
            return
          }
          await handler(uri)
        },
      )

      this.context.subscriptions.push(disposable)
    }

    registerGuardedFileCommand(CommandIds.GenerateBasicPage, (uri) =>
      fileGeneratorController.generateBasicPage(uri),
    )
    registerGuardedFileCommand(CommandIds.GenerateBasicComponent, (uri) =>
      fileGeneratorController.generateBasicComponent(uri),
    )
    registerGuardedFileCommand(CommandIds.GenerateLayoutWithSlots, (uri) =>
      fileGeneratorController.generateLayoutWithSlots(uri),
    )
    registerGuardedFileCommand(CommandIds.GenerateStaticDataPage, (uri) =>
      fileGeneratorController.generateStaticDataPage(uri),
    )
    registerGuardedFileCommand(CommandIds.generatePageWithDataFetching, (uri) =>
      fileGeneratorController.generatePageWithDataFetching(uri),
    )
    registerGuardedFileCommand(CommandIds.GenerateStyledComponent, (uri) =>
      fileGeneratorController.generateStyledComponent(uri),
    )
    registerGuardedFileCommand(CommandIds.GenerateCustomComponent, (uri) =>
      fileGeneratorController.generateCustomComponent(uri),
    )
  }

  private registerListCommands(): void {
    const listFilesController = new ListFilesController(this.config)

    const disposableListOpenFile = commands.registerCommand(
      `${EXTENSION_ID}.${CommandIds.ListOpenFile}`,
      (uri) => listFilesController.openFile(uri),
    )

    const disposableListGotoLine = commands.registerCommand(
      `${EXTENSION_ID}.${CommandIds.ListGotoLine}`,
      (uri, line) => listFilesController.gotoLine(uri, line),
    )

    this.context.subscriptions.push(
      disposableListOpenFile,
      disposableListGotoLine,
    )
  }

  private registerTreeViews(): ListComponentsProvider {
    const listComponentsProvider = new ListComponentsProvider()

    const disposableListComponentsTreeView = window.createTreeView(
      `${EXTENSION_ID}.${ViewIds.ListComponentsView}`,
      {
        treeDataProvider: listComponentsProvider,
        showCollapseAll: true,
      },
    )

    const disposableRefreshListComponents = commands.registerCommand(
      `${EXTENSION_ID}.${CommandIds.RefreshListComponents}`,
      () => listComponentsProvider.refresh(),
    )

    const integrationsProvider = new IntegrationsProvider(
      this.context.extensionUri,
    )

    const integrationsWebviewProvider = window.registerWebviewViewProvider(
      IntegrationsProvider.viewType,
      integrationsProvider,
    )

    this.context.subscriptions.push(
      listComponentsProvider,
      disposableListComponentsTreeView,
      disposableRefreshListComponents,
      integrationsProvider,
      integrationsWebviewProvider,
    )

    return listComponentsProvider
  }

  private registerFileWatchers(): void {
    const normalizeExtension = (value: string): string =>
      value
        .trim()
        .replace(/^[*.]+/, '')
        .toLowerCase()

    const matchesIncludedExtension = (
      filePath: string | undefined,
    ): boolean => {
      if (!filePath) {
        return false
      }

      const fileExtension = filePath.split('.').pop()?.toLowerCase()
      if (!fileExtension) {
        return false
      }

      return this.config.include.some((includedExtension) => {
        const normalizedExtension = normalizeExtension(includedExtension)
        return normalizedExtension.length > 0
          ? fileExtension === normalizedExtension
          : false
      })
    }

    const refreshIfMatches = (filePaths: (string | undefined)[]): void => {
      if (filePaths.some((filePath) => matchesIncludedExtension(filePath))) {
        this.listComponentsProvider.refresh()
      }
    }

    const disposableOnDidSaveTextDocument = workspace.onDidSaveTextDocument(
      (document) => {
        refreshIfMatches([document.fileName])
      },
    )

    const disposableOnDidCreateFiles = workspace.onDidCreateFiles((event) => {
      refreshIfMatches(event.files.map((file) => file.fsPath))
    })

    const disposableOnDidDeleteFiles = workspace.onDidDeleteFiles((event) => {
      refreshIfMatches(event.files.map((file) => file.fsPath))
    })

    const disposableOnDidRenameFiles = workspace.onDidRenameFiles((event) => {
      const renamedPaths = event.files.flatMap((file) => [
        file.oldUri.fsPath,
        file.newUri.fsPath,
      ])
      refreshIfMatches(renamedPaths)
    })

    this.context.subscriptions.push(
      disposableOnDidSaveTextDocument,
      disposableOnDidCreateFiles,
      disposableOnDidDeleteFiles,
      disposableOnDidRenameFiles,
    )
  }

  private registerFeedbackCommands(): void {
    const feedbackProvider = new FeedbackProvider(new FeedbackController())

    const feedbackTreeView = window.createTreeView(
      `${EXTENSION_ID}.${ViewIds.FeedbackView}`,
      {
        treeDataProvider: feedbackProvider,
      },
    )

    const disposableReportIssues = commands.registerCommand(
      `${EXTENSION_ID}.${CommandIds.FeedbackReportIssues}`,
      () => feedbackProvider.controller.reportIssues(),
    )
    const disposableRateUs = commands.registerCommand(
      `${EXTENSION_ID}.${CommandIds.FeedbackRateUs}`,
      () => feedbackProvider.controller.rateUs(),
    )
    const disposableFollowUs = commands.registerCommand(
      `${EXTENSION_ID}.${CommandIds.FeedbackFollowUs}`,
      () => feedbackProvider.controller.followUs(),
    )
    const disposableSupportUs = commands.registerCommand(
      `${EXTENSION_ID}.${CommandIds.FeedbackSupportUs}`,
      () => feedbackProvider.controller.supportUs(),
    )

    this.context.subscriptions.push(
      feedbackProvider,
      feedbackTreeView,
      disposableReportIssues,
      disposableRateUs,
      disposableFollowUs,
      disposableSupportUs,
    )
  }
}
