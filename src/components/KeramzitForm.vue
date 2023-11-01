<template>
    <div class="positioner">
        <Galleria
            :value="images"
            :numVisible="5"
            :circular="true"
            containerStyle="max-width: 640px"
            :showItemNavigators="true"
            :showThumbnails="false"
            :showItemNavigatorsOnHover="true"
            :showIndicators="false"
            :autoPlay="true"
            :transitionInterval="10000"
        >
            <template #item="slotProps">
                
                <img :src="slotProps.item.source" style="width: 100%; display: block;" />
            </template>
        </Galleria>

        <Card>
            <template #title> Керамзит</template>
            <template #content>
                <div>
                    <p>Керамзит особенно эффективен как материал для теплоизоляции жилых домов, административныхи промышленных зданий, квартир <span>Подробнее...</span></p>
                </div>
                <div>
                    <ul class="kerlist">
                        <li>Фракции 5-10 мм., 10-20 мм. 20-40 мм.</li>
                        <li>Морозостойкость</li>
                        <li>Применение в разных сферах</li>
                        <li>Влагоустойчивость</li>
                        <li>Не горит и не выделяет вредные вещества</li>
                        <li>Пожаробезопасность</li>
                        <li>Низкая теплопроводность</li>
                    </ul>
                </div>
                <div class="marks">
                    <div>
                        <p>Марка насыпной плотности:</p>
                        <span>М 250-500</span>
                    </div>
                    <div>
                        <p>Марка прочности:</p>
                        <span>П75</span>
                    </div>
                </div>
                <p>Отгрузка/доставка: </p>
                <span>Навалом, поставка в вагонах, фасовка в мешках и МКР</span>
            </template>
            <template #footer>
                <ModalCall />
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
 import Card from 'primevue/card';
 import Galleria from 'primevue/galleria';
 import { ref } from 'vue';
 import ModalCall from './ModalCall.vue';
  
const images = ref([
    { source: 'https://dekolit-keramzit.kz/wp-content/uploads/2019/03/slide1-2-1.jpg' },
    { source: 'https://dekolit-keramzit.kz/wp-content/uploads/2019/03/slide1-3-1.jpg'},
    { source: 'https://dekolit-keramzit.kz/wp-content/uploads/2019/03/slide1-1-1.jpg'}
  ]);
</script>

<style scoped>
    :deep(.p-galleria-content){
        padding-top: 80px !important;
    }
    :deep(.p-card){
        width: 40%;
        color: #575252;
        box-shadow: none;
        padding: 0px;
    }
    :deep(.p-card-content){
        padding: 0px;
    }
    :deep(.p-card-title){
        font-size: 28px;
    }
    span{
        color: #ff9f42;
        font-size: 18px;
        font-weight: bold;
    }
    .kerlist > li::marker{
        color: #ff9f42;
        font-size: 24px;
    }
    .kerlist > li{
        margin-bottom: 5px;
    }
    .kerlist{
        padding-left: 20px;
    }
    .marks{
        display: flex;
        justify-content: space-between;
    }
    .positioner{
        display: flex;
        align-content: center;
        justify-content: center;
    }
</style>