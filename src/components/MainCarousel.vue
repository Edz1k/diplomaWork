<template> 
    <div class="card">
      <div class="main">
          <div class="infotext">
              <h1><span>Лидер в производстве и продаже</span> керамзита по доступным ценам на выгодных условиях</h1>
          </div>
          <BlockWithAnswer />
        
      </div>
      
      <Galleria
        :value="images"
        :numVisible="5"
        :circular="true"
        containerStyle="max-width: 640px"
        :showItemNavigators="true"
        :showThumbnails="false"
        :showItemNavigatorsOnHover="true"
        :showIndicators="true"
        :autoPlay="true"
        :transitionInterval="10000"
      >
        <template #item="slotProps">
          <img :src="slotProps.item.source" style="width: 100%; display: block;" />
        </template>
      </Galleria>
    </div>
    <QualitiesComponent class="qualitiesComponent"/>
    <KeramzitForm class="KeramzitForm"/>
    <!-- <StepscComponent /> -->
  </template>
  <script setup lang="ts">
      
  import Galleria from 'primevue/galleria';
  import BlockWithAnswer from './BlockWithAnswer.vue';
  import QualitiesComponent from './QualitiesComponent.vue';
  import KeramzitForm from './KeramzitForm.vue';
  // import StepscComponent from './StepscComponent.vue';
  import { ref } from 'vue';
  
  const images = ref([
    { source: 'https://dekolit-keramzit.kz/wp-content/uploads/2019/03/slide1-2-1.jpg' },
    { source: 'https://dekolit-keramzit.kz/wp-content/uploads/2019/03/slide1-3-1.jpg'},
    { source: 'https://dekolit-keramzit.kz/wp-content/uploads/2019/03/slide1-1-1.jpg'}
  ]);
  
  </script>
  <style scoped>
  :deep(.p-galleria-content){
    width: 50%;
  }
  .qualitiesComponent{
    margin-top: 50px;
  }
  .KeramzitForm{
    margin-top: 50px;
  }

.main {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.infotext span{
  color: #fe7b3e;
}
.card{
  display: flex;
    justify-content: space-around;
    align-items: center;
}
.infotext h1{
	color: #565252;
	font-weight: 800;
	font-size: 39px;
}

.infotext span{
	color: #fe7b3e;
}
:deep(.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button){
  background-color: #fe7b3e;
}
:deep(.p-galleria-content){
  width: 70%;
  height: 430px;
  padding-top: 35px;
}
@media (max-width: 960px){
  .card{
    flex-direction: column;
    align-items: center;
  }
  .main{
        width: 90%;
  }
  .infotext{
    text-align: center;
  }
  :deep(.p-galleria){
    display: flex;
    justify-content: center;
  }
}
@media(max-width: 635px){
  .infotext h1{
    font-size: 26px;
  }
}
  </style>
  