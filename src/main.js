import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from './store'
import Toast from './components/content/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(Toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)

// 图片懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})


new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
