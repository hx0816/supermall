import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
import Toast from './components/content/toast'
import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(Toast)
FastClick.attach(document.body)


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
