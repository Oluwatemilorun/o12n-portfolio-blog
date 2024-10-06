import { metaData } from './constant'
import type { HeadConfig } from 'vitepress';

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  ['meta', { name: 'author', content: 'Isaac Oluwatemilorun' }],
  ['meta', { name: 'keywords', content: 'portfolio, software, backend, frontend, Isaac, mobile, Oluwatemilorun, O12n' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#3c8772' }],

  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Isaac O12n' }],
  ['link', { rel: 'apple-touch-icon', href: `${metaData.site}/favicon.png` }],
  ['link', { rel: 'mask-icon', href: `${metaData.site}/favicon.png`, color: '#3c8772' }],

  ['meta', { name: 'msapplication-navbutton-color', content: '#3c8772' }],
  ['meta', { name: 'msapplication-TileColor', content: '#3c8772' }],
  ['meta', { name: 'msapplication-TileImage', content: `${metaData.site}/favicon.png` }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: metaData.locale }],
  ['meta', { property: 'og:title', content: metaData.title }],
  ['meta', { property: 'og:description', content: metaData.description }],
  ['meta', { property: 'og:site', content: metaData.site }],
  ['meta', { property: 'og:site_name', content: metaData.title }],
  ['meta', { property: 'og:image', content: metaData.image }],
]
