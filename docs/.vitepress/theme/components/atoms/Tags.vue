<template>
  <div id="wordcloud-container"></div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onBeforeUnmount } from "vue";

import { data as posts } from "../../posts.data.js";

const { WordCloud } = await import("@antv/g2plot");

const tags = computed(() => {
  const tagsGlossary: Record<string, number> = posts.reduce((obj, item) => {
    item.tags.forEach((tag) => {
      obj[tag] = (obj[tag] || 0) + 1;
    });

    return obj;
  }, {});

  return Object.entries(tagsGlossary).map(([name, value]) => ({
    name,
    value,
  }));
});

const emit = defineEmits(["click"]);

let wordCloud;
onMounted(() => {
  wordCloud = new WordCloud("wordcloud-container", {
    data: tags.value,
    wordField: "name",
    weightField: "value",
    colorField: "name",
    spiral: "rectangular",
    renderer: "svg",
    wordStyle: {
      fontFamily: "Verdana",
      fontSize: [14, 35],
      rotation: 0,
    },
  });

  wordCloud.on("element:click", (args) => {
    const data = args.data.data.datum
    
    emit("click", data.name)
  });

  wordCloud.render();
});

onBeforeUnmount(() => {
  wordCloud.destroy();
});
</script>
