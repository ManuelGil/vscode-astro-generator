// The module 'vscode' contains the VSCode extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'

import { ExtensionRuntime } from './extension.runtime'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  const runtime = new ExtensionRuntime(context)

  try {
    const initialized = await runtime.initialize()
    if (!initialized) {
      return
    }

    runtime.start()
  } catch (error) {
    console.error('Failed to activate extension:', error)
    vscode.window.showErrorMessage(
      vscode.l10n.t(
        'Failed to activate the extension. Check the logs for more details.',
      ),
    )
  }
}

// this method is called when your extension is deactivated
export function deactivate() {}
