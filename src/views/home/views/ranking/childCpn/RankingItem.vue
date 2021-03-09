<template>
  <div class="ranking-itme">
    <RankingDetail :playlist="playList"></RankingDetail>
  </div>
</template>

<script>
  import RankingDetail from './RankingDetail.vue'
  import {getRankDetail,PlayList} from 'network/ranking'
  export default {
    name: 'RankingItem',
    data(){
      return {
        rankId: this.$route.params.topid,
        playList: {}
      }
    },
    components: {
      RankingDetail
    },
    created(){
      getRankDetail(this.rankId).then( res => {
        let playlist = res.data.playlist;
        this.playList = new PlayList(playlist.id,playlist.coverImgUrl,playlist.name,playlist.updateTime,playlist.tracks,playlist.playCount);
        console.log(res.data.playlist);
      })
    }
  }
</script>

<style scoped>

</style>