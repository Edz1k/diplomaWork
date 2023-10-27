<template>
  <div class="card flex justify-content-center askcall">
    <Button
      label="Заказать звонок"
      severity="warning"
      @click="visible = true"
      class="askforacallbtn"
    />
    <Dialog v-model:visible="visible" modal header="Заказать звонок">
      <template #default>
        <div class="p-fluid">
          <div class="p-field">
            <label for="name">Имя</label>
            <InputText v-model="userCall.name" id="name" />
          </div>
          <div class="p-field">
            <label for="name">Номер телефона</label>
            <InputMask
              v-model="userCall.phoneNumber"
              id="basic"
              mask="+9 (999) 999 99-99"
              placeholder="+7 (___) ___ __-__"
            />
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Сбросить" severity="danger" icon="pi pi-times" @click="clearData" text />
        <Button
          label="Заказать звонок"
          severity="warning"
          icon="pi pi-check"
          @click="
            () => {
              myFormTeleg(userCall.name, userCall.phoneNumber)
              visible = false
              userCall.name = ''
              userCall.phoneNumber = ''
            }
          "
          autofocus
        ></Button>
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
import { useUser } from '@/composable/useAnything'

const { myFormTeleg } = useUser()

const visible = ref(false)
const userCall = ref({
  name: '',
  phoneNumber: ''
})

// @change - emit('change', $event)
// [{field: 'name', value: '', type: 'input'}, {field: 'phoneNumber', value: '', type: 'dropdown', options: [{}]}}]

const toggleVisible = () => {
  visible.value = !visible.value
}

const clearData = () => {
  // clear();
  toggleVisible()
}
</script>


<style scoped>
@media (max-width: 576px) {
  .askforacallbtn {
    padding: 10px;
    font-size: 10px;
  }
}
@media (max-width: 380px) {
  .askforacallbtn {
    padding: 7px;
    font-size: 7px;
  }
}
.p-field {
  margin-bottom: 20px;
}
.askcall {
  margin-right: 20px;
}
</style>
