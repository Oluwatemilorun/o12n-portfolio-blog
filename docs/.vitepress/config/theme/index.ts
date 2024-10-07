import type { DefaultTheme } from 'vitepress';
import { nav } from './nav';
import { sidebar } from './sidebar';
import { localSearchOptions } from './search';

export const themeConfig: DefaultTheme.Config = {
  nav, // Nav bar configuration
  // sidebar, // Side bar configuration

  logo: '/favicon.png',
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

  footer: {
    message: 'The contents and posts are licensed under the <a href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>, <br /> and the underlying <a href="https://github.com/Oluwatemilorun/o12n-portfolio-blog">source codes</a> used to build the site, format, and display the contents are released under the <a href="https://github.com/Oluwatemilorun/o12n-portfolio-blog/blob/main/LICENSE-MIT">MIT License</a>.',
    copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/Oluwatemilorun">Isaac Oluwatemilorun</a>`,
  }
}