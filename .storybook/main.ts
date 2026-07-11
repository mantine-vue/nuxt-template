import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
    enableCrashReports: false,
  },
  stories: ['../app/components/**/*.(stories|story).@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-themes'],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
};

export default config;
