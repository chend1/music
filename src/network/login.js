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