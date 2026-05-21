<template>
  <div class="flex flex-col lg:flex-row">
    <div
      class="relative bg-black w-full h-screen flex items-center justify-center"
      @wheel="onWheel"
    >
      <CardUser />
      <Transition name="fade">
        <button
          @click="goToEnd"
          v-show="nextPage"
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
  </div>
  <div class="bg-black w-full h-screen flex items-center justify-center">
    <UserExperience />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CardUser from './CardUser.vue';
import UserExperience from './UserExperience.vue';

const nextPage = ref(false);

setTimeout(() => {
  nextPage.value = true;
}, 3000);

const goToEnd = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
};
const onWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) goToEnd();
};
</script>
