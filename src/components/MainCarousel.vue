<template>
    
    <div class="card">
      <div class="main">
          <div class="infotext">
              <h1><span>Лидер в производстве и продаже</span> керамзита по доступным ценам на выгодных условиях</h1>
        </div>
        <div class="where">
              <p>Где можно купить керамзит? Закажите <span>доставку керамзита</span> в ваш регион</p>
              <form action="#" method="POST" name="contactinfo">
                <div class="form-pos">
                  <div class="icon1">
                  </div>
                  <div class="icon1">
                  </div>
                </div>
                <div class="form-text">
                  <p><span>*</span> Оставляя свои данные вы даете согласие на <span>обработку персональных данных</span></p>
                  <Button label="Отправить" class="signUpBtn" />
                </div>
              </form>
            </div>
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
  </template>
  <script setup lang="ts">
      
  import Galleria from 'primevue/galleria';
  import Button from 'primevue/button';
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

  .where{
	background: #F0DCD1;
	padding: 40px 35px;
	box-shadow: 0 2px 20px rgba(0,0,0,.05);
	display: flex;
	flex-wrap: wrap;
  width: 100%;
}
.where p{
	font-weight: 800;
	font-size: 19px;
	color: #565252;
}
.where span{
	color: #fe7b3e;
}
.form-pos{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.form-pos input{
	border: 0;
	outline: none;
    background: white;
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
:deep(.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight){
  color: #fe7b3e;
}
  </style>
  