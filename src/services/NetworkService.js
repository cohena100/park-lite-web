import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_SERVER_BASE_URL,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  login(phone) {
    return apiClient.post('/users/login', { phone })
  },
  validate(data) {
    return apiClient.post('/users/loginValidate', data)
  },
  setToken(token) {
    apiClient.defaults.headers.common['Authorization'] = token
  },
  addCar(userId) {
    return apiClient.post('/cars/add', { userId })
  },
  removeCar(data) {
    return apiClient.post('/cars/remove', data)
  },
  addCarValidate(data) {
    return apiClient.post('/cars/addValidate', data)
  },
  startParking(data) {
    return apiClient.post('/parkings/start', data)
  },
  endParking(data) {
    return apiClient.post('/parkings/end', data)
  }
}
