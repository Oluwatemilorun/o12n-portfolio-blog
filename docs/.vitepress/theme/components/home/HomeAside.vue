<template>
  <div class="aside-wrapper">
    <div class="content">
      <div class="outline-marker" ref="marker" />

      <Suspense>
        <Tags @click="handleTagClick" style="height: 200px;" />
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleTagClick = (tag: string) => {
  console.log(tag);
}
</script>

<style scoped>
.aside-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.content {
  position: relative;
  border-left: 1px solid var(--vp-c-divider);
  padding-left: 16px;
  font-size: 13px;
  font-weight: 500;
}
.outline-marker {
  position: absolute;
  top: 32px;
  left: -1px;
  z-index: 0;
  opacity: 0;
  width: 2px;
  border-radius: 2px;
  height: 18px;
  background-color: var(--vp-c-brand-1);
  transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s,
    opacity 0.25s;
}
.outline-title {
  line-height: 32px;
  font-size: 14px;
  font-weight: 600;
}
</style>
