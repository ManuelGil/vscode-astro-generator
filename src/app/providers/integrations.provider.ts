import {
  CancellationToken,
  Disposable,
  Uri,
  Webview,
  WebviewView,
  WebviewViewProvider,
  WebviewViewResolveContext,
} from 'vscode'

import { EXTENSION_ID } from '../configs'
import { TerminalController } from '../controllers'
import { getNonce } from '../helpers'

/**
 * The IntegrationsProvider class.
 *
 * @class
 * @classdesc The class that represents the integrations provider.
 * @export
 * @public
 * @implements {WebviewViewProvider}
 * @property {string} static viewType - The view type
 * @property {WebviewView} [_view] - The view
 * @property {OpenAIService} [openAISservice] - The OpenAI service
 * @example
 * const provider = new IntegrationsProvider(extensionUri);
 */
export class IntegrationsProvider implements WebviewViewProvider {
  // -----------------------------------------------------------------
  // Properties
  // -----------------------------------------------------------------

  // Public properties
  /**
   * The view type.
   *
   * @public
   * @static
   * @memberof IntegrationsProvider
   * @type {string}
   */
  static readonly viewType: string = `${EXTENSION_ID}.integrationsView`

  // Private properties
  /**
   * The view.
   *
   * @private
   * @memberof IntegrationsProvider
   * @type {WebviewView}
   */
  private _view?: WebviewView

  /**
   * The disposables.
   *
   * @private
   * @memberof IntegrationsProvider
   * @type {Disposable[]}
   */
  private _disposables: Disposable[] = []

  /**
   * Indicates whether the provider is disposed.
   *
   * @private
   * @memberof IntegrationsProvider
   * @type {boolean}
   */
  private _isDisposed: boolean = false

  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the IntegrationsProvider class.
   *
   * @constructor
   * @param {Uri} _extensionUri - The extension URI
   * @public
   * @memberof IntegrationsProvider
   */
  constructor(private readonly _extensionUri: Uri) {}

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * The resolveWebviewView method.
   *
   * @function resolveWebviewView
   * @param {WebviewView} webviewView - The webview view
   * @param {WebviewViewResolveContext} context - The webview view resolve context
   * @param {CancellationToken} _token - The cancellation token
   * @public
   * @memberof IntegrationsProvider
   * @example
   * provider.resolveWebviewView(webviewView, context, _token);
   *
   * @returns {void} - No return value
   */
  resolveWebviewView(
    webviewView: WebviewView,
    _: WebviewViewResolveContext,
    _token: CancellationToken,
  ): void {
    this._view = webviewView

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,

      localResourceRoots: [this._extensionUri],
    }

    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview)

    const disposable = webviewView.webview.onDidReceiveMessage((data) => {
      TerminalController.installIntegrationPackage(data)
    })

    this._disposables.push(disposable)
  }

  /**
   * Dispose method to clean up resources.
   *
   * @public
   * @memberof IntegrationsProvider
   */
  public dispose(): void {
    if (this._isDisposed) {
      return
    }

    this._disposables.forEach((disposable) => {
      try {
        disposable.dispose()
      } catch (error) {
        console.error('Error disposing disposable:', error)
      }
    })

    this._disposables = []
    this._view = undefined
    this._isDisposed = true
  }

  // Private methods
  /**
   * The _getHtmlForWebview method.
   *
   * @function _getHtmlForWebview
   * @param {Webview} webview - The webview
   * @private
   * @memberof IntegrationsProvider
   * @example
   * const html = provider._getHtmlForWebview(webview);
   *
   * @returns {string} - The HTML for the webview
   */
  private _getHtmlForWebview(webview: Webview): string {
    // Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
    const scriptUri = webview.asWebviewUri(
      Uri.joinPath(this._extensionUri, 'assets', 'main.js'),
    )

    // Do the same for the stylesheet.
    const styleUri = webview.asWebviewUri(
      Uri.joinPath(this._extensionUri, 'assets', 'main.css'),
    )

    // Use a nonce to only allow a specific script to be run.
    const nonce = getNonce()

    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <!--
      Use a content security policy to only allow loading styles from our extension directory,
      and only allow scripts that have a specific nonce.
      (See the 'webview-sample' extension sample for img-src content security policy examples)
    -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'none'; img-src vscode-resource: https:; style-src ${webview.cspSource};
      script-src 'nonce-${nonce}' 'unsafe-eval' ${webview.cspSource};"
    />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="${styleUri}" rel="stylesheet" />

    <title>Astro Integrations</title>
  </head>
  <body class="min-h-screen bg-background text-white">
    <div x-data="integrations">
      <aside x-html="searchFilter"></aside>
      <aside x-html="integrationsSection"></aside>
    </div>
    <script nonce="${nonce}" src="${scriptUri}" defer></script>
    <script nonce="${nonce}">
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      }, { capture: true });
    </script>
  </body>
</html>
`
  }
}
