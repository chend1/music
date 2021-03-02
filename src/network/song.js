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




export class Music{
  constructor(head,url,time,name,author,id,aut_id){
    this.head = head;
    this.url = url;
    this.time = time;
    this.name = name;
    this.author = author;
    this.id = id;
    this.aut_id = aut_id
  }
}