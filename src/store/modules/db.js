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
  removeCarData(state, car) {
    state.user.cars = state.user.cars.filter(aCar => aCar._id !== car._id)
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  addParkingData(state, payload) {
    state.user = {
      ...state.user,
      ...payload
    }
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  updateParkingEndData(state, payload) {
    state.user = {
      ...state.user,
      ...payload
    }
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  updateParkingPaymentData(state) {
    state.user.parking = undefined
    state.user.payment = undefined
    localStorage.setItem('user', JSON.stringify(state.user))
  },
  logout(state) {
    state.user = null
    state.geoPark = null
    localStorage.removeItem('user')
    localStorage.removeItem('geoPark')
  }
}

export const getters = {
  isLoggedIn(state) {
    return !!state.user
  },
  hasCars(state) {
    return !(state.user === null || state.user.cars.length === 0)
  },
  isParking(state) {
    return !!state.user.parking
  },
  parkingCar(state) {
    return state.user.cars
      .filter(car => car.car._id === state.user.parking.car)
      .pop()
  },
  isPayment(state) {
    return !!state.user.payment
  }
}
