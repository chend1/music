import {request} from 'network/request'
// 二维码登录
export function getLoginKey(){
  return request({
    url: '/login/qr/key',
  })
}

export function getLogin(key,qrimg){
  return request({
    url: '/login/qr/create',
    params: {
      key,
      qrimg
    }
  })
}
// 二维码检测扫码状态接口
export function getQrType(key){
  return request({
    url: '/login/qr/check',
    params: {
      key
    }
  })
}
// 退出登录
export function logOut(){
  return request({
    url: '/logout'
  })
}
// 刷新登录
export function refresh(){
  return request({
    url: '/login/refresh'
  })
}
// 获取账户信息
export function getUser(cookie){
  return request({
    url: '/user/account',
    params: {
      cookie
    }
  })
}

export class User{
  constructor(id,head,name,cookie){
    this.id = id;
    this.head = head;
    this.name = name;
    this.cookie = cookie
  }
}