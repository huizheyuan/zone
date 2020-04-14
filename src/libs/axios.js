import axios from 'axios'
import vue from 'vue'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true

// 请求拦截器
axios.interceptors.request.use( config => {
  config.metadata = { startTime: new Date().getTime() }
  return config
}, error => {
  console.warn(error)
  return Promise.reject(error)
})

axios.interceptors.response.use( response => {
  if (response.data.message === '未登录') {
    // vue.$router.push({
    //   name: 'login'
    // })
    return response
  }
  return response
}, error => {
  if (error) {
    console.warn(error)
  }
  return Promise.reject(error)
})
