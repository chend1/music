<template>
  <div class="rcoNavBar">
    <NavBar>
      <div class="title" slot="left">
        热门推荐
      </div>
      <div class="navList" slot="center">
        <ul>
          <li>华语</li>
          <li>华语</li>
          <li>华语</li>
          <li>华语</li>
          <li>华语</li>
        </ul>
      </div>
      <div class="more" slot="right">
        <a href="#">更多</a>
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
  .navList ul{
    overflow: hidden;
  }
  .navList ul li{
    float: left;
    padding: 0 10px;
    
  }
</style>