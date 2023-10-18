<template>
    <div class="card">
      <Galleria
        :value="images"
        :responsiveOptions="responsiveOptions"
        :numVisible="5"
        :circular="true"
        containerStyle="max-width: 640px"
        :showItemNavigators="true"
        :showThumbnails="false"
        :showItemNavigatorsOnHover="true"
        :showIndicators="true"
        :autoPlay="true"
        :transitionInterval="2000"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.source" style="width: 100%; display: block;" />
        </template>
      </Galleria>
    </div>
  </template>
  <script setup lang="ts">
      
  import Galleria from 'primevue/galleria';
  import { ref } from 'vue';
  
  const images = ref([
    { source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Hydroton.jpg/600px-Hydroton.jpg' },
  ]);
  const responsiveOptions = ref([
    {
      breakpoint: '991px',
      numVisible: 4,
    },
    {
      breakpoint: '767px',
      numVisible: 3,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ]);
  
  </script>
  <style scoped></style>
  