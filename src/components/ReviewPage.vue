<template>
    <ModalReview />
  <div v-if="loading.contentList">
    <Skeleton width="100%" height="250px" />
  </div>
  <div v-else class="positioner">
    
    <Card v-for="review in sortedReviews" :key="review.firebaseId">
      <template #title>
        <div class="avatarZag"> 
          <Avatar :image="review.photo" shape="circle" />
          <p class="reviewAuthor">{{ review.author }}</p>
          <template v-if="user">
            <template v-if="user.uid === review.userId">
              <ButtonReviewRedact class="buttonRedact" :review="review" />
            </template>
          </template>
        </div>
      </template>
      <template #content>
        <div class="rbRating">
          <p class="textContent">
            {{ review.text }}
          </p>
          <Rating v-model="review.stars" :cancel="false" readonly />
          <span class="smalltext">{{ formatDate(review.date) }}</span>
        </div>
      </template>
    </Card>
    
  </div>
</template>
<script setup lang="ts">
import Card from 'primevue/card'
import { useContent } from '@/composable/useContent'
import { useUser } from '@/composable/useAnything'
import { formatDate } from '@/services/method'
import { onMounted, computed } from 'vue'
import ButtonReviewRedact from './ButtonReviewRedact.vue'

import Avatar from 'primevue/avatar'
import ModalReview from './ModalReview.vue'
import Rating from 'primevue/rating'
import Skeleton from 'primevue/skeleton'

const { getAllContent, contentList, loading} = useContent()
const { user } = useUser()


onMounted(async () => {
  await getAllContent()
})


const sortedReviews = computed(() => {
  let sortedData = contentList.value
  sortedData = sortedData.sort((a:any, b:any) => {
        return b.date - a.date;
    });
  return sortedData
});
</script>
<style scoped>
.reviewAuthor{
  margin: 0px;
  flex-basis: 73%;
}
.avatarZag {
  display: flex;
  align-items: center;
}
:deep(.p-avatar) {
  margin-right: 10px;
}
:deep(.p-card) {
  margin-top: 50px;
  width: 30%;
}
:deep(.p-card-body) {
  min-height: 250px;
}
:deep(.p-card-content) {
  height: 180px;
}
:deep(.p-rating .p-rating-item.p-rating-item-active .p-rating-icon){
    color: #ff9f42;
}
.imagee {
  width: 100%;
  height: 250px;
}

.smalltext {
  opacity: 0.5;
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
@media(max-width: 576px){
  .reviewAuthor{
    flex-basis: 65%;
  }
}

@media (max-width: 1040px) {
  :deep(.p-card-body) {
    min-height: 400px;
  }
  :deep(.p-card-content) {
    height: 360px;
  }
  :deep(.p-card){
    flex-basis: 49%;
  }
}
@media(max-width: 1310px){
  .reviewAuthor{
    flex-basis: 50%;
  }
}
@media(max-width: 1655px){
  .reviewAuthor{
    flex-basis: 65%;
  }
}
@media (max-width: 636px) {
  :deep(.p-card) {
    flex-basis: 90%;
  }
}

</style>
