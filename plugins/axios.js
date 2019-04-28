import Axios from 'axios'

const options = {
  baseURL: '',
  timeout: 5000,
  responseType: 'json',
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
}
// 创建实例
const axios = Axios.create(options)

// 拦截
axios.interceptors.response.use(
  res => {
    if (res.status && res.status === 200 && res.data.status === 'error') {
      return
    }
    return res
  },
  err => {
    if (err.response.status !== 200) {
    }
    return Promise.resolve(err.response)
  }
)
export default axios
