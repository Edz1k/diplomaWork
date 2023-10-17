<template>
    <div v-if="user">
        <ModalReview />
    </div>
    <div v-if="contentList" class="positioner">
        <Card v-for="key in contentList" :key="key">
            <template #title>
                <div class="avatarZag">
                    <Avatar :image="key.photo" shape="circle" />
                    {{key.author}}
            </div>
            </template>
            <template #content>
                <div class="rbRating">
                    <p class="textContent">
                        {{ key.text }}
                    </p>
                    <Rating v-model="key.stars" :cancel="false" readonly/>
                </div>
            </template>
            
                
            
        </Card>
    </div>
    <div v-else>
        123s
    </div>
   
</template>
<script setup lang="ts">

import Card from 'primevue/card';
import { useContent } from '@/composable/useContent';
import { useUser } from '@/composable/useAnything';
import { onMounted } from 'vue';

import Avatar from 'primevue/avatar';
import ModalReview from './ModalReview.vue';
import Rating from 'primevue/rating'

const {getAllContent,contentList} = useContent();
const {user} = useUser();

onMounted(async () => {
    await getAllContent();
    console.log(contentList.value);
});

</script>
<style scoped>
.avatarZag{
    display: flex;
    align-items: center;
}
:deep(.p-avatar){
    margin-right: 10px;
}
:deep(.p-card){
    margin-top: 50px;
    width: 30%;
}
:deep(.p-card-body){
    min-height: 250px;
}
:deep(.p-card-content){
    height: 180px;
}
.imagee{
    width: 100%;
    height: 250px;
}
.positioner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.rbRating {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.textContent {
    word-wrap: break-word; /* This will allow text to wrap within the element */
}
@media (max-width: 576px) {
    :deep(.p-card){
        width: 90%;
    }
}
@media (max-width: 1040px) {
    :deep(.p-card-body){
        min-height: 400px;
    }
    :deep(.p-card-content){
    height: 360px;
}
}
</style>