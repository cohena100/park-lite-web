import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as shared from '@/store/modules/shared.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    shared
  }
})
