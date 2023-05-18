import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'styles/global.css'
import router from '@/router/index.js'
import store from '@/store/index.js'

// 全局导入SvgIcon
import 'virtual:svg-icons-register'
// element-ui 部分组件需要引用css
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/message-box/style/css'
import { ElMessage } from 'element-plus'

const app = createApp(App)

app.component('ElMessage', ElMessage)

app.use(router).use(store).mount('#app')
