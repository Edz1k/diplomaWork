<script setup lang="ts">
  import NavbarComponent from './components/NavbarComponent.vue';
  import { RouterView } from 'vue-router';
  import { onMounted } from 'vue';
  import { useUser } from './composable/useAnything';
  import Toast from 'primevue/toast';
  import FooterComponent from './components/FooterComponent.vue';
  const { getUserFromLocalStorage } = useUser();

  onMounted(() => {
    getUserFromLocalStorage();
  });
  
</script>
<template>
  <Toast/>
  <NavbarComponent />
  <RouterView/>
  <FooterComponent />
</template>

<style scoped>

</style>
