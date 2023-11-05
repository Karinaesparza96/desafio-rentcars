<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import BaseLayout from './views/BaseLayout.vue';

</script>

<template>
  <BaseLayout>
    <template #header>
      <NavBar/>
    </template>
  </BaseLayout>
  <RouterView />
</template>


