import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        const loggedIn = localStorage.getItem('user')
        if (loggedIn) {
          next()
        } else {
          next({ name: 'phone' })
        }
      }
    },
    {
      path: '/phone',
      name: 'phone',
      component: () =>
        import(/* webpackChunkName: "phone" */ './views/Phone.vue'),
      beforeEnter: (to, from, next) => {
        const loggedIn = localStorage.getItem('user')
        if (!loggedIn) {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    },
    {
      path: '/validate',
      name: 'validate',
      props: true,
      component: () =>
        import(/* webpackChunkName: "validate" */ './views/Validate.vue'),
      beforeEnter: (to, from, next) => {
        const loggedIn = localStorage.getItem('user')
        if (!loggedIn) {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

export default router
