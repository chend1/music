import {request} from 'network/request'
// 请求蝶片数据
export function getAlbumList(area,limit){
  return request({
    url: '/album/new',
    params:{
      area,
      limit
    }
  })
}
