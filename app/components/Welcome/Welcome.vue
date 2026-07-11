<script setup lang="ts">
import { Anchor, Text, Title } from '@mantine-vue/core';
import classes from './Welcome.module.css';
</script>

<template>
  <Title :class="classes.title" ta="center" :mt="100">
    Welcome to
    <Text
      inherit
      variant="gradient"
      component="span"
      :gradient="{ from: 'pink', to: 'yellow' }"
    >
      Mantine
    </Text>
  </Title>
  <Text c="dimmed" ta="center" size="lg" :maw="580" mx="auto" mt="xl">
    This starter Nuxt project includes a minimal setup for server side rendering, if you want to
    learn more on Mantine Vue + Nuxt integration follow
    <Anchor href="https://mantine-vue.dev/guides/nuxt/" size="lg">this guide</Anchor>. To get
    started edit app/pages/index.vue file.
  </Text>
</template>
