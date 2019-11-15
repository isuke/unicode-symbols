//
// styles
//
import './styles/_variables.scss'
import './styles/_body.scss'


//
// scripts
//
import Vue from 'vue'
import App from './App.vue'
// import "./registerServiceWorker";

// Vue.config.devtools = false
Vue.config.performance = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = process.env.NODE_ENV !== 'production'

new Vue({
  render: (h) => h(App),
}).$mount('#app')
