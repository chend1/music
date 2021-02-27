<template>
  <div class="playBarItem">
    <div class="wrap">
      <div class="left">
        <div class="back"></div>
        <div class="stop"></div>
        <div class="for"></div>
      </div>
      <div class="center">
        <div class="head">
          <img src="" alt="">
        </div>
        <div class="play">
          <div class="title"></div>
          <audio src=""></audio>
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
          <div class="lists">列表</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayBarItem',
    components: {

    },
    data(){
      return {

      }
    },
  }
</script>

<style scoped>
  .wrap{
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
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
  .left>div.stop:hover{
    background-position: -40px -206px;
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
  .right{
    width: 220px;
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
</style>