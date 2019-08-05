import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      phoneView: {
        title: 'Phone Number',
        hint: 'Please enter your phone number',
        continue: 'Continue',
        error: 'Please fill 10 digits phone number'
      },
      validateView: {
        title: 'Validation Code',
        hint: 'Please enter validation code',
        continue: 'Continue',
        error: 'Please fill 4 digits phone number'
      }
    }
  },
  he: {
    message: {
      phoneView: {
        title: 'הזנת מספר נייד',
        hint: 'הזן מספר נייד',
        continue: 'המשך',
        error: 'נא הזן מספר בן 10 ספרות'
      },
      validateView: {
        title: 'הזנת קוד אימות',
        hint: 'הזן קוד אימות',
        continue: 'המשך',
        error: 'נא הזן מספר בן 4 ספרות'
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
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('setUserData', userData)
    }
  },
  render: h => h(App)
}).$mount('#app')
