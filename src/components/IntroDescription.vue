<template>
  <div class="relative bg-black w-full h-screen flex items-center justify-center" @wheel="onWheel">
    <div class="flex flex-col items-center gap-6 px-6 text-center">
      <h1 class="text-5xl sm:text-6xl md:text-8xl text-amber-50 font-serif italic tracking-wide">
        {{ userFullName }}
      </h1>
      <div class="h-px w-48 bg-yellow-400/50"></div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl text-amber-50 font-serif">
        {{ userTitle }}
        <span class="text-yellow-400 font-bold not-italic">{{ userOccupation }}</span>
      </h2>
    </div>
    <Transition name="toast">
      <div
        v-if="showScrollAlert"
        class="toast-alert absolute top-8 left-1/2 -translate-x-1/2 z-10 bg-black px-5 py-3 max-w-[90vw] text-center"
      >
        <p class="text-white italic text-sm sm:text-base tracking-wide">
          La paciencia es una virtud de la cual algunos deciden prescindir.
        </p>
      </div>
    </Transition>

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
const showScrollAlert = ref(false);
let scrollAttempts = 0;
let alertTimeout: ReturnType<typeof setTimeout> | null = null;
const emit = defineEmits<{ showDescription: [show: boolean] }>();

const onScroll = () => {
  atTop.value = window.scrollY === 0;
};

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});

const show = () => {
  if (!finish.value) return;
  emit('showDescription', finish.value);
};

const onWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    if (!finish.value) {
      scrollAttempts++;
      if (scrollAttempts >= 50) {
        scrollAttempts = 0;
        showScrollAlert.value = true;
        if (alertTimeout) clearTimeout(alertTimeout);
        alertTimeout = setTimeout(() => {
          showScrollAlert.value = false;
        }, 2500);
      }
    } else {
      show();
    }
  }
};

onMounted(async () => {
  window.addEventListener('scroll', onScroll);
  // handleScrollBehavior();
  await startFullName();
  await startTitle();
  await startOccupation();
  finish.value = true;
});
</script>

<style scoped>
.toast-alert {
  border: 1px solid rgba(250, 204, 21, 0.2);
  border-left: 2px solid rgba(250, 204, 21, 0.7);
  box-shadow:
    0 0 40px rgba(250, 204, 21, 0.05),
    0 4px 24px rgba(0, 0, 0, 0.5);
}

.toast-enter-active {
  transition:
    opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.toast-leave-active {
  transition:
    opacity 0.3s cubic-bezier(0.55, 0, 1, 0.45),
    transform 0.3s cubic-bezier(0.55, 0, 1, 0.45);
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(-14px) scale(0.95);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.97);
}
.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
</style>
