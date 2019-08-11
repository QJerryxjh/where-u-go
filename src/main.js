import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router'
import 'amfe-flexible'
import 'vant/lib/index.css'
import './assets/css/iconfont.css'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
