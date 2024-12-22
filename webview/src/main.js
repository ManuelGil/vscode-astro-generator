import Alpine from 'alpinejs';
import { IntegrationsSection } from './components/IntegrationsSection';
import { SearchFilter } from './components/searchFilter';
import './style.css';

const vscode = acquireVsCodeApi();

document.addEventListener('alpine:init', () => {
  Alpine.data('integrations', () => ({
    integrations: [],
    searchQuery: '',
    categories: [
      'Official',
      'Frameworks',
      'Content Loaders',
      'Adapters',
      'CSS + UI',
      'Performance + SEO',
      'Analytics',
      'Accessibility',
      'Images + Media',
      'Dev Toolbar',
      'Utilities',
    ],
    searchFilter: SearchFilter,
    integrationsSection: IntegrationsSection,

    async init() {
      const dataElement = document.querySelector('#integrations-data');
      this.integrations = JSON.parse(dataElement.textContent);
    },

    get filteredIntegrations() {
      if (!this.searchQuery) {
        return this.integrations;
      }

      return this.integrations.filter((integration) => {
        const matchesSearch =
          integration.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          integration.description
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());

        return matchesSearch;
      });
    },

    filteredIntegrationsByCategory(category) {
      return this.filteredIntegrations.filter((integration) =>
        integration.category.includes(category)
      );
    },

    sendIntegrationData(data) {
      vscode.postMessage(JSON.parse(JSON.stringify(data)));
    },
  }));
});

Alpine.start();
