<template>
  <div id="download">
    <div class="cnt">
      <div class="left">
        <div class="pc">
          <h3>在电脑上听</h3>
          <img src="~assets/images/pc.png" alt="">
          <div class="loadPc">下载电脑端</div>
        </div>
      </div>
      <div class="right">
        <div class="po">
          <h3>在手机上听</h3>
          <img src="~assets/images/po.png" alt="">
          <div class="loadPo">
            <i></i>下载手机端
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Download',
    methods: {
      download(){
        console.log('下载');
      }
    }
  }
</script>

<style scoped>
  #download{
    width: 100%;
  }
  .cnt{
    width: 1000px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    overflow: hidden;
  }
  .left{
    width: 60%;
    float: left;
  }
  .right{
    float: left;
    width: 40%;
  }
  h3{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 22px;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .pc{
    width: 460px;
    margin: 0 auto;
  }
  .po{
    width: 250px;
    margin: 0 auto;
  }
  .pc img,.po img{
    width: 100%;
  }
  .loadPc,.loadPo{
    margin: 20px auto;
    width: 250px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #D10000;
    font-size: 22px;
    border: 1px solid #d83000;
    border-radius: 10px;
    cursor: pointer;
  }
  .loadPo i{
    display: inline-block;
    width: 21px;
    height: 21px;
    margin-right: 3px;
    background: url(https://s5.music.126.net/static_public/5d2e7e0f4c302eee822efc3d_5d2e7e0f4c302eee822efc3f/icon_ncode.28be3ef7e9730069682ff0d0ca17e942.png) no-repeat center;
    background-size: contain;
    vertical-align: -3px;
  }
  .loadPc:hover,.loadPo:hover{
    border: 1px solid #d8d400;
    background-color: #d83000;
    color: white;
  }
</style>