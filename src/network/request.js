import axios from 'axios'
export function request(config){
  const instance = axios.create({
    baseURL: 'http://192.168.2.25:3000',
    withCredentials: true
  })
  // request 拦截器
  instance.interceptors.request.use(
    config => {
      if(config.method === 'post'){
        config.data = {
          ...config.data,
          //防止请求缓存，添加时间戳
          t: +new Date()
        }
      }
      if(config.url.indexOf('login') > -1){
        config.params = {
          ...config.params,
          t: +new Date()
        }
      }
      return config
    }
  )
  return instance(config)
}



