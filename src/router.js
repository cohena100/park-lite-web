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
      props: true,
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
      path: '/selectCar',
      name: 'selectCar',
      props: true,
      component: () =>
        import(/* webpackChunkName: "selectCar" */ './views/SelectCar.vue')
    },
    {
      path: '/selectCity',
      name: 'selectCity',
      component: () =>
        import(/* webpackChunkName: "selectCity" */ './views/SelectCity.vue')
    },
    {
      path: '/selectArea',
      name: 'selectArea',
      component: () =>
        import(/* webpackChunkName: "selectArea" */ './views/SelectArea.vue')
    },
    {
      path: '/selectRate',
      name: 'selectRate',
      component: () =>
        import(/* webpackChunkName: "selectRate" */ './views/SelectRate.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () =>
        import(/* webpackChunkName: "payment" */ './views/Payment.vue')
    },
    {
      path: '/paymentSuccess',
      name: 'paymentSuccess',
      component: () =>
        import(/* webpackChunkName: "paymentSuccess" */ './views/PaymentSuccess.vue')
    },
    {
      path: '/paymentCancel',
      name: 'paymentCancel',
      component: () =>
        import(/* webpackChunkName: "paymentCancel" */ './views/PaymentCancel.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "user" */ './views/User.vue'),
      beforeEnter: (to, from, next) => {
        const loggedIn = localStorage.getItem('user')
        if (loggedIn) {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    }
  ]
})

export default router
