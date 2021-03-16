<template>
  <div class="play-list-item" :class="{ active : $store.getters.contrast === item.id}" @click="playListClick(item.id)">
    <div class="set">
      <div :class="{ point : $store.getters.contrast === item.id}"></div>
    </div>
    <div class="name">
      {{item.title}}
    </div>
    <div class="aut">
      {{item.artist}}
    </div>
    <div class="time">
      {{item.time}}
    </div>
    <div class="shore">
      分享
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FootPlayListItem',
    props: {
      item: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      playListClick(id){
        this.$store.commit('playListClick',id)
      }
    }
  }
</script>

<style scoped>
  .play-list-item{
    width: 100%;
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    color: white;
    cursor: pointer;
  }
  .play-list-item:hover{
    background-color: rgba(0,0,0,0.3);
  }
  .play-list-item.active{
    background-color: #0f0f0f;
  }
  .set,.name,.aut,.time,.shore{
    float: left;
  }
  .set{
    width: 10px;
    height: 28px;
    padding-left: 10px;
  }
  .name{
    padding-left: 10px;
    box-sizing: border-box;
    width: 290px;
  }
  .aut{
    width: 80px;
  }
  .time{
    width: 35px;
    padding-left: 10px;
  }
  .shore{
    padding-left: 50px;
  }
  .point{
    margin-top: 8px;
    width: 10px;
    height: 13px;
    background-image: url(~assets/images/playlist.png);
    background-position: -182px 0;
  }
</style>