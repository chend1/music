import {request} from 'network/request'
// 请求榜单数据
export function getRanking(){
  return request({
    url: '/toplist/detail',
  })
}

// 请求歌单详情
export function getRankDetail(id){
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 歌单对象
export class PlayList{
  constructor(id,head,name,time,palyList,playCount){
    this.id = id;
    this.head = head;
    this.name = name;
    this.time = time;
    this.palyList = palyList;
    this.playCount = playCount
  }
}