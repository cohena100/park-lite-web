import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import store from './store/store'
import Vuetify from 'vuetify/lib'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

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

Vue.config.productionTip = false

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
        title: 'Park Lite',
        addCarListItem: 'Add car',
        startParkingListItem: 'Start parking',
        stopParkingListItem: 'Stop parking',
        paymentListItem: 'Pay for parking'
      },
      carView: {
        title: 'Fill Car Number',
        hint: 'Please enter the car number',
        continue: 'Continue',
        errorMin: 'Please fill at least 5 digits',
        errorMax: 'Please fill at most 8 digits'
      },
      nicknameView: {
        title: 'Fill Car Nickname',
        hint: 'Please enter the car nickname',
        continue: 'Continue',
        errorMin: 'Please fill at least 1 digits',
        errorMax: 'Please fill at most 20 digits'
      },
      selectCarView: {
        title: 'Car Selection'
      },
      selectCityView: {
        title: 'City Selection'
      },
      selectAreaView: {
        title: 'Area Selection'
      },
      selectRateView: {
        title: 'Rate Selection'
      },
      userView: {
        title: 'Park Lite',
        addCarListItem: 'Add car',
        removeCarListItem: 'Remove Car',
        logoutListItem: 'Exit'
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
        title: 'פארק לייט',
        addCarListItem: 'הוסף רכב',
        startParkingListItem: 'הפעלת חנייה',
        stopParkingListItem: 'סיום חנייה',
        paymentListItem: 'תשלום עבור חנייה'
      },
      carView: {
        title: 'הזנת מספר רכב',
        hint: 'הזן מספר רכב',
        continue: 'המשך',
        errorMin: 'נא להזין מספר בן 5 ספרות לפחות',
        errorMax: 'נא להזין מספר בן 8 לכל היותר'
      },
      nicknameView: {
        title: 'הזנת כינוי לרכב',
        hint: 'הזן כינוי לרכב',
        continue: 'המשך',
        errorMin: 'נא להזין כינוי בן תו לפחות',
        errorMax: 'נא להזין כינוי בן 20 תווים לכל היותר'
      },
      selectCarView: {
        title: 'בחירת רכב'
      },
      selectCityView: {
        title: 'בחירת עיר'
      },
      selectAreaView: {
        title: 'בחירת איזור'
      },
      selectRateView: {
        title: 'בחירת תעריף'
      },
      userView: {
        title: 'פארק לייט',
        addCarListItem: 'הוסף רכב',
        removeCarListItem: 'הסר רכב',
        logoutListItem: 'יציאה'
      }
    }
  }
}

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
      const payload = JSON.parse(userString)
      this.$store.commit('db/setUserData', payload)
    }
    const geoParkString = localStorage.getItem('geoPark')
    if (geoParkString) {
      const payload = JSON.parse(geoParkString)
      this.$store.commit('db/setGeoParkData', payload)
    }
  },
  render: h => h(App)
}).$mount('#app')
