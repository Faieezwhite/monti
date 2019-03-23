import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.common'
import 'bootstrap-vue/dist/bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.esm'


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
