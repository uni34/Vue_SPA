import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
// import vuex from './vuex/index.js'

import HomePage from './pages/HomePage.vue'
import ArticlePage from './pages/ArticlePage.vue'

Vue.config.productionTip = false

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'homepage', component: HomePage},
    {path: '/article', name: 'articlepage', component: ArticlePage},
  ]
    }
)

new Vue({
  render: h => h(App),
  router,
  // vuex,
}).$mount('#app')
