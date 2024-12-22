import { WorkspaceConfiguration } from 'vscode'

import {
  ContentTemplate,
  CUSTOM_COMPONENTS,
  ENABLE,
  EXCLUDE,
  HEADER_COMMENT_TEMPLATE,
  INCLUDE,
  INSERT_FINAL_NEWLINE,
  SHOW_PATH,
} from './constants.config'

/**
 * The ExtensionConfig class.
 *
 * @class
 * @classdesc The class that represents the configuration of the extension.
 * @export
 * @public
 * @property {WorkspaceConfiguration} config - The workspace configuration
 * @property {string[]} include - The files to include
 * @property {string[]} exclude - The files to exclude
 * @property {boolean} showPath - Whether to show the path or not
 * @example
 * const config = new ExtensionConfig(workspace.getConfiguration());
 * console.log(config.include);
 * console.log(config.exclude);
 */
export class ExtensionConfig {
  // -----------------------------------------------------------------
  // Properties
  // -----------------------------------------------------------------

  // Public properties

  /**
   * The flag to enable the extension.
   * @type {boolean}
   * @public
   * @memberof ExtensionConfig
   * @example
   * const config = new ExtensionConfig(workspace.getConfiguration());
   * console.log(config.enable);
   */
  enable: boolean

  /**
   * The files to include.
   * @type {string[]}
   * @public
   * @memberof ExtensionConfig
   * @example
   * const config = new ExtensionConfig(workspace.getConfiguration());
   * console.log(config.include);
   */
  include: string[]

  /**
   * The files to exclude.
   * @type {string[]}
   * @public
   * @memberof ExtensionConfig
   * @example
   * const config = new ExtensionConfig(workspace.getConfiguration());
   * console.log(config.exclude);
   */
  exclude: string[]

  /**
   * Whether to show the path or not.
   * @type {boolean}
   * @public
   * @memberof ExtensionConfig
   * @example
   * const config = new ExtensionConfig(workspace.getConfiguration());
   * console.log(config.showPath);
   */
  showPath: boolean

  /**
   * The header comment template.
   * @type {string[]}
   * @public
   * @memberof ExtensionConfig
   * @example
   * const config = new ExtensionConfig(workspace.getConfiguration());
   * console.log(config.headerCommentTemplate);
   */
  headerCommentTemplate: string[]

  /**
   * The flag to insert a final newline.
   * @type {boolean}
   * @public
   * @memberof ExtensionConfig
   * @example
   * const config = new ExtensionConfig(workspace.getConfiguration());
   * console.log(config.insertFinalNewline);
   */
  insertFinalNewline: boolean

  /**
   * The custom components.
   * @type {object[]}
   * @public
   * @memberof ExtensionConfig
   * @example
   * const config = new ExtensionConfig(workspace.getConfiguration());
   * console.log(config.customComponents);
   */
  customComponents: ContentTemplate[]

  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the ExtensionConfig class.
   *
   * @constructor
   * @param {WorkspaceConfiguration} config - The workspace configuration
   * @public
   * @memberof ExtensionConfig
   */
  constructor(readonly config: WorkspaceConfiguration) {
    this.enable = config.get<boolean>('enable', ENABLE)
    this.include = config.get<string[]>('files.include', INCLUDE)
    this.exclude = config.get<string[]>('files.exclude', EXCLUDE)
    this.showPath = config.get<boolean>('files.showPath', SHOW_PATH)
    this.headerCommentTemplate = config.get<string[]>(
      'formatting.headerCommentTemplate',
      HEADER_COMMENT_TEMPLATE,
    )
    this.insertFinalNewline = config.get<boolean>(
      'formatting.insertFinalNewline',
      INSERT_FINAL_NEWLINE,
    )
    this.customComponents = config.get<ContentTemplate[]>(
      'templates.customComponents',
      CUSTOM_COMPONENTS,
    )
  }

  // -----------------------------------------------------------------
  // Methods
  // -----------------------------------------------------------------

  // Public methods
  /**
   * The update method.
   *
   * @function update
   * @param {WorkspaceConfiguration} config - The workspace configuration
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * config.update(workspace.getConfiguration());
   */
  update(config: WorkspaceConfiguration): void {
    this.enable = config.get<boolean>('enable', ENABLE)
    this.include = config.get<string[]>('files.include', INCLUDE)
    this.exclude = config.get<string[]>('files.exclude', EXCLUDE)
    this.showPath = config.get<boolean>('files.showPath', SHOW_PATH)
    this.headerCommentTemplate = config.get<string[]>(
      'formatting.headerCommentTemplate',
      HEADER_COMMENT_TEMPLATE,
    )
    this.insertFinalNewline = config.get<boolean>(
      'formatting.insertFinalNewline',
      INSERT_FINAL_NEWLINE,
    )
    this.customComponents = config.get<ContentTemplate[]>(
      'templates.customComponents',
      CUSTOM_COMPONENTS,
    )
  }
}
