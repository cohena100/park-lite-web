import NetworkService from '@/services/NetworkService.js'

export const namespaced = true

export const state = {}

export const actions = {
  start({ commit, rootState }) {
    const data = {
      userId: rootState.db.user._id,
      carId: rootState.shared.park.car._id,
      lat: 0.0,
      lon: 0.0,
      cityId: rootState.shared.park.city.id,
      cityName: rootState.shared.park.city.name,
      areaId: rootState.shared.park.area.id,
      areaName: rootState.shared.park.area.name,
      rateId: rootState.shared.park.rate.id,
      rateName: rootState.shared.park.rate.name
    }
    return NetworkService.startParking(data).then(response => {
      commit('db/addParkingData', response.data, { root: true })
      commit('shared/cleanAfterParkStart', null, { root: true })
    })
  },
  end({ commit, rootState }) {
    const data = {
      userId: rootState.db.user._id,
      parkingId: rootState.db.user.parking._id
    }
    return NetworkService.endParking(data).then(response => {
      commit('db/updateParkingEndData', response.data, { root: true })
    })
  }
}
