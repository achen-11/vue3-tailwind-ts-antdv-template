import { createApp } from 'vue'
import './styles/style.css'
import './styles/preflight.css'
import App from './App.vue'


const app = createApp(App)
/* Antd */
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue'
app.use(Antd)


/* vue router */
import router from './router'
app.use(router)


app.mount('#app')
