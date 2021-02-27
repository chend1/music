import {request} from 'network/request'
// 请求歌曲数据
export function getSongData(ids){
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 请求歌曲播放地址
export function getSongPlay(id){
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}