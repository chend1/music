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
        <RankingList :listData="songListAll"></RankingList>
      </div>
      <!-- 侧边栏 -->
      <div class="aside">
        <AsideTop></AsideTop>
      </div>
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
  import RankingList from './childCpn/RankingList'
  // 侧边栏
  import AsideTop from './childCpn/aside/AsideTop'
  //导入请求函数
  import {getRcoSong,getNewDisc,getList,getRankList} from 'network/recommend'
  export default {
    name: 'Recommend',
    components: {
      RcoSwiper,
      RcoNavBar,
      RcoSong,
      NewBar,
      DiscWrap,
      RankingBar,
      RankingList,
      AsideTop
    },
    data(){
      return {
        // 推荐的歌曲
        rcoSong: [],
        // 蝶片数据
        discData: [],
        // 榜单数据
        songList1: {},
        songList2: {},
        songList3: {},
      }
    },
    created(){
      getRcoSong(8).then( res => {
        this.rcoSong = res.data.result
      })
      // 蝶片数据
      getNewDisc().then( res => {
        this.discData = res.data.albums.slice(0,10)
      })
      // 榜单数据
      getRankList(19723756).then( res => {
        this.songList1 = res.data.playlist;
        this.songList1.tracks = this.songList1.tracks.slice(0,10)
        console.log(res.data.playlist);
      })
      getRankList(3779629).then( res => {
        this.songList2 = res.data.playlist;
        this.songList2.tracks = this.songList2.tracks.slice(0,10)
      })
      getRankList(2884035).then( res => {
        this.songList3 = res.data.playlist;
        this.songList3.tracks = this.songList3.tracks.slice(0,10)
      })
    },
    computed: {
      songListAll(){
        return [this.songList1,this.songList2,this.songList3]
      }
    }
  }
</script>

<style scoped>
  .wrap{
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
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
    border-right: 1px solid #d3d3d3;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 16px;
    bottom: 0;
  }
</style>