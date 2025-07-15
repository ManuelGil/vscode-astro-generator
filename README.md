# Astro File Generator

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/imgildev.vscode-astro-generator?style=for-the-badge&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-astro-generator)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/imgildev.vscode-astro-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-astro-generator)
[![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/imgildev.vscode-astro-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-astro-generator)
[![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/imgildev.vscode-astro-generator?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-astro-generator&ssr=false#review-details)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/vscode-astro-generator?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-astro-generator)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/vscode-astro-generator?style=for-the-badge&logo=github)](https://github.com/ManuelGil/vscode-astro-generator/blob/main/LICENSE)

> 👩‍🚀 A Visual Studio Code extension for rapid, template-driven creation of Astro components, pages, and layouts.

## Why Astro File Generator?

Astro File Generator integrates seamlessly with any VS Code-based editor (including Visual Studio Code, VSCodium, WindSurf, and Cursor) to eliminate repetitive boilerplate and maintain consistent project conventions. It enables you to:

- Scaffold pages, components, layouts, and data-driven pages with a single command.
- Apply consistent formatting and header comments automatically.
- Define and use custom templates to match your team's standards.
- Remain focused in the editor by generating files without context switching.

![Astro File Generator](https://raw.githubusercontent.com/ManuelGil/vscode-astro-generator/main/images/astro-file-generator.gif)

## Table of Contents

- [Astro File Generator](#astro-file-generator)
  - [Why Astro File Generator?](#why-astro-file-generator)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Key Features](#key-features)
  - [Project Settings](#project-settings)
  - [Settings Options](#settings-options)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Changelog](#changelog)
  - [Authors](#authors)
  - [Follow Me](#follow-me)
  - [Other Extensions](#other-extensions)
  - [Recommended Browser Extension](#recommended-browser-extension)
  - [License](#license)

## Installation

1. Open your VS Code-based editor.
2. Navigate to the **Extensions** view (`Ctrl+Shift+X` on Windows/Linux or `⌘+Shift+X` on macOS).
3. Search for **Astro File Generator** or install directly from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-astro-generator).
4. Click **Install** and reload the editor when prompted.

Alternatively, download the `.vsix` package from the [Releases page](https://github.com/ManuelGil/vscode-astro-generator/releases) and install via **Extensions: Install from VSIX…** in the Command Palette.

## Getting Started

1. Open the **Command Palette** (`Ctrl+Shift+P` or `⌘+Shift+P`).
2. Type `Astro File Generator:` to view available commands.
3. Select a template (Basic Page, Component, Layout with Slots, Static Data Page, Page with `getStaticProps`, Styled Component, or Custom Component).
4. Provide the target folder and file name when prompted.

The extension will create the file with the configured boilerplate, apply formatting, and insert any header comments.

## Key Features

- **Predefined Templates**
  - Basic Page
  - Basic Component
  - Layout with Slots
  - Static Data Page
  - Page with `getStaticProps`
  - Styled Component

- **Custom Templates**
  Define workspace-level templates using placeholders (e.g., `{{ComponentName}}`) in your settings.

- **Automatic Formatting**
  Apply formatting and optional header comments on save.

- **File Watching**
  Monitor Astro files and enforce formatting rules automatically.

- **Editor Compatibility**
  Works in VS Code, VSCodium, WindSurf, Cursor, and any other compatible editor.

## Project Settings

Add or update `.vscode/settings.json` in your project root:

```jsonc
{
  "astroGenerator.enable": true,
  "astroGenerator.files.include": ["astro"],
  "astroGenerator.files.exclude": [
    "**/node_modules/**",
    "**/dist/**",
    "**/out/**",
    "**/build/**",
    "**/.*/**"
  ],
  "astroGenerator.files.showPath": true,
  "astroGenerator.files.skipFolderConfirmation": false,
  "astroGenerator.formatting.headerCommentTemplate": [
    "/*",
    " * This file was generated by Astro File Generator",
    " */"
  ],
  "astroGenerator.formatting.insertFinalNewline": true,
  "astroGenerator.templates.customComponents": [
    {
      "name": "React Page",
      "description": "Create a React page",
      "extension": ".jsx",
      "template": [
        "export const meta = { title: 'Page Title' };",
        "export default function Page() {",
        "  return <h1>Hello, World!</h1>;",
        "}"
      ]
    },
    {
      "name": "React Layout",
      "description": "Create a React layout",
      "extension": ".jsx",
      "template": [
        "export default function Layout({ children }) {",
        "  return <div>{children}</div>;",
        "}"
      ]
    },
    {
      "name": "React Component",
      "description": "Create a React component",
      "extension": ".jsx",
      "template": [
        "export default function {{ComponentName}}() {",
        "  return <div>Hello, World!</div>;",
        "}"
      ]
    }
  ]
}
```

Reload VS Code to apply the new settings.

## Settings Options

Configure Astro File Generator settings in your `.vscode/settings.json` file to customize the extension's behavior. The following settings are available:

- `astroGenerator.enable`: Enable or disable the extension. Default is `true`.
- `astroGenerator.files.include`: The file extensions to watch for changes. Default is `["astro"]`.
- `astroGenerator.files.exclude`: The files to exclude from watching. Default is `["**/node_modules/**", "**/dist/**", "**/out/**", "**/build/**", "**/.*/**"]`.
- `astroGenerator.files.showPath`: Show the path of the file in the file name. Default is `true`.
- `astroGenerator.files.skipFolderConfirmation`: Skip the folder confirmation when creating a new file. Default is `false`.
- `astroGenerator.formatting.headerCommentTemplate`: The template to use for the header comment. Default is `["/*", " * This file was generated by Astro File Generator", " */"]`.
- `astroGenerator.formatting.insertFinalNewline`: Insert a final newline at the end of the file. Default is `true`.
- `astroGenerator.templates.customComponents`: The templates to use when creating a new file. You can create custom templates for your files.

The `astroGenerator.templates.customComponents` setting is an array of objects with the following properties:

- `name`: The name of the template. Example: "React Page".
- `description`: A description of the template. Example: "Create a new page".
- `extension`: The file extension for the template. Example: `.jsx`.
- `template`: The template content for the file. Use `{{ComponentName}}` as a placeholder for the component name.

For more information on configuring Auto TS Generator settings, refer to the [Project Settings](#project-settings) section.

## Contributing

Astro File Generator is open-source and welcomes community contributions:

1. Fork the [GitHub repository](https://github.com/ManuelGil/vscode-astro-generator).
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes, commit them, and push to your fork.
4. Submit a Pull Request against the `main` branch.

Before contributing, please review the [Contribution Guidelines](https://github.com/ManuelGil/vscode-astro-generator/blob/main/CONTRIBUTING.md) for coding standards, testing, and commit message conventions. Open an Issue if you find a bug or want to request a new feature.

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, religion, or other personal characteristic. Please review our [Code of Conduct](https://github.com/ManuelGil/vscode-astro-generator/blob/main/CODE_OF_CONDUCT.md) before participating in our community.

## Changelog

For a complete list of changes, see the [CHANGELOG.md](https://github.com/ManuelGil/vscode-astro-generator/blob/main/CHANGELOG.md).

## Authors

- **Manuel Gil** - _Owner_ - [@ManuelGil](https://github.com/ManuelGil)

See also the list of [contributors](https://github.com/ManuelGil/vscode-astro-generator/contributors) who participated in this project.

## Follow Me

- **GitHub**: [![GitHub followers](https://img.shields.io/github/followers/ManuelGil?style=for-the-badge\&logo=github)](https://github.com/ManuelGil)
- **X (formerly Twitter)**: [![X Follow](https://img.shields.io/twitter/follow/imgildev?style=for-the-badge\&logo=x)](https://twitter.com/imgildev)

## Other Extensions

- **[Auto Barrel](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-auto-barrel)**
  Automatically generates and maintains barrel (`index.ts`) files for your TypeScript projects.

- **[Angular File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator)**
  Generates boilerplate and navigates your Angular (9→20+) project from within the editor, with commands for components, services, directives, modules, pipes, guards, reactive snippets, and JSON2TS transformations.

- **[NestJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-generator)**
  Simplifies creation of controllers, services, modules, and more for NestJS projects, with custom commands and Swagger snippets.

- **[NestJS Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-snippets-extension)**
  Ready-to-use code patterns for creating controllers, services, modules, DTOs, filters, interceptors, and more in NestJS.

- **[T3 Stack / NextJS / ReactJS File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nextjs-generator)**
  Automates file creation (components, pages, hooks, API routes, etc.) in T3 Stack (Next.js, React) projects and can start your dev server from VSCode.

- **[Drizzle ORM Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-drizzle-snippets)**
  Collection of code snippets to speed up Drizzle ORM usage, defines schemas, migrations, and common database operations in TypeScript/JavaScript.

- **[CodeIgniter 4 Spark](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-spark)**
  Scaffolds controllers, models, migrations, libraries, and CLI commands in CodeIgniter 4 projects using Spark, directly from the editor.

- **[CodeIgniter 4 Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-snippets)**
  Snippets for accelerating development with CodeIgniter 4, including controllers, models, validations, and more.

- **[CodeIgniter 4 Shield Snippets](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-codeigniter4-shield-snippets)**
  Snippets tailored to CodeIgniter 4 Shield for faster authentication and security-related code.

- **[Mustache Template Engine - Snippets & Autocomplete](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-mustache-snippets)**
  Snippets and autocomplete support for Mustache templates, making HTML templating faster and more reliable.

## Recommended Browser Extension

For developers who work with `.vsix` files for offline installations or distribution, the complementary [**One-Click VSIX**](https://chromewebstore.google.com/detail/imojppdbcecfpeafjagncfplelddhigc?utm_source=item-share-cb) extension is recommended, available for both Chrome and Firefox.

> **One-Click VSIX** integrates a direct "Download Extension" button into each VSCode Marketplace page, ensuring the file is saved with the `.vsix` extension, even if the server provides a `.zip` archive. This simplifies the process of installing or sharing extensions offline by eliminating the need for manual file renaming.

- [Get One-Click VSIX for Chrome &rarr;](https://chromewebstore.google.com/detail/imojppdbcecfpeafjagncfplelddhigc?utm_source=item-share-cb)
- [Get One-Click VSIX for Firefox &rarr;](https://addons.mozilla.org/es-ES/firefox/addon/one-click-vsix/)

## License

This project is licensed under the **MIT License**. See the [LICENSE](https://github.com/ManuelGil/vscode-astro-generator/blob/main/LICENSE) file for details.
