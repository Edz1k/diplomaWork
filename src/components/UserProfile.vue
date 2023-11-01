<template>
  <Button label="Sign Up" icon="pi pi-user" @click="googleRegister" class="signUpBtn" v-if="!user">
  </Button>
  <div v-if="user">
    <div class="imageProf">
      <Avatar :image="user.photoURL" class="imageProf" shape="circle" @click="toggleVisible" />
    </div>
    <div v-if="visible" class="menushka">
      <Menu :model="items">
        <template #start>
          <Avatar :image="user.photoURL" class="" shape="circle" />
          <div class="names">
            <span class="font-bold">{{ user.displayName }}</span>
            <span class="smalltext">{{ user.email }}</span>
          </div>
        </template>
        <template #end>
          <button
            @click="googleLogout"
            class="w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
          >
            <i class="pi pi-sign-out logggout" />
            <span class="logggout">Log Out</span>
          </button>
        </template>
      </Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from 'primevue/menu'
import { useUser } from '@/composable/useAnything'
import Button from 'primevue/button'
import { ref } from 'vue'
import Avatar from 'primevue/avatar'

const { user, googleRegister, googleLogout } = useUser()
const visible = ref(false)

const toggleVisible = () => {
  visible.value = !visible.value
}
const items = ref([
  { separator: true },
  {
    label: 'Profile',
    icon: 'pi pi-fw pi-user',
    to: '/profile'
  },

  {
    label: 'Settings',
    icon: 'pi pi-fw pi-cog',
    to: '/settings'
  },
  { separator: true }
])
</script>
<style scoped>
@media (max-width: 576px) {
  .signUpBtn {
    padding: 10px;
    font-size: 10px;
  }
}
.imageProf {
  width: 92%;
  height: 48px;
  transition: 200ms;
}
.imageProf:hover {
  opacity: 0.5;
}
.smalltext {
  font-size: 12px;
  opacity: 0.8;
}
.names {
  display: flex;
  flex-direction: column;
  width: 78%;
}
:deep(.p-avatar) {
  margin-right: 5px;
  margin-left: 5px;
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
}
.menushka {
  position: absolute;
  top: 85px;
  right: 20px;
  z-index: 100;
}
.logggout {
  color: #043d75;
  margin-right: 10px;
}

:deep(.p-menu-start) {
  display: flex;
  align-items: center;
  padding-top: 10px;

  padding-bottom: 10px;
}
:deep(.p-menu-end) {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.imageProf img {
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid #ccc;
  transition: 200ms;
}
@media (max-width: 380px) {
  .signUpBtn {
    padding: 5px;
    font-size: 5px;
  }
  .imageProf img {
    height: 30px;
    width: 30px;
  }
  :deep(.p-avatar img) {
    height: 30px;
    width: 30px;
  }
}
</style>
