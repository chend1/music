<template>
  <div class="playBarItem">
    <div class="play-wrap">
      <div class="wrap">
        <div class="left">
          <div class="back" @click="backClick"></div>
          <div class="stop" :class=" { start: $store.state.isPlay } " @click="stopClick"></div>
          <div class="for" @click="forClick"></div>
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
                         @ended="playEnd"
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
            <div class="voice" @click.self="changeVoice">
              声音
              <div class="change-voice" v-show="voiceShow">
                <div class="slide-wrap" @mousemove="voiceMove">
                  <div class="slide" :style="{height: voiceH + '%'}"></div>
                  <div class="slip" @mousedown="voiceDown" @mouseup="voiceUp" ref="voiceSlip" :style="{top: slipTop + 'px'}"></div>
                </div>
              </div>
            </div>
            <div class="order" :class="playMode[modeIdx].style" :title="playMode[modeIdx].mode" @click="orderClick">{{playMode[modeIdx].mode}}</div>
            <div class="lists" @click="listShow">
              <div class="num">
                {{$store.state.playList.length}}
              </div>
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
      <div class="add-point" v-if="this.$store.state.addPoint">
        已添加到播放列表
      </div>
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
        // 音量按钮是否显示
        voiceShow: false,
        voiceMoveType: false,
        voiceH: 100,
        // 音乐按钮初始位置
        offset: 0,
        voiceY: 0,
        voiceD: 0,
        slipTop: -7,
        // 播放方式
        playMode: [
          {
            id: 0,
            mode: "循环",
            style: 'loop'
          },
          {
            id: 1,
            mode: "随机",
            style: 'random'
          },
          {
            id: 2,
            mode: "单曲循环",
            style: 'single'
          }
        ],
        modeIdx: 1
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
        this.bgWidth = this.startTime/this.musicLength * 100;
        // 发射事件总线
        this.$Eventbus.$emit("lrcTimeUpDate",e.target.currentTime)
      },
      // 音乐播放列表是否显示
      listShow(){
        this.$store.commit('listShow')
        console.log(this.$store.state.playList);
      },
      // 声音点击事件
      changeVoice(){
        this.voiceShow = !this.voiceShow;
        console.log(this.$refs.audio.volume);
      },
      voiceDown(e){
        this.voiceMoveType = true;
        // 滑块初始位置
        this.voiceY = e.pageY
        this.offset = this.$refs.voiceSlip.offsetTop
      },
      voiceUp(){
        this.voiceMoveType = false
      },
      voiceMove(e){
        if(this.voiceMoveType){
          if( e.pageY > this.voiceY && (e.pageY - this.voiceY + this.offset) <= 83){
            this.slipTop = e.pageY - this.voiceY + this.offset
          }
          if(e.pageY < this.voiceY && (this.offset - this.voiceY + e.pageY) >= 0){
            this.slipTop = this.offset - this.voiceY + e.pageY 
          }
          if(e.pageY > this.voiceY){
            this.voiceD = e.pageY - this.voiceY;
            this.voiceD = (100 - (this.voiceD+ this.offset)/90 * 100).toFixed(2);
          }
          if(e.pageY < this.voiceY){
            this.voiceD = this.voiceY - e.pageY;
            this.voiceD = (100 - (this.offset-this.voiceD)/90 * 100).toFixed(2)
          }
          this.voiceH = this.voiceD
          // console.log(this.voiceD);
          // console.log( this.offset);
        }
      },
      // 播放结束事件
      playEnd(){
        console.log(222);
        // 循环播放
        let len = this.$store.state.playList.length
        if(this.modeIdx === 0){
          if(this.$store.state.count < len-1){
            this.$store.commit('playEnd') 
          } else {
            this.$store.commit('playEnd',0)
          }
        }
        // 随机播放
        if(this.modeIdx === 1){
          if(len > 1){
            let old = this.$store.state.count
            let random = Math.floor(Math.random()*len);
            this.$store.commit('playEnd',random)
            if(random === old){
              this.$refs.audio.play()
            }
          } else {
            this.$store.commit('playStop')
          }
        }
        // 单曲循环播放
        if(this.modeIdx === 2){
          this.$refs.audio.play()
        }
        this.modeIdx
      },
      // 歌曲播放顺序单击事件
      orderClick(){
        if(this.modeIdx >= 2){
          this.modeIdx = 0
        } else {
          this.modeIdx++
        }
      },
      // 上一曲，下一曲单击事件
      backClick(){
        if(this.$store.state.count > 0){
          this.$store.commit('backClick') 
        } else {
          this.$store.commit('playEnd',this.$store.state.playList.length-1)
        }
      },
      forClick(){
        if(this.$store.state.count < this.$store.state.playList.length-1){
          this.$store.commit('playEnd') 
        } else {
          this.$store.commit('playEnd',0)
        }
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
    overflow: hidden;
  }
  .play-wrap{
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
  .oper .order.loop {
    background-position: -5px -342px;
  }
  .oper .order.loop:hover{
    background-position: -35px -342px;
  }
  .oper .order.single {
    background-position: -68px -342px;
  }
  .oper .order.single:hover{
    background-position: -95px -342px;
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
  .voice{
    position: relative;
  }
  .change-voice{
    position: absolute;
    left: -7px;
    bottom: 37px;
    width: 32px;
    height: 115px;
    background-color: #292929;
  }
  .change-voice .slide-wrap{
    width: 4px;
    height: 90px;
    margin: 15px auto;
    background-color:#191919;
    border-radius: 2px;
    position: relative;
  }
  .slide-wrap .slide{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 100%;
    background-color: red;
    border-radius: 2px;
  }
  .change-voice .slide-wrap .slip{
    width: 18px;
    height: 20px;
    border-radius: 50%;
    position: absolute;
    top: -9px;
    right: -7px;
    background-image: url(~assets/images/iconall.png);
    background-position: -40px -280px;
    cursor: pointer;
  }
  .music-list{ 
    width: 100%;
    transition: all .5s;
    position: absolute;
    left: 0;
    bottom: 45px;
    height: 300px;
    border-radius: 5px 5px 0 0;
    background-color: #161616;
    overflow: hidden;
  }
  .slide-fade-enter-active {transition: all .2s;}
  .slide-fade-leave-active {transition: all .2s}
  .add-point{
    position: absolute;
    top: -51px;
    right: 0;
    clear: both;
    width: 152px;
    height: 49px;
    background-position: 0 -287px;
    text-align: center;
    color: #fff;
    line-height: 37px;
    background-image: url(~assets/images/playbar.png);
  }
</style>