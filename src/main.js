import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      phonePage: {
        title: 'Phone Number',
        hint: 'Please enter your phone number',
        continue: 'Continue'
      }
    }
  },
  he: {
    message: {
      phonePage: {
        title: 'הזנת מספר נייד',
        hint: 'הזן מספר נייד',
        continue: 'המשך'
      }
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'he',
  messages
})

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
