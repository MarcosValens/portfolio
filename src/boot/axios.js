import axios from 'axios'
import {Notify} from 'quasar'


export default async ({Vue, router}) => {
  Vue.prototype.$axios = axios
  axios.interceptors.request.use(config => {
    axios.defaults.headers.common['Content-type'] = 'aplication/x-www-form-urlencoded'
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })

  axios.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.data) {
      router.push('/general')
    } else {
      Notify.create({message: 'Error de autentificación', color: 'primary', position: 'top'})
    }

    return response
  }, function (error) {
    // Do something with response error
    return Promise.reject(error)
  })
}
