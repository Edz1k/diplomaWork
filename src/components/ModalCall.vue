<template>
  <div class="card flex justify-content-center askcall">
    <Button label="Заказать звонок" severity="warning" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Заказать звонок">
      <template #default>
        <div class="p-fluid">
          <div class="p-field">
            <label for="name">Имя</label>
            <InputText id="name" />
          </div>
          <div class="p-field">
            <label for="name">Номер телефона</label>
            <InputMask id="basic" mask="+9 (999) 999 99-99" placeholder="+7 (___) ___ __-__" />
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Сбросить" severity="danger" icon="pi pi-times" @click="clearData" text />
        <Button label="Заказать звонок" severity="warning" icon="pi pi-check" @click="addAuto" autofocus></Button>
      </template>
    </Dialog>
  </div>
</template>
<script setup lang="ts">
import Button from 'primevue/button'
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'

const visible = ref(false)

const toggleVisible = () => {
  visible.value = !visible.value
}
const clearData = () => {
  // clear();
  toggleVisible()
}

const addAuto = async () => {
  // await createAuto(newAuto.value);
  // showSuccess();
  toggleVisible()
}
</script>
<style scoped>
    .p-field {
        margin-bottom: 20px;
    }
    .askcall{
        margin-right: 20px;
    }
</style>
