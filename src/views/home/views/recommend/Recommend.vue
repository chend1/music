<template>
  <div class="recommend">
    <RcoSwiper></RcoSwiper>
    <div class="wrap">
      <div class="song">
        <RcoNavBar></RcoNavBar>
        <RcoSong :rcoSong="rcoSong"></RcoSong>
      </div>
      <div class="aside">222</div>
    </div>
  </div>
</template>

<script>
  import RcoSwiper from './childCpn/RcoSwiper'
  import RcoNavBar from './childCpn/RcoNavBar'
  import RcoSong from './childCpn/RcoSong'

  //导入请求函数
  import {getRcoSong} from 'network/recommend'
  export default {
    name: 'Recommend',
    components: {
      RcoSwiper,
      RcoNavBar,
      RcoSong
    },
    data(){
      return {
        // 推荐的歌曲
        rcoSong: []
      }
    },
    created(){
      getRcoSong(8).then( res => {
        this.rcoSong = res.data.result
        console.log(this.rcoSong);
      })
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
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    box-sizing: border-box;
    padding: 15px 10px 0;
  }
  .aside{
    width: 254px;
    float: left;
  }
</style>