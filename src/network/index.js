import axios from 'axios'
import Router from '@/router'
import Vue from 'vue'

export const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api',
  timeout: 5000
})
// console.log(process.env)

http.interceptors.request.use(config => {
  if (localStorage.getItem('id') && localStorage.getItem('token')) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  }
  // console.log(config)
  return config
}, err => {
  console.log(err)
})

http.interceptors.response.use(config => {
  // console.log(config)
  return config
}, err => {
  if (err.response.status === 401 || err.response.status === 402) {
    Router.push('/login')
    Vue.prototype.$msg.fail(err.response.data.message)
  }
  return Promise.reject(err)
})

// const httpNews = axios.create({

// })

export const newsHttp = axios.create({
  baseURL: 'https://www.escook.cn',
  timeout: 5000
})
