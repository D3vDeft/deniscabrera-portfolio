<template>
  <IntroDescription @show-description="handleShow" v-bind="user" />
  <div ref="nextSection" v-if="finish">
    <UserDescription />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IntroDescription from './components/IntroDescription.vue';
import UserDescription from './components/UserDescription.vue';
import type UserProps from './interfaces/userPropertiesInterface';

const user: UserProps = {
  fullName: 'Denis Cabrera',
  title: 'Desarrollador',
  occupation: 'full-stack',
};

const nextSection = ref<HTMLElement | null>(null);

const finish = ref(false);

const handleShow = (isActive: boolean) => {
  nextSection.value?.scrollIntoView({ behavior: 'smooth' });
  finish.value = isActive;
};
</script>
