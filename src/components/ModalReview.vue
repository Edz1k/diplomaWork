<template>
  <div class="card flex justify-content-center askcall">
    <Button
      label="Оставить отзыв"
      severity="warning"
      @click="visible = true"
      class="askforacallbtn"
    />
    <Dialog v-model:visible="visible" modal header="Оставить отзыв">
      <template #default>
        <div class="p-fluid">
          <div class="p-field">
            <label for="name">Ваш отзыв</label>
            <Textarea v-model="newContent.text" autoResize rows="5" cols="30" maxlength="200"/>
          </div>
          <div class="p-field">
            <label for="name">Оценка</label>
            <Rating v-model="newContent.stars" :cancel="false" />
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Сбросить" severity="danger" icon="pi pi-times" @click="clearData" text />
        <Button
          label="Оставить отзыв"
          severity="warning"
          icon="pi pi-check"
          @click="
            () => {
              addContent()
              visible = false
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

import Rating from 'primevue/rating'

import Textarea from 'primevue/textarea'

import { useContent } from '@/composable/useContent'

const { addContent, newContent } = useContent()

const visible = ref(false)
const toggleVisible = () => {
  visible.value = !visible.value
}
const clearData = () => {
  // clear();
  toggleVisible()
}
</script>
<style scoped>
.p-field {
  margin-bottom: 20px;
}
:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon){
    color: #ff9f42;
}
</style>
