export const namespaced = true

export const state = {
  code: null,
  validateId: null,
  login: {
    phone: null,
    userId: null
  },
  addCar: {
    number: null,
    nickname: null
  },
  removeCar: null,
  park: {
    car: null,
    city: null,
    area: null,
    rate: null
  }
}

export const mutations = {
  setValidate(state, { userId, validateId }) {
    state.login.userId = userId
    state.validateId = validateId
  },
  setAddCarValidate(state, { validateId }) {
    state.validateId = validateId
  },
  cleanAfterAddCar(state) {
    state.addCar.number = null
    state.addCar.nickname = null
    state.validateId = null
    state.code = null
  },
  cleanAfterRemoveCar(state) {
    state.removeCar = null
  },
  cleanAfterLoginValidate(state) {
    state.login.phone = null
    state.login.userId = null
    state.validateId = null
    state.code = null
  },
  cleanAfterParkStart(state) {
    state.park.car = null
    state.park.city = null
    state.park.area = null
    state.park.rate = null
  }
}
