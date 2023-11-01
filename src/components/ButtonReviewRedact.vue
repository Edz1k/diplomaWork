<template>
    
  <div>
    <Button icon="pi pi-pencil" severity="warning" rounded aria-label="Cancel" class="buttons" @click="getModalChanger(review)"/>
    <Button icon="pi pi-trash" severity="danger" rounded aria-label="Cancel" class="buttons" @click="onClickDelete"/>
  </div>

  <Dialog v-model:visible="visible" modal header="Редактировать отзыв">
      <template #default>
        <div class="p-fluid">
          <div class="p-field">
            <label for="name">Ваш отзыв</label>
            <Textarea v-model="editContent.text" autoResize rows="5" cols="30" maxlength="200"/>
          </div>
          <div class="p-field">
            <label for="name">Оценка</label>
            <Rating v-model="editContent.stars" :cancel="false" />
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Сбросить" severity="danger" icon="pi pi-times" @click="clearData" text />
        <Button
          label="Редактировать отзыв"
          severity="warning"
          icon="pi pi-check"
          @click="onClickEdit"
          autofocus
        ></Button>
      </template>
    </Dialog>
</template>
<script setup lang="ts">
import Button from 'primevue/button'

import Dialog from 'primevue/dialog';
import { ref } from 'vue'
import Rating from 'primevue/rating'
import Textarea from 'primevue/textarea'
import { useContent } from '@/composable/useContent'
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const { editContent } = useContent()
const { onDeleteButton, onChangeEditButton,editReviewValue } = useContent()
const props = defineProps({
    review: {
    type: Object,
    required: true
  }
})
const showSucces = ()=>{
  toast.add({severity: "success",summary: 'Успешно', detail: 'Ваш отзыв отредактирован', life: 3000});
};
const showSuccesDelete = ()=>{
  toast.add({severity: "success",summary: 'Успешно', detail: 'Ваш отзыв удален', life: 3000});
};
async function onClickEdit(){
  await editReviewValue(props.review)
  showSucces()
}
async function onClickDelete(){
  await onDeleteButton(props.review)
  showSuccesDelete()
}

const visible = ref(false)
const toggleVisible = () => {
  visible.value = !visible.value
}

async function getModalChanger(review: Object){
    toggleVisible()
    await onChangeEditButton(review)
}

const clearData = () => {
  // clear();
  toggleVisible()
}

</script>
<style scoped>
.buttons {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
:deep(.p-button-icon) {
  font-size: 12px;
}
:deep(.askforacallbtn){
    display: none;
}
:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon){
    color: #ff9f42;
}
</style>
