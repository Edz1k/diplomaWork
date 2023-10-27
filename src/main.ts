import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import { initializeApp } from 'firebase/app';

import 'primevue/resources/themes/soho-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const firebaseConfig = {
    apiKey: "AIzaSyBYubmF94VKy__htLv68GPlaEMDWGrUsQk",
    authDomain: "diploma-af35f.firebaseapp.com",
    projectId: "diploma-af35f",
    storageBucket: "diploma-af35f.appspot.com",
    messagingSenderId: "384917310197",
    appId: "1:384917310197:web:bee17e5e413d77218a53bc"
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
// app.use(ToastService);

app.mount('#app');
