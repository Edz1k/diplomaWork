<template>
  <Card class="cartochka">
    <template #title>
      Где можно купить керамзит? Закажите <span>доставку керамзита</span> в ваш регион
    </template>
    <template #content>
      <div class="positioner">
        <span class="p-input-icon-left">
          <i class="pi pi-user" />
          <InputText v-model="user.name" placeholder="Ваше имя" />
        </span>
        <span class="p-input-icon-left">
          <i class="pi pi-phone" />
          <InputMask
            v-model="user.phoneNumber"
            mask="+9 (999) 999 99-99"
            placeholder="+7 (___) ___ __-__"
          />
        </span>
      </div>
    </template>
    <template #footer>
      <div class="form-text">
        <p>
          <span>*</span> Оставляя свои данные вы даете согласие на
          <span>обработку персональных данных</span>
        </p>
        <Button
            label="Заказать доставку"
            class="p-button-warning askforcallbtn"
            @click="myFormTeleg(user.name, user.phoneNumber)"
        />
      </div>
      
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
import { useUser } from '@/composable/useAnything'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref } from 'vue'
import InputMask from 'primevue/inputmask'

const { myFormTeleg } = useUser()

const user = ref({
  name: '',
  phoneNumber: ''
})
</script>

<style scoped>
.positioner {
  display: flex;
  justify-content: space-between;
}
.form-text{
	display: flex;
	padding-top: 20px; 
	justify-content: space-between;
	align-items: center;
}
.form-text p{
    font-size: 12px;
    opacity: 0.8;
    flex-basis: 50%;
}
.cartochka {
  background-color: #fdf9f5;
  color: #565252;
  font-size: 20px;
}

:deep(.p-inputmask) {
  padding-right: 70px;
}
:deep(.p-inputtext) {
  padding-right: 70px;
}
:deep(.p-card-body) {
  padding: 2.25rem;
}
.cartochka span {
  color: #fe7b3e;
}
@media(max-width: 1320px){
    .positioner{
        height: 120px;
        flex-direction: column;
        align-items: center;
    }
    :deep(.p-inputmask) {
        padding-right: 170px;
    }
    :deep(.p-inputtext) {
        padding-right: 170px;
    }
}
@media(max-width: 835px){
    .form-text p{
        font-size: 10px;
    }
}
@media(max-width: 536px){
    :deep(.p-inputmask) {
        padding-right: 80px;
        font-size: 10px;
    }
    :deep(.p-inputtext) {
        padding-right: 80px;
        font-size: 10px;
    }
    .askforcallbtn{
        padding: 10px;
        font-size: 10px;
    }
    .form-text p{
        font-size: 7px;
    }
    :deep(.p-card-title){
        font-size: 15px;
    }

}
@media(max-width: 360px){
    .askforcallbtn{
        padding: 10px;
        font-size: 6px;
    }
    .form-text p{
        font-size: 6px;
    }
}
@media(max-width: 280px){
    :deep(.p-inputmask) {
        padding-right: 40px;
        font-size: 10px;
    }
    :deep(.p-inputtext) {
        padding-right: 40px;
        font-size: 10px;
    }
    .askforcallbtn{
        padding: 10px;
        font-size: 5px;
    }
    .form-text p{
        font-size: 5px;
    }
}
</style>
