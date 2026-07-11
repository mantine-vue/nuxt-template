<script setup lang="ts">
import { MantineProvider } from '@mantine-vue/core';
import { theme } from '~/theme';

// Persist the user's color scheme in a cookie so the server and client render
// the same value and there is no hydration flash.
const colorScheme = useCookie<'light' | 'dark' | 'auto'>('mantine-color-scheme', {
  default: () => 'auto',
});

useHead({
  htmlAttrs: {
    'data-mantine-color-scheme': colorScheme.value === 'dark' ? 'dark' : 'light',
  },
});
</script>

<template>
  <MantineProvider :theme="theme" :default-color-scheme="colorScheme">
    <NuxtPage />
  </MantineProvider>
</template>
