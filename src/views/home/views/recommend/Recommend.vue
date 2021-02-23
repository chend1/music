<template>
  <div class="recommend">
    <RcoSwiper></RcoSwiper>
    <div class="wrap">
      <div class="song">
        <RcoNavBar></RcoNavBar>
      </div>
      <div class="aside">222</div>
    </div>
  </div>
</template>

<script>
  import RcoSwiper from './childCpn/RcoSwiper'
  import RcoNavBar from './childCpn/RcoNavBar'
  export default {
    name: 'Recommend',
    components: {
      RcoSwiper,
      RcoNavBar
    }
  }
</script>

<style scoped>
  .wrap{
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  .song{
    width: 730px;
    float: left;
  }
  .aside{
    width: 254px;
    float: left;
  }
</style>