<template>
  <div id="home">
    <NavList></NavList>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavList from 'src/views/home/childCpn/NavList'
  export default {
    name: 'Home',
    components: {
      NavList
    }
  }
</script>

<style scoped>
  .wrap{
    width: 1100px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>