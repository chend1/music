<template>
  <div class="ranking">
    <div class="aside">
      <RankingAside :featureList="featureList" :mediaList="mediaList"></RankingAside>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {getRanking} from 'network/ranking'
  import RankingAside from './aside/RankingAside.vue'
  export default {
    name: 'Ranking',
    components: {
      RankingAside
    },
    data(){
      return {
        // 特色榜
        featureList: [],
        // 媒体榜
        mediaList: []
      }
    },
    created(){
      getRanking().then( res => {
        this.featureList = res.data.list.slice(0,4);
        this.mediaList = res.data.list.slice(4,);
        console.log(this.featureList);
        console.log(this.mediaList);
      })
    }
  }
</script>

<style scoped>
  .ranking{
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
  }
  .aside{
    width: 240px;
    float: left;
  }
  .content{
    width: 740px;
    float: left;
  }
</style>