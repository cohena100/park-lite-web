export const namespaced = true

export const state = {
  login: {
    phone: null,
    validateId: null,
    userId: null,
    code: null
  }
}

export const mutations = {
  setValidate(state, { userId, validateId }) {
    state.login.userId = userId
    state.login.validateId = validateId
  }
}
