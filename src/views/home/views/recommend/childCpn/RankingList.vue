<template>
  <div class="rankingList">
    <RankingListItem v-for="(item,index) in listData" :key="index" :listItem="item"></RankingListItem>
  </div>
</template>

<script>
  import RankingListItem from 'components/common/rankingList/RankingListItem.vue'
  export default {
    name: 'RankingList',
    components: {
      RankingListItem
    },
    props: {
      listData: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .rankingList{
    margin: 20px 0 37px;
    width: 100%;
    border: 1px solid #c3c3c3;
    background: #f5f5f5;
    box-sizing: border-box;
    overflow: hidden;
  }
</style>