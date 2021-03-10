<template>
  <div class="ranking-detail-item"  v-if="Object.keys(singerListItem).length > 0" :class=" { top : idx<3 ? true : false} ">
    <div class="rank">
      <div class="index">
        {{idx+1}}
      </div>
      <div class="rank-change"></div>
    </div>
    <div class="list-name-wrap">
      <div class="pic" v-if="idx<3 ? true : false">
        <img :src="singerListItem.al.picUrl +   '?param=50y50' " alt="">
      </div>
      <div class="list-play">
        <span @click="playClick(singerListItem.id)"></span>
      </div>
      <div class="list-name">
        <span>
          {{singerListItem.name}}
        </span>
        <span v-if="singerListItem.alia[0]" class="dsc">
          - {{singerListItem.alia[0]}}
        </span>
      </div>
    </div>
    <div class="song-time">时长</div>
    <div class="song-singer">
      <span v-for="(item,index) in singerListItem.ar" :key="index">
        {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RankingDetailItem',
    props: {
      singerListItem: {
        type: Object,
        default(){
          return {}
        }
      },
      idx: {
        type: Number,
        default: 0
      }
    },
    methods: {
      playClick(id){
        console.log(id);
        this.$store.dispatch('addPlayList',id)
      }
    }
  }
</script>

<style scoped>
  .ranking-detail-item{
    width: 100%;
    overflow: hidden;
  }
  .rank .index{
    width: 25px;
    text-align: center;
    margin-left: 10px;
    color: #999;
  }
  .ranking-detail-item.top .rank,.ranking-detail-item.top .list-name-wrap,.ranking-detail-item.top .song-time,.ranking-detail-item.top .song-singer{
    height: 70px;
    line-height: 70px;
  }
  .ranking-detail-item.top .list-name-wrap .list-play{
    line-height: 78px;
  }
  .ranking-detail-item.top .list-name-wrap .pic{
    margin-top: 10px;
    margin-right: 8px;
  }
  .ranking-detail-item .rank,.list-name-wrap,.song-time,.song-singer{
    float: left;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
  }
  .ranking-detail-item .rank{
    width: 15%;
  }
  .list-name-wrap{
    width: 40%;
  }
  .list-name-wrap .list-play,.list-name-wrap .list-name,.list-name-wrap .pic{
    float: left;
  }
  .list-name-wrap .list-play{
    width: 23px;
  }
  .list-name-wrap .list-name{
    width: 180px;
    height: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .song-time{
    width: 19%;
    padding-left: 10px;
  }
  .song-singer{
    width: 26%;
    padding-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ranking-detail-item .rank .index,.rank-change{
    float: left;
  }
  .list-name span.dsc{
    color: #aeaeae;
  }
  .list-play>span{
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-top: 3px;
    background-image: url(~assets/images/table.png);
    background-position: 0 -103px;
  }
  .ranking-detail-item .list-name-wrap .list-play{
    line-height: 38px;
  }
  .ranking-detail-item .list-name-wrap .list-play>span{
    cursor: pointer;
  }
  .ranking-detail-item .list-name-wrap .list-play>span:hover{
    background-position: 0 -128px;
  }
  .song-singer span{
    padding: 0 3px 0;
    border-right: 1px solid #333;
  }
  .song-singer span:last-child{
    border-right: none;
  }
</style>