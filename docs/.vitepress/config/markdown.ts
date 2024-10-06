import type { MarkdownOptions } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';
import footnote from 'markdown-it-footnote';

export const markdown: MarkdownOptions = {
  // Shiki themes, see https://github.com/shikijs/shiki/blob/main/docs/themes.md
  theme: {
    light: 'github-light',
    dark: 'github-dark-dimmed'
  },

  config: (md) => {
    md.use(mathjax3);
    md.use(footnote);

    // Add the <ArticleMetadata/> component after the <h1> tag in all documents
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options);
      if (tokens[idx].tag === 'h1') htmlResult += `\n<ClientOnly><ArticleMetadata v-if="($frontmatter?.showArticleMetadata ?? true)" :article="$frontmatter" class="hidden-on-large" /></ClientOnly>`;
      return htmlResult;
    }
  },
};