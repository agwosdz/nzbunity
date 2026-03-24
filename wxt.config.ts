import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: [
      // "<all_urls>",
      'activeTab',
      'notifications',
      'scripting',
      'storage',
      'tabs',
      'webRequest',
      // "webRequestBlocking",
    ],
    commands: {
      _execute_action: {
        description: 'Open the popup',
        suggested_key: {
          default: 'Alt+Shift+U',
        },
      },
      'toggle-queue': {
        description: 'Toggle queue',
      },
      'open-web-ui': {
        description: 'Open downloader web UI',
      },
      'activate-newznab': {
        description: 'Add 1-click actions to the current Newznab page',
        suggested_key: {
          default: 'Alt+Shift+N',
        },
      },
    },
    browser_specific_settings: {
      gecko: {
        id: 'agwosdz@gmail.com',
        strict_min_version: '140.0',
        data_collection_permissions: {
          required: ['none'],
        },
      },
    },
  },
});
