import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Router from 'vue-router'
import store from '@/store/store'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import { mount } from '@vue/test-utils'

Vue.use(Vuetify)
Vue.use(Router)
Vue.use(Vuelidate)
Vue.use(VueI18n)

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  rtl: false
})

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
      },
      homeView: {
        title: 'Park Lite'
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
      },
      homeView: {
        title: 'פארק לייט'
      }
    }
  }
}

const i18n = new VueI18n({
  locale: 'en',
  messages
})

describe('App', () => {
  it('renders a child component via routing', done => {
    const wrapper = mount(App, {
      Vue,
      i18n,
      router,
      store,
      vuetify,
      created() {
        const userString = localStorage.getItem('user')
        if (userString) {
          const payload = JSON.parse(userString)
          this.$store.commit('user/setUserData', payload)
        }
      }
    })
    expect(wrapper).not.toBeNull()
    expect(wrapper.attributes().id).toBe('app')
    Vue.nextTick(() => {
      console.log(wrapper.html())
      done()
    })
  })
})
