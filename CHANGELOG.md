# Change Log

All notable changes to the "Astro File Generator" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.6.0] - 2026-05-25

### Added

- Add scheduled Dependabot updates and pull-request CI validation to automate dependency and build checks.
- Add a workspace switching command for selecting the active workspace used during file generation.

### Changed

- Move activation into a dedicated runtime that centralizes configuration sync, version prompts, enablement guards, and list refreshes.
- Improve generation prompts by reusing semantic helpers, honoring the active editor as the default folder, and unifying cancellation messaging.
- Reconcile workspace ownership across runtime, controllers, and helpers by centralizing workspace selection semantics in semantic helper roots.
- Unify file discovery and path normalization through the cached finder and shared normalization helpers to improve cross-platform consistency and refresh component lists faster.
- Refine controller orchestration boundaries so controllers focus exclusively on UX flow while semantic helpers manage workspace, path, and filesystem semantics.

### Fixed

- Align English and Spanish localization bundles with the runtime strings to eliminate missing-key warnings.
- Remove stale helper exports, duplicate semantic path normalization, and residual workspace fallback duplication across generation flows.

## [1.5.0] - 2024-08-16

### Changed

- Update README.md with new features and usage examples
- Update localization files to include new strings
- Enhance file generation logic for better performance

## [1.4.0] - 2025-07-14

### Changed

- Update funding options to "Buy Me a Coffee" and "GitHub Sponsors"
- Enhance localization strings for better user experience
- Improve providers' disposal methods to ensure proper cleanup
- Upgrade dependencies to the latest versions for better performance and security

## [1.3.0] - 2025-03-10

### Added

- Add `vscode-marketplace-client` dependency to check for extension updates and display a notification

### Changed

- Update the `extension.ts` file to use the new `vscode-marketplace-client` dependency
- Update Localization strings for the extension

## [1.2.0] - 2025-01-10

### Changed

- Enhance integrations with new entries in the astro integrations list

## [1.1.0] - 2024-12-24

### Added

- Add `fileGenerator.skipFolderConfirmation` settings to skip the folder confirmation when generating a file

## [1.0.0] - 2024-12-22

### Added

- Initial release of the extension.

[unreleased]: https://github.com/ManuelGil/vscode-astro-generator/compare/v1.6.0...HEAD
[1.6.0]: https://github.com/ManuelGil/vscode-astro-generator/compare/v1.5.0...v1.6.0
[1.5.0]: https://github.com/ManuelGil/vscode-astro-generator/compare/v1.4.0...v1.5.0
[1.4.0]: https://github.com/ManuelGil/vscode-astro-generator/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/ManuelGil/vscode-astro-generator/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/ManuelGil/vscode-astro-generator/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/ManuelGil/vscode-astro-generator/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/ManuelGil/vscode-astro-generator/releases/tag/v1.0.0
