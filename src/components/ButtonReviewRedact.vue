<template>
    <div>
        <Button icon="pi pi-pencil" severity="warning" rounded aria-label="Cancel" class="buttons"/>
        <Button icon="pi pi-trash" severity="danger" rounded aria-label="Cancel" class="buttons"/>
    </div>
</template>
<script setup lang="ts">
    import Button from 'primevue/button';
</script>
<style scoped>
    .buttons{
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
    :deep(.p-button-icon){
        font-size: 12px;
    }
</style>