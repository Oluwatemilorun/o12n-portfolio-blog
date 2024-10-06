import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid';

import { metaData } from './constant'
import { head } from './head'
import { markdown } from './markdown'
import { customElements } from './custom-elements'
import { themeConfig } from './theme'

export default withMermaid(
  defineConfig({
    lang: metaData.lang,
    title: metaData.title,
    titleTemplate: `:title | ${metaData.title}`,
    description: metaData.description,

    cleanUrls: true, // remove the trailing .html from URLs.
    lastUpdated: true, // show last updated date and time.
    
    head, // <head> tag in the page HTML.
    markdown, // markdown parser options
    themeConfig, // theme configuration options

    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag),
        },
      },
    },
  }),
)
