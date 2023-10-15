import './assets/main.scss'
import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import bootstrap from "./boostrap";
<<<<<<< HEAD
import '@fortawesome/fontawesome-free/css/all.css'
=======
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

>>>>>>> main

const app = createApp(App);
app.use(bootstrap);
app.use(router);
app.mount('#app');
