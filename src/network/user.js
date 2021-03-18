import {request} from 'network/request'
// 获取用户信息 , 歌单，收藏，mv, dj 数量
export function getUserMsg(){
  return request({
    url: '/user/subcount',
  })
}
// 获取用户关注列表
export function getFollow(uid){
  return request({
    url: '/user/follows',
    params: {
      uid
    }
  })
}

// 获取用户粉丝列表
export function getFollowed(uid){
  return request({
    url: '/user/followeds',
    params: {
      uid
    }
  })
}
// 获取用户动态
export function getEvent(uid){
  return request({
    url: '/user/event',
    params: {
      uid
    }
  })
}
// 获取用户等级信息
export function getLevel(cookie){
  return request({
    url: '/user/level',
    params: {
      cookie
    }
  })
}
// 签到
export function getSignin(type){
  return request({
    url: '/daily_signin',
    params: {
      type
    }
  })
}