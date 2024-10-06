<template>
  <HomeSectionHeader title="Works">
    <template #subtitle>
      <div  class="typewriter">
        <span class="wrap" :class="{'blink-caret': blinkCaret}">{{ typedText }}</span>
      </div>
    </template>
  </HomeSectionHeader>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const sentences = [
  'I Build Software Tools.',
  'I Write Scalable API Services.',
  'I Build Android & iOS Apps.',
  'I Build Desktop & Web Apps.',
  'I Create, Transform, Destroy.',
]

const typingInterval = 500; // ms
const typingDelay = 2000; // ms
const typewriterIsDeleting = ref(false);
const typedText = ref('');
const typedTextIndex = ref(0);
const blinkCaret = ref(false);

const tick = () => {
  blinkCaret.value = false;
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

  // The text has been typed out. Wait (typingDelay), blink the caret and start deleting.
  if (!typewriterIsDeleting.value && typedText.value === fullText) {
    delta = typingDelay;
    typewriterIsDeleting.value = true;
    blinkCaret.value = true;
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
.typewriter > .wrap {
  padding-right: 4px;
  border-right: 0.08em solid var(--vp-c-brand);
}
.typewriter > .wrap.blink-caret {
  animation: blink-caret .5s step-end infinite;
}
.typewriter > .wrap:empty {
  padding-right: 0px;
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--vp-c-brand) }
}
</style>
