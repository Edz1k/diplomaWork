<template>
    <Button label="Sign Up" icon="pi pi-user"  @click="googleRegister" v-if="!user">
    </Button>    
    <div v-if="user">
        <div class="imageProf">
            <img :src="user.photoURL" alt="Avatar" style="width:100%;">
        </div>
    </div>
    
</template>
<script setup lang="ts">

    import Menu from 'primevue/menu';
    import {useUser} from '@/composable/useAnything';
    import Button from 'primevue/button';
    import {ref} from 'vue';
    const {user,googleRegister,loading} = useUser();

    const items = ref([
    { separator: true },
    {
        label: 'Profile',
        icon: 'pi pi-fw pi-user'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        badge: 2
    },
    { separator: true }
]);
</script>
<style scoped>
.imageProf img {
    width: 100%;
    height: 50px;
    border-radius: 30px;
    border: 1px solid #ccc;
}
</style>