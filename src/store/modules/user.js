import NetworkService from '@/services/NetworkService.js'

export const namespaced = true

export const state = {}

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
      validateId: rootState.shared.validateId,
      code: rootState.shared.code
    }
    return NetworkService.validate(data).then(response => {
      commit('db/setUserData', response.data.user, { root: true })
      commit('db/setGeoParkData', response.data.geoPark, { root: true })
      commit('shared/cleanAfterLoginValidate', null, { root: true })
    })
  },
  addCar({ commit, rootState }) {
    return NetworkService.addCar(rootState.db.user._id).then(response => {
      const payload = {
        validateId: response.data.validate.validateId
      }
      commit('shared/setAddCarValidate', payload, { root: true })
    })
  },
  addCarValidate({ commit, rootState }) {
    const data = {
      userId: rootState.db.user._id,
      number: rootState.shared.addCar.number,
      nickname: rootState.shared.addCar.nickname,
      validateId: rootState.shared.validateId,
      code: rootState.shared.code
    }
    return NetworkService.addCarValidate(data).then(response => {
      commit('db/addCarData', response.data.car, { root: true })
      commit('shared/cleanAfterAddCar', null, { root: true })
    })
  },
  removeCar({ commit, rootState }) {
    const data = {
      userId: rootState.db.user._id,
      carId: rootState.shared.removeCar._id
    }
    return NetworkService.removeCar(data).then(() => {
      commit('db/removeCarData', rootState.shared.removeCar, { root: true })
      commit('shared/cleanAfterRemoveCar', null, { root: true })
    })
  },
  logout({ commit, rootState }) {
    return NetworkService.logout(rootState.db.user._id)
      .then(() => {
        commit('db/logout', null, { root: true })
      })
      .catch(error => {
        commit('db/logout', null, { root: true })
        throw error
      })
  }
}
