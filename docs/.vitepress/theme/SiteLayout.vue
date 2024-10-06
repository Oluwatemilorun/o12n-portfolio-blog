<template>
  <ClientOnly>
    <Layout>

      <!-- <template #home-hero-image>
        <div></div>
      </template> -->

      <template #home-hero-info-before>
        <div class="home-greeting">Hello there. I am,</div>
      </template>

      <!-- <template #home-hero-info-after>
        <div>Learn. Document. Share. </div>
      </template> -->

      <template #doc-after>
        <Comment v-if="frontmatter?.showComment ?? true" :key="md5(page.relativePath)" />
      </template>
      <template #aside-top>
        <ArticleMetadata v-if="frontmatter?.showArticleMetadata ?? true" :article="frontmatter" />
      </template>
    </Layout>
  </ClientOnly>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import DefaultTheme from 'vitepress/theme';
  import { useData } from 'vitepress';
  import md5 from 'blueimp-md5';

  import Comment from './components/layout/Comment.vue';
  import ArticleMetadata from './components/layout/ArticleMetadata.vue';

  const { Layout } = DefaultTheme;
  const { page, theme, frontmatter } = useData();
</script>

<style scoped></style>
