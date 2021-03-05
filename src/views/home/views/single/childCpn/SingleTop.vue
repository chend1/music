<template>
  <div class="singleTop">
    <div class="top" v-if="Object.keys(musicMessage).length > 0">
      <div class="pic-wrap">
        <div class="pic">
          <img :src="musicMessage.pic" alt="">
          <div class="bg"></div>
        </div>
      </div>
      <div class="content">
        <div class="head">
          <div class="point"></div>
          <div class="name">
            {{musicMessage.name}}
          </div>
          <div class="mv" v-if="musicMessage.mv_id !== 0">
            <router-link :to="{ path:'/home/mv/' + musicMessage.mv_id}"></router-link>
          </div>
        </div>
        <div class="singer">
          <span>歌手：</span>
          <ul>
            <li v-for="(item,index) in musicMessage.ar">
              <div class="name">
                <router-link :to="{ path:'/home/singer/' + item.id }">
                  {{item.name}}
                </router-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="album">
          <span>所属专辑:</span>
          <div class="name">
            <router-link :to="{ path:'/home/album/' + musicMessage.al.id }">
              {{musicMessage.al.name}}
            </router-link>
          </div>
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
        <div class="lyric" v-html="lyric" :class=" { hide : isOpen }">

        </div>
        <div class="show" @click="showClick">
          <span v-show="isOpen">展开<i></i></span>
          <span v-show="!isOpen">收起<i class="close"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleTop',
    props: {
      musicMessage: {
        type: Object,
        default(){
          return {}
        }
      },
      lyric: {
        type: String,
        default: ''
      }
    },
    data(){
      return {
        isOpen: true
      }
    },
    methods: {
      showClick(){
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped>
  .top{
    overflow: hidden;
  }
  .singleTop{
    padding: 45px 30px 40px 40px;
  }
  .pic{
    width: 198px;
    height: 198px;
    position: relative;
  }
  .pic img{
    width: 130px;
    height: 130px;
    margin: 34px;
  }
  .bg{
    width: 206px;
    height: 206px;
    position: absolute;
    top: -4px;
    left: -4px;
    background-image: url(~assets/images/coverall.png);
    background-position: -140px -580px;
  }
  .pic-wrap{
    float: left;
  }
  .content{
    width: 415px;
    float: right;
  }
  .content .head{
    overflow: hidden;
    height: 30px;
  }
  .content .head .point,.content .head .name,.content .head .mv{
    float: left;
  }
  .content .head .point{
    width: 54px;
    height: 24px;
    margin-top: 3px;
    background-image: url(~assets/images/icon.png);
    background-position: 0 -464px;
  }
  .content .head .name{
    font-size: 26px;
    line-height: 30px;
    padding-left: 10px;
  }
  .content .head .mv{
    margin-left: 10px;
    width: 21px;
    height: 18px;
    margin-top: 6px;
    background-image: url(~assets/images/icon.png);
    background-position: 0 -18px;
  }
  .content .head .mv a{
    display: block;
    width: 100%;
    height: 18px;
  }
  .content .singer{
    overflow: hidden;
    margin-top: 10px;
  }
  .content .singer ul,.content .singer span,.album span,.album .name{
    float: left;
    overflow: hidden;
  }
  .content .singer span,.album span{
    color: #999;
    font-size: 12px;
  }
  .content .singer ul li{
    float: left;
  }
  .content .singer ul li a{
    color: #0c73c2;
    border-right: 1px solid #999;
    padding: 0 5px;
  }
  .content .singer ul li:last-child a{
    border-right: none;
  }
  .content .album{
    overflow: hidden;
    margin-top: 7px;
  }
  .album a{
    color: #0c73c2;
    padding: 0 5px;
  }
  .album .name{
    padding-left: 5px;
  }
  .toolbar{
    overflow: hidden;
    margin-top: 10px;
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
  .lyric{
    line-height: 25px;
    padding-top: 30px;
  }
  .hide{
    height: 327px;
    overflow: hidden;
  }
  .show{
    width: 50px;
  }
  .show span{
    color: #0c73c2;
    cursor: pointer;
  }
  .show span i{
    display: inline-block;
    width: 11px;
    height: 8px;
    background-image: url(~assets/images/icon.png);
    background-position: -65px -520px;
    margin-left: 3px;
  }
  .show span i.close{
    background-position: -45px -520px;
  }
</style>