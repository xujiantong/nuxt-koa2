import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.delete['Content-Type'] = 'application/json'

// 拦截请求
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    Message.error({ message: '请求超时!' })
    return Promise.resolve(err)
  }
)
// 拦截返回值
axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    if (err.response.status === 504 || err.response.status === 404) {
      Message.error({ message: '服务器找不到' })
    } else if (err.response.status === 403) {
      Message.error({ message: '权限不足,请联系管理员!' })
    } else {
      Message.error({ message: '未知错误!' })
    }
    return Promise.resolve(err)
  }
)

export default class Http {
  // 项目根路径
  // static BASE = '/dataresource/v1'
  static BASE = ''
  // 状态码
  static HTTP_CODE = {
    SUCCESS: 200,
    REPEAT: 300401
  }
  /**
   * 向后台发送请求
   *
   * @param {*} url 请求地址
   * @param {*} params 参数
   * @returns
   */
  static request(options) {
    return axios(options).then(res => {
      return Http.responseHandler(res)
    })
  }
  static post(url, data) {
    return Http.request({
      method: 'post',
      url: `${Http.BASE}${url}`,
      data: data
    })
  }
  static get(url, params) {
    return Http.request({
      method: 'get',
      url: `${Http.BASE}${url}`,
      params: params
    })
  }
  static del(url, data) {
    return Http.request({
      method: 'delete',
      url: `${Http.BASE}${url}`,
      data: data
    })
  }
  static put(url, data) {
    return Http.request({
      method: 'put',
      url: `${Http.BASE}${url}`,
      data: data
    })
  }
  static upload(url, formData) {
    const contentType = { 'Content-Type': 'multipart/form-data' }
    return Http.request({
      method: 'post',
      url: `${Http.BASE}${url}`,
      data: formData,
      headers: contentType
    })
  }
  static all(arrs) {
    return axios.all(arrs)
  }
  /**
   * 异常处理
   *
   * @param {*} res
   * @returns
   */
  static responseHandler(res) {
    // eslint-disable-next-line no-console
    console.log(res)
    return new Promise(function(resolve, reject) {
      if (res.data.code === Http.HTTP_CODE.SUCCESS) {
        // eslint-disable-next-line no-console
        console.log(res.data.data)
        resolve(res.data.data)
      } else {
        Message.error({ message: res.data.message })
        reject(new Error('请求异常', JSON.stringify(res.data)))
      }
    })
  }
}
