<template>
  <div id="comment-wrapper"></div>
</template>

<script lang="ts" setup>
  import { reactive, toRefs, onMounted } from 'vue';
  import { useData } from 'vitepress';
  import Gitalk from 'gitalk';
  import md5 from 'blueimp-md5';

  import '../../styles/gitalk.css';

  const { page } = useData();
  
  const label = page.value.relativePath.includes('categories') ? page.value.relativePath.split('/')[1] : 'uncategorised'

  const gitalk = new Gitalk({
    clientID: import.meta.env.VITE_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
    repo: 'o12n-portfolio-blog',
    owner: 'Oluwatemilorun',
    admin: ['Oluwatemilorun'],
    labels: ['blog', label],
    id: md5(page.value.relativePath),
    language: 'en',
    title: (document.title || '').split('|')[0].trim(),
    distractionFreeMode: false,
    // proxy: ''
  });

  onMounted(() => {
    gitalk.render('comment-wrapper')
  })
</script>

<style scoped></style>
