<template>
  <div class="askcall">
    <Button
      label="Оставить отзыв"
      severity="warning"
      @click="checker"
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
import { useUser } from '@/composable/useAnything'
import { useContent } from '@/composable/useContent'
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const { addContent, newContent,getAllContent } = useContent()
const { user } = useUser()

const showWarn = () => {
    toast.add({ severity: 'warn', summary: 'Войдите в Аккаунт', detail: 'Для того чтобы оставить отзыв вам необходимо войти в аккаунт', life: 3000 });
};

const showSucces = ()=>{
  toast.add({severity: "success",summary: 'Успешно', detail: 'Ваш отзыв добавлен', life: 3000});
};


const visible = ref(false)
const toggleVisible = () => {
  visible.value = !visible.value
}

async function checker() {
  if(!user.value){
    showWarn()
  }else{
    visible.value = true
  }
}
async function onClickContent () {
  toggleVisible()
  const res = await addContent()
  if (res) {
    showSucces()
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
  margin-right: 86px;
}
:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon){
    color: #ff9f42;
}
</style>
