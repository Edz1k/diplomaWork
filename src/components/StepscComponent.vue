<template>
    <div class="positioner">
      <div class="left">
        <h1>
          Компания «Akeramzit» предлагает купить керамзит оптом по доступной цене и в нужном
          количестве
        </h1>
        <div class="spans">
          <InputNumber
            v-model="number.height"
            placeholder="Введите высоту засыпки     ( см )"
            inputId="withoutgrouping"
            :useGrouping="false"
          ></InputNumber>
          <InputNumber
            v-model="number.width"
            placeholder="Введите ширину      ( м )"
            inputId="withoutgrouping"
            :useGrouping="false"
          ></InputNumber>
          <InputNumber
            v-model="number.length"
            placeholder="Введите длинну     ( м )"
            inputId="withoutgrouping"
            :useGrouping="false"
          ></InputNumber>
          <Button @click="calculateVolume" label="Расчитать" class="btn" severity="warning"></Button>
        </div>
      </div>
      <div class="right">
        <div class="result">
          <h2>Результат</h2>
          <p>Объем</p>
          <p class="answer">
            <span>
            <template v-if="answer">
              {{ answer }} м&sup3;
            </template>
            <template v-else>
              0 м&sup3;
            </template>
            </span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Button from 'primevue/button'
  import { ref } from 'vue'
  import InputNumber from 'primevue/inputnumber'
  
  interface Number {
    height: number | null
    width: number | null
    length: number | null
  }
  
  const number = ref<Number>({
    height: null,
    width: null,
    length: null
  })
  
  const answer = ref()
  
  const calculateVolume = () => {
    if (number.value.height !== null && number.value.width !== null && number.value.length !== null) {
      const heightInMeters = number.value.height / 100.0;
      answer.value = (heightInMeters * number.value.width * number.value.length).toFixed(1);
    } else {
      answer.value = null;
    }
  }
  </script>
<style scoped>
.positioner {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left {
  flex-basis: 49%;
  background-color: #fdf9f5;
  font-size: 12px;
  padding: 50px;
  color: #565252;
  box-shadow:
    0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 3px;
}
.result {
  text-align: center;
  border: 2px solid #f4dbd0;
  padding: 40px 110px 40px 110px;
  color: #fe7b3e;
  max-width: 345px;
  max-height: 300px;
}
.answer {
  font-size: 40px;
  color: #fe7b3e;
}
.spans {
  display: flex;
  flex-wrap: wrap;
}
.spans > span,
.spans > button {
  flex-basis: 49%;
}
</style>
