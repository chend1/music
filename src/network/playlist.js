import {request} from 'network/request'
// 请求热门歌单数据
export function getPlayList(cat,limit,offset,order){
  return request({
    url: '/top/playlist',
    params:{
      cat,
      limit,
      offset,
      order
    }
  })
}
