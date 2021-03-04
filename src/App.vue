<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from 'components/header/Header'
import Footer from 'components/footer/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  @import url('assets/css/base.css');
  .wrap {
    width: 1100px;
    margin: 0 auto;
    overflow: hidden;
  }
</style>
