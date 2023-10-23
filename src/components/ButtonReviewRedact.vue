<template>
  <div>
    <Button icon="pi pi-pencil" severity="warning" rounded aria-label="Cancel" class="buttons" @click="onChangeEditButton(review)"/>
    <Button icon="pi pi-trash" severity="danger" rounded aria-label="Cancel" class="buttons" @click="onDeleteButton(review)"/>
  </div>
</template>
<script setup lang="ts">
import Button from 'primevue/button'
import { useContent } from '@/composable/useContent'

const { onDeleteButton, onChangeEditButton } = useContent()
defineProps({
    review: {
    type: Object,
    required: true
  }
})



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
</style>
