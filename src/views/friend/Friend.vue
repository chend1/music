<template>
  <div id="friend">
    <div class="nocnt" v-if="!$store.state.token">
      <h2>登录网易云音乐</h2>
      <a @click="login" class="btn">立即登录</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Friend',
    methods: {
      login(){
        console.log(111);
      }
    }
  }
</script>

<style scoped>
  #friend{
    width: 1000px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    overflow: hidden;
  }
  .nocnt{
    width: 807px;
    height: 385px;
    margin: 104px auto 0;
    background-position: 0 0;
    background-image: url(~assets/images/notlogin.jpg);
  }
  .nocnt{
    text-indent: -9999px;
  }
  .btn{
    display: block;
    width: 160px;
    height: 48px;
    margin: 242px 0 0 535px;
    cursor: pointer;
  }
  .btn:hover{
    background-position: 0 1037px;
    text-indent: -9999px;
    background-image: url(~assets/images/notlogin.jpg);
  }
</style>