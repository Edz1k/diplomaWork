<script setup lang="ts">
  import NavbarComponent from './components/NavbarComponent.vue';
  import { RouterView } from 'vue-router';
  import { onMounted } from 'vue';
  import { useUser } from './composable/useAnything';
  const { getUserFromLocalStorage } = useUser();

  onMounted(() => {
    getUserFromLocalStorage();
  });
  
</script>
<template>
  <NavbarComponent />
  <RouterView/>
  модалка для редактирования отзыва с в-иф
</template>

<style scoped>

</style>
