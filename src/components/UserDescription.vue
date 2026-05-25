<template>
  <div @wheel="onWheel">
    <div class="bg-black w-full min-h-screen flex flex-col items-center justify-center py-8 gap-8">
      <CardUser />
      <Transition name="fade">
        <button v-show="nextPage" @click="goToEnd" class="text-2xl animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="48" height="48">
            <path
              fill="rgb(255, 255, 255)"
              d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"
            />
          </svg>
        </button>
      </Transition>
    </div>
    <div class="w-full">
      <UserExperience />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CardUser from './CardUser.vue';
import UserExperience from './UserExperience.vue';

const nextPage = ref(false);
const wheelDetected = ref(false);

const onWheel = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    wheelDetected.value = true;
    nextPage.value = false;
    console.log(e.deltaY);
    goToEnd();
  } else if (e.deltaY < 0) {
    console.log(e.deltaY);
    wheelDetected.value = true;
    goToTop();
  }
};

const goToEnd = () => {
  nextPage.value = false;
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
};

const goToTop = () => {
  window.scrollBy({
    top: -window.innerHeight,
    behavior: 'smooth',
  });
};

setTimeout(() => {
  if (wheelDetected.value === false) {
    nextPage.value = true;
  }
}, 3000);
</script>
