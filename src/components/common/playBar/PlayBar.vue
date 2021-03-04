<template>
  <div id="play" @mouseout="mouseout" @mouseover="mouseover">
    <div class="show"></div>
    <div class="play-wrap">
      <div class="bg"></div>
      <div class="lock">
        <span :class=' { lockActove: isClick}' @click="lockClick"></span>
      </div>
      <div class="cnt" :class=' { active: isShow}'>
        <PlayBarItem></PlayBarItem>
      </div>
    </div>
  </div>
</template>

<script>
  import PlayBarItem from './PlayBarItem'
  export default {
    name: 'PlayBar',
    components: {
      PlayBarItem
    },
    data(){
      return {
        isShow: true,
        isClick: true
      }
    },
    methods: {
      mouseover(){
        this.isShow = true
      },
      mouseout(){
        if(!this.isClick){
          this.isShow = false;
        }
      },
      lockClick(){
        this.isClick = !this.isClick
      }
    }
  }
</script>

<style scoped>
  .show{
    width: 100%;
    height: 20px;
  }
  .lock{
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-image: url(~assets/images/playbar.png);
    background-position: 0 -380px;
    z-index: 99;
  }
  .lock span{
    display: block;
    width: 18px;
    height: 18px;
    margin: 5px auto 0;
    background-image: url(~assets/images/playbar.png);
    background-position: 73px -380px;
    cursor: pointer;
  }
  .lock span.lockActove{
    background-position: 52px -380px;
  }
  .lock span:hover{
    background-position: 73px -400px;
  }
  .lock span.lockActove:hover{
    background-position: 52px -400px;
  }
  .bg{
    height: 7px;
    width: 100%;
  }
  .cnt{
    width: 100%;
    transition: height .5s;
    height: 0;
    overflow: hidden;
  }
  .active{
    height: 46px;
  }
  .play-wrap{
    position: relative;
    width: 100%;
    background-image: url(~assets/images/playbar.png);
  }
</style>