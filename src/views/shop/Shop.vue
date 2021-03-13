<template>
  <div id="shop">
    <a href="https://music.163.com/store/product" target="_bank">云音乐商城</a>
  </div>
</template>

<script>
  export default {
    name: 'Shop'
  }
</script>

<style scoped>
  #shop{
    width: 1000px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    overflow: hidden;
  }
  #shop a{
    display: block;
    width: 160px;
    height: 40px;
    line-height: 40px;
    margin: 100px auto;
    border: 1px solid #333;
    text-align: center;
    font-size: 22px;
    color: #000;
    border-radius: 10px;
  }
</style>