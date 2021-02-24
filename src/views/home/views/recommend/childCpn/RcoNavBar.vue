<template>
  <div class="rcoNavBar">
    <NavBar>
      <div class="title" slot="left">
        热门推荐
      </div>
      <div class="navList" slot="center">
        <ul>
          <li>
            <router-link to="/home/song/?cat=华语">
              华语
            </router-link>
          </li>
          <li>
            <router-link to="/home/song/?cat=流行">
              流行
            </router-link>
          </li>
          <li>
            <router-link to="/home/song/?cat=摇滚">
              摇滚
            </router-link>
          </li>
          <li>
            <router-link to="/home/song/?cat=民谣">
              民谣
            </router-link>
          </li>
          <li>
            <router-link to="/home/song/?cat=电子">
              电子
            </router-link>
          </li>
        </ul>
      </div>
      <div class="more" slot="right">
        <router-link to="/home/song">更多</router-link>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  export default {
    name: 'RcoNavBar',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .title{
    color: #333;
    font-size: 20px;
    padding-left: 35px;
    background-image: url(~assets/images/index.png);
    background-position: -225px -156px;
  }
  .navList{
    margin-left: 10px;
  }
  .navList ul{
    overflow: hidden;
  }
  .navList ul li{
    float: left;
  }
  .navList ul li a{
    padding: 0 10px;
    border-right: 1px solid #ccc;
    color: #666;
  }
  .more{
    padding-right: 30px;
    background-image: url(~assets/images/index.png);
    background-position: 30px -231px;
  }
  .more a{
    color: #666;
  }
</style>