<template>
  <div class="navlist">
    <ul>
      <li>
        <router-link to="/home/recommend">
          <span>推荐</span>
        </router-link>
      </li>
      <li>
        <router-link to="/home/ranking">
          <span>排行榜</span>
        </router-link>
      </li>
      <li>
        <router-link to="/home/playlist">
          <span>歌单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/home/radio">
          <span>主播电台</span>
        </router-link>
      </li>
      <li>
        <router-link to="/home/singer">
          <span>歌手</span>
        </router-link>
      </li>
      <li>
        <router-link to="/home/album">
          <span>新碟上架</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NavList'
  }
</script>

<style scoped>
  .navlist{
    height: 30px;
    line-height: 25px;
    background-color: #c20c0c;
  }
  .navlist ul{
    overflow: hidden;
    width: 750px;
    margin: 0 auto;
    padding-left: 25px;
  }
  .navlist ul li{
    float: left;
  }
  .navlist ul li a{
    color: #fff;
    padding: 0 20px;
  }
  .navlist ul li a:hover{
    text-decoration: none;
  }
  .navlist ul li a span{
    padding: 3px 10px;
    border-radius: 10px;
  }
  .navlist ul li a.active span{
    background-color: #9B0909;
  }
</style>