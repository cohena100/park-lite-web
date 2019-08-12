import NetworkService from '@/services/NetworkService.js'

export const namespaced = true

export const state = {
  user: null,
  geoPark: null
}

export const mutations = {
  setUserData(state, payload) {
    state.user = payload
    localStorage.setItem('user', JSON.stringify(state.user))
    NetworkService.setToken(state.user.token)
  },
  setGeoParkData(state, payload) {
    state.geoPark = payload
    localStorage.setItem('geoPark', JSON.stringify(state.geoPark))
  },
  addCarData(state, payload) {
    state.user.cars.push(payload)
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  addParkingData(state, payload) {
    state.user = {
      ...state.user,
      ...payload
    }
    localStorage.setItem('user', JSON.stringify(state.user))
  }
}

export const getters = {
  isLoggedIn(state) {
    return !!state.user
  },
  hasCars(state) {
    return !(state.user === null || state.user.cars.length === 0)
  }
}
