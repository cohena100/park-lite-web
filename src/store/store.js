import Vue from 'vue'
import Vuex from 'vuex'
import * as db from '@/store/modules/db.js'
import * as user from '@/store/modules/user.js'
import * as park from '@/store/modules/park.js'
import * as shared from '@/store/modules/shared.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    db,
    user,
    park,
    shared
  }
})
