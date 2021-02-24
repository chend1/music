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
// 请求推荐歌曲数据
export function getRcoSong(num){
  return request({
    url: '/personalized',
    params: {
      limit: num
    }
  })
}