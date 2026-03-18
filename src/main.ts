import { createApp } from 'vue'
import App from './App.vue'
import i18n from '@/i18n/index'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './styles/index.scss'
import './permission.js'

//导入svgIcon
import installIcons from '@/icons'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
app.use(store).use(router).use(i18n).mount('#app')
