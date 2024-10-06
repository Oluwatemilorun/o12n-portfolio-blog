<template>
  <div id="works" class="wrapper">
    <div class="container">
      <h2 class="title">Works</h2>
      <div class="typewriter">
        <span class="wrap">{{ typedText }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sentences = [
  'I Build Software Tools',
  'I Write Scalable API Services',
  'I Build Android & iOS Apps',
  'I Build Desktop & Web Apps',
  'I Create, Transform, Destroy.',
]

const typingInterval = 500; // ms
const typingDelay = 2000; // ms
const typewriterIsDeleting = ref(false);
const typedText = ref('');
const typedTextIndex = ref(0);

const tick = () => {
  const fullText = sentences[typedTextIndex.value];

  if (typewriterIsDeleting.value) {
    typedText.value = fullText.substring(0, typedText.value.length - 1);
  } else {
    typedText.value += fullText[typedText.value.length];
  }

  let delta = 200 - Math.random() * 100;

  if (typewriterIsDeleting.value) {
    delta /= 2;
  }

  // The text has been typed out. Wait (typingDelay) and start deleting.
  if (!typewriterIsDeleting.value && typedText.value === fullText) {
    delta = typingDelay;
    typewriterIsDeleting.value = true;
  }
  // The text has been deleted. Start typing the next sentence.
  else if (typewriterIsDeleting.value && typedText.value === '') {
    typewriterIsDeleting.value = false;

    // Start typing the next sentence.
    // If there are no more sentences, start over.
    if (typedTextIndex.value === sentences.length - 1) {
      typedTextIndex.value = 0;
    } else {
      typedTextIndex.value++;
    }

    delta = typingInterval;
  }
  
  setTimeout(tick, delta);
}

tick();
</script>

<style scoped>
.wrapper {
  padding: 0 24px;
  position: relative;
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
.typewriter {
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
  .typewriter {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}
@media (min-width: 960px) {
  .typewriter {
    max-width: 700px;
    line-height: 64px;
    font-size: 56px;
  }
}
.typewriter > .wrap {
  border-right: 0.08em solid var(--vp-c-text-1);
}
</style>
