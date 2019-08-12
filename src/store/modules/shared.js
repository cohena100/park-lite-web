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
  }
}
