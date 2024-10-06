import type { DefaultTheme } from 'vitepress';

export const localSearchOptions: DefaultTheme.LocalSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: 'Search site',
          buttonAriaLabel: 'Search'
        },
      }
    }
  }
};