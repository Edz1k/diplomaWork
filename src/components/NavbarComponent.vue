<template>
  <Menubar :model="items" class="menubarchik">
    <template #start>
      <RouterLink to="/"><h2>Akeramzit</h2></RouterLink>
    </template>
    <template #end>
      <div class="socialsnav">
        <span class="wpplog" href="https://wa.me/77751442023">
          <i class="pi pi-whatsapp"></i>
        </span>
        <span class="tellog" href="tel:+77751442023">8 (775) 144-2023</span>
      </div>
      <ModalCall />
      <UserProfile />
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import ModalCall from './ModalCall.vue'
import { RouterLink } from 'vue-router';
import  UserProfile  from './UserProfile.vue';

const items = ref<MenuItem[]>([
  {
    label: 'Керамзит',
    icon: 'pi pi-home',
    to: '/'
  },
  {
    label: 'Клиенты',
    icon: 'pi pi-user',
    to: '/clients'
  },
  {
    label: 'Отзывы',
    icon: 'pi pi-pencil',
    to: '/reviews'
  },
  {
    label: 'Контакты',
    icon: 'pi pi-phone',
    to: '/contacts'
  }
])

interface MenuItem {
  label: string
  icon: string
  to: string
}
</script>

<style scoped>
@media (max-width: 576px) {
        .socialsnav{
        display: none;
    }
}
@media (max-width: 1080px) {
    .socialsnav{
      display: none;
    }
}
a{
  color: #fe7b3e;
  text-decoration: none;
}
:deep(.p-menubar-start) {
  margin-right: auto;
}
.p-menubar {
  background-color: white;
  border: none;
}
.wpplog {
  box-shadow: -2px 3px 7px #25d366;
  margin-right: 15px;
  padding: 10px 12px;
  border-radius: 30px;
}
.socialsnav {
  margin-right: 50px;
}
.socialsnav i {
  margin: auto;
  font-size: 20px;
  color: #25d366;
}
.tellog {
  color: #ff9f42;
  font-weight: 800;
}
:deep(.p-menubar-end) {
  display: flex;
  align-items: center;
}
</style>
