/**
 * EXTENSION_ID: The unique identifier of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_ID);
 *
 * @returns {string} - The unique identifier of the extension
 */
export const EXTENSION_ID: string = 'astroGenerator'

/**
 * EXTENSION_NAME: The name of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_NAME);
 *
 * @returns {string} - The name of the extension
 */
export const EXTENSION_NAME: string = 'vscode-astro-generator'

/**
 * EXTENSION_DISPLAY_NAME: The name of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_DISPLAY_NAME);
 *
 * @returns {string} - The name of the extension
 */
export const EXTENSION_DISPLAY_NAME: string = 'Astro File Generator'

/**
 * USER_NAME: The githubUsername of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(USER_NAME);
 *
 * @returns {string} - The githubUsername of the extension
 */
export const USER_NAME: string = 'ManuelGil'

/**
 * USER_PUBLISHER: The publisher of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(USER_PUBLISHER);
 *
 * @returns {string} - The publisher of the extension
 */
export const USER_PUBLISHER: string = 'imgildev'

/**
 * EXTENSION_REPOSITORY_URL: The repository URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_REPOSITORY_URL);
 *
 * @returns {string} - The repository URL of the extension
 */
export const EXTENSION_REPOSITORY_URL: string = `https://github.com/${USER_NAME}/${EXTENSION_NAME}`

/**
 * EXTENSION_MARKETPLACE_URL: The marketplace URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_MARKETPLACE_URL);
 *
 * @returns {string} - The marketplace URL of the extension
 */
export const EXTENSION_MARKETPLACE_URL: string = `https://marketplace.visualstudio.com/items?itemName=${USER_PUBLISHER}.${EXTENSION_NAME}`

/**
 * EXTENSION_BUGS_URL: The bugs URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_BUGS_URL);
 *
 * @returns {string} - The bugs URL of the extension
 */
export const EXTENSION_BUGS_URL: string = `${EXTENSION_REPOSITORY_URL}/issues`

/**
 * EXTENSION_SOCIAL_MEDIA_URL: The social media URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_SOCIAL_MEDIA_URL);
 *
 * @returns {string} - The social media URL of the extension
 */
export const EXTENSION_SOCIAL_MEDIA_URL: string = 'https://github.com/ManuelGil'

/**
 * EXTENSION_SPONSOR_URL: The sponsor URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_SPONSOR_URL);
 *
 * @returns {string} - The sponsor URL of the extension
 */
export const EXTENSION_SPONSOR_URL: string =
  'https://github.com/sponsors/ManuelGil'

/**
 * EXTENSION_PAYPAL_URL: The PayPal URL of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_PAYPAL_URL);
 *
 * @returns {string} - The PayPal URL of the extension
 */
export const EXTENSION_PAYPAL_URL: string =
  'https://www.paypal.com/paypalme/ManuelFGil'

/**
 * ENABLE: The flag to enable the extension.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(ENABLE);
 *
 * @returns {boolean} - The flag to enable the extension
 */
export const ENABLE: boolean = true

/**
 * INCLUDE: The files to include.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(INCLUDE);
 *
 * @returns {string[]} - The files to include
 */
export const INCLUDE: string[] = ['astro']
/**
 * EXCLUDE: The files to exclude.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXCLUDE);
 *
 * @returns {string[]} - The files to exclude
 */
export const EXCLUDE: string[] = [
  '**/node_modules/**',
  '**/dist/**',
  '**/out/**',
  '**/build/**',
  '**/.*/**',
]

/**
 * SHOW_PATH: Whether to show the path or not.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(SHOW_PATH);
 *
 * @returns {boolean} - Whether to show the path or not
 */
export const SHOW_PATH: boolean = true

/**
 * TEMPLATES: The header comment template to generate.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(HEADER_COMMENT_TEMPLATE);
 *
 * @returns {string[]} - The header comment template to generate
 */
export const HEADER_COMMENT_TEMPLATE: string[] = []

/**
 * INSERT_FINAL_NEWLINE: The flag to insert a final newline.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(INSERT_FINAL_NEWLINE);
 *
 * @returns {boolean} - The flag to insert a final newline
 */
export const INSERT_FINAL_NEWLINE: boolean = true

/**
 * ContentTemplate: The custom component template.
 * @interface
 * @public
 * @memberof Constants
 * @property {string} name - The name of the template
 * @property {string} description - The description of the template
 * @property {string} extension - The extension of the template
 * @property {string[]} template - The template to generate
 */
export interface ContentTemplate {
  name: string
  description: string
  extension: string
  template: string[]
}

/**
 * CUSTOM_COMPONENTS: The custom components to generate.
 * @type {ContentTemplate[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(CUSTOM_COMPONENTS);
 *
 * @returns {ContentTemplate[]} - The custom components to generate
 */
export const CUSTOM_COMPONENTS: ContentTemplate[] = [
  {
    'name': 'Blog Post',
    'description': 'A blog post template',
    'extension': 'md',
    'template': [
      '---',
      "title: 'Title'",
      "description: 'Description'",
      "date: '2022-01-01'",
      "tags: ['tag1', 'tag2']",
      '---',
      '',
      '# Title',
      '',
      'Description',
      '',
      '## Subtitle',
      '',
      'Content',
    ],
  },
]
