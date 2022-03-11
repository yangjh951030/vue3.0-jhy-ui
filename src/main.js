import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import message from './UI/message/index'


let app = createApp(App)
app.use(router).use(message).mount('#app');

console.log(app);
app.config.globalProperties.$modalArr = [];

console.log(import.meta.env);
