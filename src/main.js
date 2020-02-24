import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCookie from 'vue-cookie'
import VueLazyLOad from 'vue-lazyload'
import VueAxios from 'vue-axios'
import store from './store'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import env from './env'

const mock = false;
if(mock) {
  require('./mock/api')
}
// axios.defaults.baseURL = env.baseURL;
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.interceptors.response.use(function(response) {
  let res = response.data;
  let path = location.hash;
  // console.log(res.status)
  if(res.status == 0) {
    return res.data;
  }else if(res.status == 10) {
    if(path != '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  }else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLOad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
