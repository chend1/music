import {request} from 'network/request'
// 请求榜单数据
export function getRanking(){
  return request({
    url: '/toplist/detail',
  })
}