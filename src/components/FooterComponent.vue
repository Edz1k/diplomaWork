<template>
    <div class="positioner">
        <div class="contact">
            <h1>Контакты</h1>
            <div>
                <p>Уточнить стоимость и время доставки можно по номерам</p>
                <p><span>8 (775) 144 20-23</span></p>
                <p><span>8 (775) 144 20-23</span></p>
                <p></p>
            </div>
            <p class="instagram">
                <span><i class="pi pi-instagram"></i></span> Akeramzit
            </p>
        </div> 
        <div class="contact_info">
            <p>Мы стараемся отвечать на все звонки и как можно более оперативно реагировать на все вопросы, которые интересуют наших клиентов</p>
            <p>Теперь вы знаете, где <span>купить керамзит выгодно!</span></p>
            <p>Наш адрес: <span>Республика Казахстан, г. Алматы, ул. Кокорай, 54</span></p>

            
        </div>
        <div class="initials">
                <p>Created for Diploma Work "Eduard Shartner"</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    span {
        color: #fe7b3e;
    }
    .positioner{
        color: #575252;
        margin-top: 50px;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
        background-color: #f5f5f5;
    }
    .contact span{
        font-size: 40px;
        font-weight: 700;
        line-height: 53px;
    }
    span > i {
        font-size: 24px;
        margin-right: 10px;
    }
    .instagram {
        font-size: 24px;
    }
    .contact_info {
        width: 49%;
    }
    .contact{
        width: 49%;
    }
    .initials {
        text-align: center;
        animation: text 5s linear infinite alternate;
        width: 100%;
    }   

@keyframes text {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

</style>