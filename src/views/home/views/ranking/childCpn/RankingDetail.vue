<template>
  <div class="ranking-detail" v-if="Object.keys(playlist).length > 0">
    <div class="detail-top">
      <div class="head">
        <img :src="playlist.head" alt="">
        <div class="img"></div>
      </div>
      <div class="cnt">
        <div class="title">
          <h2>{{playlist.name}}</h2>
        </div>
        <div class="time">
          <i class="icon"></i>
          <span>最近更新：</span>
          <span>{{playlist.time | changeTime}}</span>
        </div>
        <div class="toolbar">
          <div class="play">
            <a title="播放">
              <span></span>
              <p>播放</p>
            </a>
            <a title="添加到播放列表" class="add">
              <span></span>
            </a>
          </div>
          <ul>
            <li class="col"><p>收藏</p></li>
            <li class="sha"><p>分享</p></li>
            <li class="dow"><p>下载</p></li>
            <li class="total">
              <p class="num"></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="title-wrap">
      <h3>歌曲列表</h3>
      <span>{{playlist.palyList.length}}首歌</span>
      <div class="count">
        <span>播放：</span>
        <span class="playCount">{{playlist.playCount}}</span>
        <span>次</span>
      </div>
    </div>
    <div class="palyList">
      <div class="head">
        <div class="idx"></div>
        <div class="list-tit">标题</div>
        <div class="list-time">时长</div>
        <div class="list-singer">歌手</div>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RankingDetail',
    data(){
      return {

      }
    },
    props: {
      playlist: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      changeTime(time){
        let newTime = new Date(time);
        let M = newTime.getMonth() + 1;
        let d = newTime.getDate();
        if(M < 10){
            M = '0' + M;
        }
        if(d < 10){
          d = '0' + d;
        }
        return  M + '月' + d + '日'
      }
    }
  }
</script>

<style scoped>
  .ranking-detail{
    padding: 40px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .detail-top{
    width: 100%;
    overflow: hidden;
  }
  .detail-top .head,.detail-top .cnt{
    float: left;
  }
  .detail-top .cnt{
    margin-left: 30px;
  }
  .detail-top .head{
    width: 158px;
    height: 158px;
    padding: 3px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    position: relative;
  }
  .detail-top .head img{
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  .detail-top .head .img{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(~assets/images/coverall.png);
    background-position: -226px -380px;
  }
  .cnt .title{
    margin-top: 15px;
  }
  .cnt .title h2{
    line-height: 24px;
    font-size: 20px;
    font-weight: normal;
  }
  .time{
    line-height: 35px;
  }
  .icon{
    display: inline-block;
    width: 13px;
    height: 13px;
    background-image: url(~assets/images/icon.png);
    background-position: -18px -682px;
    margin-right: 5px;
  }
  .toolbar{
    overflow: hidden;
    margin-top: 20px;
  }
  .toolbar .play{
    border-radius: 5px;
  }
  .toolbar .play,.toolbar ul,.toolbar ul li{
    float: left;
    cursor: pointer;
    overflow: hidden;
  }
  .toolbar .play a{
    display: block;
    width: 66px;
    height: 30px;
    float: left;
    line-height: 30px;
    background-image: url(~assets/images/button2.png);
    background-position: right -387px;
  }
  .toolbar .play a.add{
    width: 30px;
    height: 30px;
  }
  .toolbar .play a span{
    display:block;
    float: left;
    width: 22px;
    height: 18px;
    margin-top: 6px;
    background-image: url(~assets/images/button2.png);
    background-position: 0 -1622px;
    margin-left: 5px;
  }
  .toolbar .play a.add span{
    background-image: url(~assets/images/button2.png);
    background-position: 0 -1594px;
    margin-left: 0
  }
  .toolbar .play a p{
    line-height: 30px;
    float: left;
    color: #fff;
    padding-left: 5px;
  }
  .toolbar ul li{
    border: 1px solid #c4c4c4;
    width: 60px;
    height: 30px;
    box-sizing: border-box;
    margin-left: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  .toolbar ul li{
    background-image: url(~assets/images/button2.png);
    background-position: 0 -977px;
  }
  .toolbar ul li p,.toolbar ul li span{
    display: block;
    float: right;
  }
  .toolbar ul li p{
    color: #c4c4c4;
    line-height: 30px;
    padding: 0 5px;
  }
  .toolbar ul li.sha{
    background-position: 0 -1225px;
  }
  .toolbar ul li.dow{
    background-position: 0 -2761px;
  }
  .toolbar ul li.total{
    background-position: 0 -1465px;
  }
  .title-wrap{
    height: 33px;
    margin-top: 35px;
    border-bottom: 2px solid #c20c0c;
  }
  .title-wrap h3{
    font-size: 20px;
    font-weight: normal;
    float: left;
  }
  .title-wrap>span{
    float: left;
    display: block;
    line-height: 33px;
    margin-left: 20px;
  }
  .count{
    float: right;
    display: block;
    line-height: 33px;
  }
  .playCount{
    color: #c20c0c;
  }
  .palyList{
    overflow: hidden;
  }
  .palyList .head{
    height: 38px;
    box-sizing: border-box;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    box-shadow: -8px 0px 9px #ccc;
  }
  .palyList .head .idx{
    width: 15%;
    height: 38px;
    float: left;
  }
  .palyList .head .list-tit,.list-time,.list-singer{
    float: left;
    height: 38px;
    line-height: 18px;
    padding: 8px 10px;
    box-sizing: border-box;
    color: #666;
    border-left: 1px solid #ccc;
  }
  .palyList .head .list-tit{
    width: 40%;
  }
  .list-time{
    width: 19%;
  }
  .list-singer{
    width: 26%;
  }
</style>