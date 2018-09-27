import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Search from './components/Search'

Vue.use(VueRouter)
const routes = [
    { path: '/', component: Home },
    { path: '/search/:keyword', component: Search, name: 'SearchCity' }
]

// Vue.component('weather', {
//   props: ['city'],
//   template: '<h3>Your city is {{city}}</h3>'
// })

const router = new VueRouter({
    routes: routes
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App: App },
  router: router
}).$mount('#app')
