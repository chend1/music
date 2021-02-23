import {request} from 'network/request'
// 请求swiper数据
export function getBanner(type){
  return request({
    url: '/banner',
    params: {
      type
    }
  })
}