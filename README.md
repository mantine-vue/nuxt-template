# Mantine Vue Nuxt template

This is a template for [Nuxt](https://nuxt.com/) + [Mantine Vue](https://mantine-vue.dev/).
Nuxt is the Vue-native equivalent of Next.js: it provides SSR, file-based routing, layouts and
static generation, so it is the closest match to Mantine React's `next-app-template`.

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing) and [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro)
- Oxlint setup for TypeScript and Vue sources
- Server-side rendering with cookie-based color scheme

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – build application for production
- `generate` – pre-render the application to static HTML
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types with `nuxt typecheck`
- `lint` – runs oxlint and stylelint
- `format:test` – checks files with oxfmt
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `typecheck`, `format:test`, `lint` and `vitest` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `format:write` – formats all files with oxfmt
