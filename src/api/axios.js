/**
 * Created by superman on 17/2/16.
 * http配置
 */
import axios from 'axios'
// import store from '../store'
// import * as types from './store/types'
// import router from '../router/index'
// axios 配置
axios.defaults.timeout = 5000
// axios.defaults.baseURL = 'http://121.201.58.252:8092'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // console.log(config.url)
    config.headers.Authorization = `bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MTM1NjYzMzks
    InVzZXJfbmFtZSI6IjEzMTExMTExMTExIiwiYXV0aG9yaXRpZXMiOlsiVVNFUiJdLCJqdGkiOiI4ZjNiZGVjNC00NmM3L
    TQ1M2EtYjU2Ny1hYWI2MzQ5OThhNTMiLCJjbGllbnRfaWQiOiJicm93c2VyIiwic2NvcGUiOlsidWkiXX0.WeL9Uf5V52uPOU1v
    y8GBxGM-Nza0s93QB00-PTnGndNr6hYh3fILwozgHYxI8eNVxMbGrKI3kiT4902SgFeZ-niN4Yf4cxYDeh8WlzPK8JouVcOlXqqe
    DpPwMV7p1P_IMxkkV2SaQLFt-D2n9Ct8ixYbdxMzDA2LTakfooXxtPDxBvyRcn7Y4TfEJSAMqgIhLLuOe6bxOk4m-ZqioEZwNAAbwDyWHLziJ
    HMhh_ePA93iWdmbKw4Q4uh9oSMEnkSge0YFMuWItu7Db4t8aPJ0_qou-pbJ2AJdR2P7zPGUXREvNdZXFIL1M4dA69c1wMz1zvD-
    Fofm6MsjR6lKkH1alg`
    /* if (/!* store.state.token *!/sessionStorage.getItem('spreaderToken')) {
      if (config.url.indexOf('/api/auth/exists/') > -1 || config.url.indexOf('/api/auth/verifyCode') > -1 || config.url.indexOf('/api/auth/reset_password/finish') > -1 || config.url.indexOf('/api/auth/check/smsCode') > -1) {
        config.headers.Authorization = sessionStorage.getItem('spreaderTokenLetter')
      } else {
        config.headers.Authorization = sessionStorage.getItem('spreaderToken') // `token ${store.state.token}`
      }
      // config.headers.Authorization = 'Bearer ' + localStorage.token // `token ${store.state.token}`
    } */
    return config
  },
  err => {
    // console.log('请求失败')
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // console.log(response)
    return response
  },
  error => {
    if (error.code === 'ECONNABORTED') {
      // store.dispatch('errorToast', '请求超时')
    }
    // console.log(error)
    if (error.response) {
      // console.log(error.response)
      switch (error.response.status) {
        case 401:
        case 403:
          // 401 清除token信息并跳转到登录页面
          // store.dispatch('deleteToken', {})
          // localStorage.removeItem('spreaderToken') 在action处理
          // Vue.cookie.delete('token', {domain: store.state.currentDomain})
          // store.commit(types.LOGOUT)
          // router.replace({
          //   path: 'login',
          //   query: {redirect: router.currentRoute.fullPath}
          // })
          break
        case 500:
        case 504:
          // store.dispatch('errorToast', '服务器出错啦')
          break
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    // return Promise.reject(error.response.data)
    return Promise.reject(error.response)
  })

export default axios
