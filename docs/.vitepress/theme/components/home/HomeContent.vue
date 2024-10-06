<template>
  <div class="container">
    <div class="aside">
      <div class="aside-curtain" />
      <div class="aside-container">
        <div class="aside-content">
          <HomeAside />
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-container">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
}
.aside {
  position: relative;
  display: none;
  order: 2;
  flex-grow: 1;
  padding-left: 32px;
  width: 100%;
  max-width: 256px;
}
@media (min-width: 1280px) {
  .container {
    display: flex;
    justify-content: center;
  }
  .aside {
    display: block;
  }
}
.aside-container {
  position: absolute;
  top: 0;
  padding-top: 48px;
  width: 224px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
}
.aside-container::-webkit-scrollbar {
  display: none;
}
.aside-curtain {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 224px;
  height: 32px;
  background: linear-gradient(transparent, var(--vp-c-bg) 70%);
}
.aside-content {
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
}
.content {
  position: relative;
  margin: 0 auto;
  width: 100%;
}
@media (min-width: 960px) {
  .content {
    padding: 0 32px 128px;
  }
}
@media (min-width: 1280px) {
  .content {
    order: 1;
    margin: 0;
    min-width: 640px;
  }
}
.content-container {
  margin: 0 auto;
  min-height: 200px;
}
</style>
