import './assets/main.scss'
import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import bootstrap from "./boostrap";

const app = createApp(App);

app.use(bootstrap);
app.use(router);
app.mount('#app');
