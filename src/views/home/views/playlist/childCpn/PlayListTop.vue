<template>
  <div class="play-list-top">
    <div class="playlist-head">
      <div class="title">
        全部
      </div>
      <div class="sort">
        <span>选择分类</span>
        <span></span>
      </div>
      <div class="hot">
        热门
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PlayListTop'
  }
</script>
<style scoped>
  .playlist-head{
    width: 100%;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .title,.sort{
    float: left;
  }
  .hot{
    float: right;
    height: 30px;
    line-height: 28px;
    padding: 0 10px;
    border: 1px solid #a80909;
    color: #fff;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: #d20c0d;
  }
  .title{
    font-size: 24px;
    color: #333;
  }
  .sort{
    width: 90px;
    height: 30px;
    box-sizing: border-box;
    line-height: 30px;
    text-align: center;
    color: #0c73c2;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    margin-left: 15px;
    background-color: #fbfbfb;
    cursor: pointer;
  }
  .sort>span:last-child{
    display: inline-block;
    width: 8px;
    height: 5px;
    background-image: url(~assets/images/icon.png);
    background-position: -70px -543px;
    margin-left: 5px;
  }
  .sort:hover{
    background-color: #fff;
  }
</style>