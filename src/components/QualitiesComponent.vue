<template>
  <div class="parentQu">
    <div>
        <i class="pi pi-money-bill"></i>
        <h2>Доступные цены</h2>
    </div>
    <div>
      <i class="pi pi-car"></i>
      <h2>Выгодные условия доставки</h2>
    </div>
    <div>
      <i class="pi pi-users"></i>
      <h2>90% клиентов обращаются повторно</h2>
    </div>
    <div>
      <i class="pi pi-check-circle"></i>
      <h2>Высокое качество продукции</h2>
    </div>
    <div>
      <i class="pi pi-calendar-plus"></i>
      <h2>Более 15 лет на рынке</h2>
    </div>
    <div>
      <i class="pi pi-user"></i>
      <h2>Приветливый персонал</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .parentQu {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .parentQu div {
        display: flex;
        align-items: center;
        margin-top: 20px;
        width: 26%;
        min-height: 120px;
        padding: 20px;
        text-align: center;
        transition: 500ms;
        box-shadow: 0 4px 10px rgba(0,0,0,.1);
    } 
    .parentQu div:hover{
      background: #f4dbd0;
      box-shadow: 0 4px 30px lightgrey;
    }
    .parentQu > div > i {
        font-size: 40px;
        margin-right: 20px;
        color: #fe7b3e;
    }
    .parentQu > div > h2 {
        font-size: 18px;
    }
    @media (max-width: 1000px){
        .parentQu div {
            width: 49%;
        }
    }
    @media (max-width: 660px){
        .parentQu div {
            width: 100%;
        }
    }
</style>
