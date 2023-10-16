<template>
    <div v-if="user && contentList">
        <Card style="width: 17em" v-for="key in contentList" :key="key">
            <template #header>
                <img alt="user header" :src="key.photoURL" class="imagee"/>
            </template>
            <template #title> {{ key.displayName }} </template>
            <template #subtitle> Card subtitle </template>
            <template #content>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Save" @click="addContent"/>
                <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
            </template>
        </Card>
    </div>
    <div v-else>
        123s
    </div>
   
</template>
<script setup lang="ts">

import Card from 'primevue/card';
import Button from 'primevue/button';
import { useContent } from '@/composable/useContent';
import { useUser } from '@/composable/useAnything';
import { onMounted } from 'vue';

const {addContent,getAllContent,contentList} = useContent();
const {user} = useUser();

onMounted(async () => {
    await getAllContent();
    console.log(contentList.value);
});

</script>
<style scoped>
.imagee{
    width: 100%;
    height: 250px;
}
</style>