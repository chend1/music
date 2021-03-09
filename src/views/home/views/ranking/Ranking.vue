<template>
  <div class="ranking">
    <div class="aside">
      <RankingAside :featureList="featureList" :mediaList="mediaList"></RankingAside>
    </div>
    <div class="content">
      <router-view :key="key"></router-view>
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
      })
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + +new Date(): this.$route + +new Date()
      }
    }
  }
</script>

<style scoped>
  .ranking{
    width: 980px;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
  }
  .aside{
    width: 240px;
    float: left;
    border-right: 1px solid #d3d3d3;
    box-sizing: border-box;
  }
  .content{
    width: 738px;
    float: left;
  }
</style>