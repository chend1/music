<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from 'components/header/Header'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
  @import url('assets/css/base.css');
</style>
