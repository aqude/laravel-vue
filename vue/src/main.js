import { createApp } from 'vue'
import './index.css'
import router from "./router/index.js";
import App from './App.vue'
import store from "./store/index.js";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
