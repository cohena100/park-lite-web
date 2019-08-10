import Router from 'vue-router'
import Home from './views/Home.vue'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
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
        import(/* webpackChunkName: "phone" */ './views/Phone.vue')
    },
    {
      path: '/validate',
      name: 'validate',
      props: true,
      component: () =>
        import(/* webpackChunkName: "validate" */ './views/Validate.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import(/* webpackChunkName: "car" */ './views/Car.vue')
    },
    {
      path: '/nickname',
      name: 'nickname',
      component: () =>
        import(/* webpackChunkName: "nickname" */ './views/Nickname.vue')
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
