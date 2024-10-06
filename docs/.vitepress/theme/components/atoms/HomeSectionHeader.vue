<template>
  <div :id="sectionId" class="wrapper">
    <div class="container">
      <h2 class="title">{{ title }}</h2>
      <div class="subtitle">
        <slot name="subtitle">
          {{ subtitle }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const { title, subtitle } = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})

const sectionId = computed(() => {
  return title.replace(/\s+/g, '-').toLowerCase()
})
</script>

<style scoped>
.wrapper {
  padding: 0 24px;
  position: relative;
  margin-top: 64px;
}
@media (min-width: 640px) {
  .wrapper {
    padding: 0 48px;
  }
}
@media (min-width: 960px) {
  .wrapper {
    padding: 0 64px;
  }
}
.container {
  margin: 0 auto;
  max-width: 1152px;
}
.title {
  color: var(--vp-c-text-2);
  font-size: 18px;
  line-height: 32px;
  padding-bottom: 12px;
  max-width: 392px;
}
.title:before {
  content: ':_';
  color: var(--vp-c-brand);
  margin-right: 8px;
  display: inline-block;
  font-family: monospace;
  font-weight: 200;
}
.subtitle {
  color: var(--vp-c-text-1);
  max-width: 400px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
  margin-bottom: 32px;
}
@media (min-width: 640px) {
  .subtitle {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}
@media (min-width: 960px) {
  .subtitle {
    max-width: 700px;
    line-height: 64px;
    font-size: 56px;
  }
}
</style>
