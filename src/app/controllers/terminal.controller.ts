import { l10n, window } from 'vscode'

// Import the Config and helper functions
import { runCommand } from '../helpers'

/**
 * The package installation interface.
 * @interface
 * @public
 */
interface PackageInstallation {
  type: 'npm' | 'yarn' | 'pnpm' | 'bun' | 'deno'
  command: string
}

/**
 * The TerminalController class.
 *
 * @class
 * @classdesc The class that represents the example controller.
 * @export
 * @public
 * @example
 * const controller = new TerminalController(config);
 */
export class TerminalController {
  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods

  /**
   * The method that sets up the integration.
   *
   * @param {Object} integration The integration object.
   * @param {string} integration.name The name of the integration.
   * @param {Array} integration.install The installation commands.
   *
   * @returns {Promise<void>} The promise that resolves when the integration is set up.
   */
  static async installIntegrationPackage(integration: {
    name: string
    installation: PackageInstallation[]
  }): Promise<void> {
    const availableInstallationManagers = integration.installation.map(
      (manager) => manager.type,
    )

    const selectedPackageManager = await window.showQuickPick(
      availableInstallationManagers,
      {
        placeHolder: l10n.t(
          'Select a package manager to install the {0} integration',
          integration.name,
        ),
      },
    )

    if (!selectedPackageManager) {
      return
    }

    const selectedInstallationManager = integration.installation.find(
      (manager) => manager.type === selectedPackageManager,
    )

    if (!selectedInstallationManager) {
      return
    }

    await runCommand(integration.name, selectedInstallationManager.command)
  }
}
