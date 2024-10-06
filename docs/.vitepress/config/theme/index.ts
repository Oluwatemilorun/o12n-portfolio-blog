import type { DefaultTheme } from 'vitepress';
import { nav } from './nav';
import { sidebar } from './sidebar';
import { localSearchOptions } from './search';

export const themeConfig: DefaultTheme.Config = {
  nav, // Nav bar configuration
  // sidebar, // Side bar configuration

  logo: '/logo.png',
  siteTitle: "Isaac O12n",

  darkModeSwitchLabel: 'Theme',
  sidebarMenuLabel: 'Articles',

  outline: {
    level: 'deep',
    label: 'Outline',
  },

  search: {
    provider: 'local',
    options: localSearchOptions,
  },

  socialLinks: [
    { icon: 'github', link: 'https://github.com/Oluwatemilorun' },
    { icon: 'twitter', link: 'https://twitter.com/akiolisa' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/akiolisa' },
  ],

  // Custom extension: Article metadata configuration
  // @ts-ignore
  articleMetadataConfig: {
    author: 'Isaac Oluwatemilorun', // Global default author name for articles
    authorLink: '/about/me', // The default link to jump to when clicking the author's name
  },

  // Custom extension: Footer configuration
  footer: {
    copyright: `Copyright © ${new Date().getFullYear()} Isaac Oluwatemilorun`
  }
}