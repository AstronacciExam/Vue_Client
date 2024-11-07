import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import vue3GoogleLogin from 'vue3-google-login';

import '@/assets/boxicons/css/boxicons.min.css';
import 'flowbite';

const app = createApp(App);
app.config.globalProperties.axios = axios;

app.use(vue3GoogleLogin, {
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
})

app.use(router);

app.mount('#app');
