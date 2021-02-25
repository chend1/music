<template>
  <div class="newBar">
    <NavBar>
      <div class="title" slot="left">
        新碟上架
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
    name: 'NewBar',
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
  .more{
    padding-right: 30px;
    background-image: url(~assets/images/index.png);
    background-position: 30px -231px;
  }
  .more a{
    color: #666;
  }
</style>