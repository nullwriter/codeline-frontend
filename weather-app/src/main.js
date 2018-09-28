import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Search from './components/Search'
import WeatherDetail from './components/WeatherDetail'

Vue.use(VueRouter)
Vue.use(require('vue-moment'))

const routes = [
    { path: '/', component: Home },
    { path: '/search/:keyword', component: Search, name: 'SearchCity' },
    { path: '/weather/:woeid', component: WeatherDetail, name: 'WeatherDetail', props: true }
]

const router = new VueRouter({
    routes: routes
})

Vue.filter('oneDecimal', function (value) {
    if (typeof value !== "number") {
        return value;
    }

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    });

    return formatter.format(value);
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App: App },
  router: router
}).$mount('#app')
