<template>
  <div class="playBarItem">
    <div class="wrap">
      <div class="left">
        <div class="back"></div>
        <div class="stop" :class=" { start: $store.state.isPlay } " @click="stopClick"></div>
        <div class="for"></div>
      </div>
      <div class="center">
        <div class="bar">
          <div class="head">
            <img :src="$store.state.musicMsg.pic" alt="" v-if="imgShow">
            <router-link :to="{ path : '/home/single/'+ $store.state.musicMsg.id }"></router-link>
          </div>
          <div class="play">
            <div class="title">
              <div class="name">
                <router-link :to="{ path : '/home/single/'+ $store.state.musicMsg.id }">
                  {{$store.state.musicMsg.title}}
                </router-link>
              </div>
              <div class="author">
                <router-link :to="{ path : '/home/singer/'+ $store.state.musicMsg.aut_id }">
                  {{$store.state.musicMsg.artist}}
                </router-link>
              </div>
            </div>
            <div class="audio"  @mousemove="slipMove"  @mouseup="slipUp" ref="audioWrap">
              <div class="bg" :style="{ width: bgWidth+'%'}">
                <div class="slip" @mousedown="slipDown" ref="slip"></div>
                <audio :src="$store.state.musicMsg.src" 
                       :autoplay="$store.state.isPlay"
                       @canplay="getDuration"
                       @timeupdate="timeUpDate"
                       ref="audio"></audio>
              </div>
            </div>
          </div>
        </div>
        <div class="time">
          <span>{{startTime | getTime}}</span>
          /{{ musicLength | getTime}}
          <!-- $store.state.musicMsg.time -->
        </div>
      </div>
      <div class="right">
        <div class="list">
          <div class="add">添加</div>
          <div class="share">分享</div>
        </div>
        <div class="oper">
          <div class="voice">声音</div>
          <div class="order">顺序</div>
          <div class="lists" @click="listShow">
            <div class="num">
              {{$store.state.playList.length}}
            </div>
          </div>
        </div>
      </div>
      <transition name='slide-fade'>
        <div class="music-list" v-show="$store.state.listIsShow">
          <!-- 音乐列表 -->
          <FootPlayList @closeClick="listShow"></FootPlayList>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import FootPlayList from './FootPlayList.vue'
  export default {
    name: 'PlayBarItem',
    components: {
      FootPlayList
    },
    data(){
      return {
        // 鼠标按下的坐标
        pageX: 0,
        moveX: 0,
        // 滑块停留的时间段
        overTime: 0,
        // 滑动的距离
        distance: 0,
        // 可滑动的距离
        slidWidth: 0,
        isDown: false,
        bgWidth: 0,
        // 音乐播放的当前时间
        startTime: 0,
        // 音乐时间长
        musicLength: 0,
      }
    },
    computed: {
      imgShow(){
        if(this.$store.state.playList.length > 0){
          return true
        } else {
          return false
        }
      },
    },
    methods: {
      slipDown(e){
        this.pageX = e.clientX;
        this.isDown = true;
        this.slidWidth = this.$refs.audioWrap.clientWidth
        this.overTime = this.$refs.audio.currentTime
      },
      slipMove(e){
        if(this.isDown){
          this.moveX = e.clientX;
          if(this.moveX >= this.pageX ){
            this.distance = this.moveX-this.pageX;
            // this.bgWidth = parseInt(this.overTime - this.distance/this.slidWidth * this.musicLength)/this.musicLength * 100
            this.$refs.audio.currentTime = this.distance/this.slidWidth * this.musicLength + this.overTime
          }
          if(this.moveX < this.pageX ){
            this.distance = this.pageX - this.moveX;
            // this.bgWidth = parseInt(this.overTime - this.distance/this.slidWidth * this.musicLength)/this.musicLength * 100
            this.$refs.audio.currentTime = this.overTime - this.distance/this.slidWidth * this.musicLength 
          }
        }
      },
      slipUp(){
        this.isDown = false;
      },
      // 暂停播放点击事件
      stopClick(){
        if(this.$store.state.playList.length > 0){
          this.$store.commit('stopClick');
          if(this.$store.state.isPlay){
            this.$refs.audio.play()
          } else {
            this.$refs.audio.pause()
          }
        }
      },
      getDuration(){
        this.musicLength = parseInt(this.$refs.audio.duration)
      },
      // 音乐播放时间触发
      timeUpDate(e){
        this.startTime = parseInt(e.target.currentTime);
        // if(!this.isDown){
          this.bgWidth = this.startTime/this.musicLength * 100
        // }
      },
      // 音乐播放列表是否显示
      listShow(){
        this.$store.commit('listShow')
        console.log(this.$store.state.playList);
      }
    },
    filters: {
      getTime(time){
        let m = parseInt(time/60);
        let s = time%60;
        if(m<10){
          m = '0'+ m
        }
        if(s<10){
          s = '0'+ s
        }
        return m + ':' + s
      }
    }
  }
</script>

<style scoped>
  .wrap{
    width: 1000px;
    margin: 0 auto;
    position: relative;
  }
  .left,.center{
    float: left;
  }
  .left{
    width: 137px;
    padding: 6px 0 0 0;
    overflow: hidden;
  }
  .left>div{
    float: left;
    width: 28px;
    height: 28px;
    margin-top: 6px;
    margin-right: 10px;
    background-image: url(~assets/images/playbar.png);
    cursor: pointer;
  }
  .left>div.back{
    background-position: 0 -132px;
  }
  .left>div.back:hover{
    background-position: -30px -132px;
  }
  .left>div.stop{
    width: 36px;
    height: 36px;
    margin-top: 2px;
    background-position: 0 -206px;
  }
  .left>div.start{
    background-position: 0 -167px;
  }
  .left>div.stop:hover{
    background-position: -40px -206px;
  }
  .left>div.start:hover{
    background-position: -40px -167px;
  }
  .left>div.for{
    background-position: 70px -132px;
  }
  .left>div.for:hover{
    background-position: 40px -132px;
  }
  .right{
    float: right;
  }
  .center{
    overflow: hidden;
  }
  .center .head,.play{
    float: left;
  }
  .center .head{
    width: 34px;
    height: 34px;
    margin-top: 5px;
    position: relative;
  }
  .center .head img{
    width: 34px;
    height: 34px;
  }
  .center .head a{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(~assets/images/playbar.png);
    background-position: 0px -80px;
  }
  .center .head{
    background-image: url(~assets/images/playbar.png);
    background-position: 0px -80px;
  }
  .center .play .title{
    height: 22px;
  }
  .center .bar{
    float: left;
  }
  .center .time{
    float: left;
    margin-top: 23px;
    padding: 0 10px;
  }
  .center .time span{
    color: #a1a1a1;
  }
  .center .play{
    height: 37px;
    width: 439px;
    position: relative;
    margin-left: 15px;
    margin-top: 3px;
  }
  .center .play .title{
    overflow: hidden;
    margin-top: 3px;
  }
  .center .play .title .name,.author{
    float: left;
  }
  .center .play .title .name a{
    color: #e8e8e8;
  }
  .author a{
    color: #9b9b9b;
    padding-left: 20px;
  }
  .center .play .audio{
    width: 439px;
    height: 10px;
    background-color: #151515;
    border-radius: 5px;
    border: 1px solid #474747;
    box-sizing: border-box;
  }
  .center .play .audio .bg{
    max-width: 100%;
    height: 8px;
    background-color: red;
    border-radius: 5px;
    position: relative;
  }
  .center .play .audio .bg .slip{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: -6px;
    right: -10px;
    background-image: url(~assets/images/iconall.png);
    background-position: 0 -251px;
    cursor: pointer;
  }
  .right{
    width: 225px;
    padding-right: 25px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .right .list,.right .oper{
    float: left;
  }
  .list .add,.list .share,.voice,.order,.lists{
    float: left;
  }
  .right .list{
    margin-right: 20px;
  }
  .right .list .add,.right .list .share,.oper .voice,.oper .order{
    width: 25px;
    height: 25px;
    margin-top: 11px;
    margin-right: 5px;
    background-image: url(~assets/images/playbar.png);
    text-indent: -9999px;
    cursor: pointer;
  }
  .right .list .add{
    background-position: -85px -162px;
  }
  .right .list .add:hover{
    background-position: -85px -188px;
  }
  .right .list .share{
    background-position: -115px -162px;
  }
  .right .list .share:hover{
    background-position: -115px -188px;
  }
  .oper .voice{
    background-position: -5px -247px;
  }
  .oper .voice:hover{
    background-position: -34px -247px;
  }
  .oper .order{
    background-position: -69px -247px;
  }
  .oper .order:hover{
    background-position: -96px -247px;
  }
  .oper .lists{
    position: relative;
    width: 59px;
    height: 25px;
    margin-top: 11px;
    background-image: url(~assets/images/playbar.png);
    background-position: -42px -68px;
    cursor: pointer;
  }
  .oper .lists:hover{
    background-position: -42px -98px;
  }
  .oper .lists .num{
    position: absolute;
    top: 0;
    right: 15px;
    height: 25px;
    line-height: 27px;
    color: #666;
  }
  .music-list{
    width: 100%;
    transition: all .5s;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 300px;
    border-radius: 5px 5px 0 0;
    background-color: rgba(0,0,0,.93);
    overflow: hidden;
  }
  .slide-fade-enter-active {transition: all .2s;}
  .slide-fade-leave-active {transition: all .2s}
</style>