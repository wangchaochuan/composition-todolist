import Vue from 'vue'
import App from './App.vue'
import Composition from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(Composition)
new Vue({
  render: h => h(App),
}).$mount('#app')
