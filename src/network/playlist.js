import {request} from 'network/request'
// 请求热门歌单数据
export function getPlayList(cat,limit,offset,order){
  return request({
    url: '/top/playlist',
    params:{
      // cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部"
      cat,
      // 显示条数
      limit,
      // 偏移数量 , 用于分页
      offset,
      // order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
      order
    }
  })
}
