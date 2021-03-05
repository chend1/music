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
// 获取歌词
export function getLyric(id){
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}



export class Music{
  constructor(pic,src,time,title,artist,id,aut_id){
    this.pic = pic;
    this.src = src;
    this.time = time;
    this.title = title;
    this.artist = artist;
    this.id = id;
    this.aut_id = aut_id
  }
}

export class Song{
  constructor(pic,al,name,artist,id,mv_id){
    this.pic = pic;
    this.al = al;
    this.name = name;
    this.artist = artist;
    this.id = id;
    this.mv_id = mv_id
  }
}