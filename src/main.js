import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'qs'
import axios from 'axios'
import Antd from 'ant-design-vue';
import '@/libs/axios.js' //axios拦截器等功能配置
import '@/styles/index.less'


Vue.prototype.$axios = axios
window.$qs = qs
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.bus = new Vue()
