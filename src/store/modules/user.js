import NetworkService from '@/services/NetworkService.js'

export const namespaced = true

export const state = {
  user: null
}

export const mutations = {
  setUserData(state, data) {
    state.user = data.user
    localStorage.setItem('user', JSON.stringify(state.user))
    NetworkService.setToken(state.user.token)
  }
}

export const actions = {
  login({ commit, rootState }) {
    return NetworkService.login(rootState.shared.login.phone).then(response => {
      const payload = {
        userId: response.data.validate.userId,
        validateId: response.data.validate.validateId
      }
      commit('shared/setValidate', payload, { root: true })
    })
  },
  validate({ commit, rootState }) {
    const data = {
      userId: rootState.shared.login.userId,
      validateId: rootState.shared.login.validateId,
      code: rootState.shared.login.code
    }
    return NetworkService.validate(data).then(response => {
      commit('setUserData', response.data)
    })
  }
}
export const getters = {
  isLoggedIn(state) {
    return !!state.user
  }
}
