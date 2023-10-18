<template>
  <div class="askcall">
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
          @click="onClickContent"
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

const { addContent, newContent,getAllContent } = useContent()

const visible = ref(false)
const toggleVisible = () => {
  visible.value = !visible.value
}

async function onClickContent () {
  toggleVisible()
  const res = await addContent()
  if (res) {
    await getAllContent()
  }
  newContent.value.text = ''; 
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
.askcall{
  display: flex;
  justify-content: flex-end;
}
:deep(.p-button){
  margin-right: 79px;
}
:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon){
    color: #ff9f42;
}
</style>
