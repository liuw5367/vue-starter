// import '@unocss/reset/tailwind.css' // 和 ant-design-vue/dist/reset.css 冲突
import 'ant-design-vue/dist/reset.css'
import './assets/base.css'
import 'uno.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
