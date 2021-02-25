<template>
  <div class="recommend">
    <RcoSwiper></RcoSwiper>
    <div class="wrap">
      <div class="song">
        <!-- 推荐列表 -->
        <RcoNavBar></RcoNavBar>
        <RcoSong :rcoSong="rcoSong"></RcoSong>
        <!-- 新碟上架 -->
        <NewBar></NewBar>
        <DiscWrap :discLists="discData"></DiscWrap>
        <!-- 榜单 -->
        <RankingBar></RankingBar>
      </div>
      <div class="aside">222</div>
    </div>
  </div>
</template>

<script>
  import RcoSwiper from './childCpn/RcoSwiper'
  import RcoNavBar from './childCpn/RcoNavBar'
  import RcoSong from './childCpn/RcoSong'
  import NewBar from './childCpn/NewBar'
  import DiscWrap from './childCpn/DiscWrap'
  import RankingBar from './childCpn/RankingBar'
  //导入请求函数
  import {getRcoSong,getNewDisc} from 'network/recommend'
  export default {
    name: 'Recommend',
    components: {
      RcoSwiper,
      RcoNavBar,
      RcoSong,
      NewBar,
      DiscWrap,
      RankingBar
    },
    data(){
      return {
        // 推荐的歌曲
        rcoSong: [],
        // 蝶片数据
        discData: []
      }
    },
    created(){
      getRcoSong(8).then( res => {
        this.rcoSong = res.data.result
      })
      // 蝶片数据
      getNewDisc().then( res => {
        this.discData = res.data.albums.slice(0,10)
        console.log(this.discData);
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