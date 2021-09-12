import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
// 创建vue的根实例
// 把router配置到根实例中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
