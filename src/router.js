import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('./views/Main.vue'),
      meta: {
        title: 'Nya Labs',
        icon: "./imgs/logo-only.png"
      }
    },
  ]
})
