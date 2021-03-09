<template>
  <div class="ranking-aside">
    <div class="aside-wrap">
      <h2 class="title">云音乐特色榜</h2>
      <RankingAsideItem v-for="(item,index) in featureList" :key="item.id" :musicItem="item"></RankingAsideItem>
      <h2 class="media-title">全球媒体榜</h2>
      <RankingAsideItem v-for="(item,index) in mediaList" :key="item.id" :musicItem="item"></RankingAsideItem>
    </div>
  </div>
</template>

<script>
  import RankingAsideItem from './RankingAsideItem.vue'
  export default {
    name: 'RankingAside',
    props: {
      featureList: {
        type: Array,
        default(){
          return {}
        }
      },
      mediaList: {
        type: Array,
        default(){
          return {}
        }
      }
    },
    components: {
      RankingAsideItem
    }
  }
</script>

<style scoped>
  .aside-wrap{
    margin-top: 40px;
  }
  h2.title {
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
  }
  h2.media-title{
    padding: 0 10px 12px 15px;
    font-size: 14px;
    color: #000;
    margin-top: 20px;
  }
</style>