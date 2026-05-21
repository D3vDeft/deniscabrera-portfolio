<template>
  <div class="relative bg-black w-full h-screen flex items-center justify-center" @wheel="onWheel">
    <div class="flex flex-col items-center gap-6">
      <h1 class="text-8xl text-amber-50 font-serif italic tracking-wide">
        {{ userFullName }}
      </h1>
      <div class="h-px w-48 bg-yellow-400/50"></div>
      <h2 class="text-4xl text-amber-50 font-serif">
        {{ userTitle }} <span class="text-yellow-400 font-bold not-italic">{{ userOccupation }}</span>
      </h2>
    </div>
    <Transition name="fade">
      <button
        @click="show"
        v-show="finish && atTop"
        class="absolute bottom-20 left-1/2 -translate-x-1/2"
      >
        <div class="text-2xl animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="48" height="48">
            <path
              fill="rgb(255, 255, 255)"
              d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
            />
          </svg>
        </div>
      </button>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { useTypingAnimation } from '@/helpers/useTypingAnimation';
import type UserProps from '@/interfaces/userPropertiesInterface';
import { onMounted, onUnmounted, ref } from 'vue';

const { fullName, occupation, title } = defineProps<UserProps>();

const { displayedText: userFullName, startTyping: startFullName } = useTypingAnimation(
  fullName,
  125,
);
const { displayedText: userTitle, startTyping: startTitle } = useTypingAnimation(title, 125);
const { displayedText: userOccupation, startTyping: startOccupation } = useTypingAnimation(
  occupation,
  125,
);

const finish = ref(false);
const atTop = ref(true);
const emit = defineEmits<{ showDescription: [show: boolean] }>();

const onScroll = () => {
  atTop.value = window.scrollY === 0;
};

onMounted(async () => {
  window.addEventListener('scroll', onScroll);
  await startFullName();
  await startTitle();
  await startOccupation();
  finish.value = true;
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});

const show = () => {
  if (!finish.value) return;
  emit('showDescription', finish.value);
};

const onWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) show();
};
</script>
