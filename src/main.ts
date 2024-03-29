// import '@unocss/reset/tailwind.css' // 和 ant-design-vue/dist/reset.css 冲突
import 'ant-design-vue/dist/reset.css'
import './styles/base.css'
import 'uno.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import router from './router'
import App from './App.vue'
import SvgIcon from '~virtual/svg-component'

const app = createApp(App)

app.component(SvgIcon.name, SvgIcon)
app.use(router)
app.use(createPinia())
app.use(createHead())

app.mount('#app')
