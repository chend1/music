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
// 请求新碟数据
export function getNewDisc(){
  return request({
    url: '/album/newest',
  })
}

// 请求榜单
// export function getList(){
//   return request({
//     url: '/toplist/detail',
//   })
// }
export function getRankList(id){
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 请求歌手列表
export function getSingerList(type,limit,area){
  return request({
    url: '/artist/list',
    params: {
      type,
      limit,
      area
    }
  })
}
// 主播榜
export function getAnchor(limit){
  return request({
    url: '/dj/toplist/popular',
    params: {
      limit
    }
  })
}