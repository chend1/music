<template>
  <div class="play-list-item">
    <div class="set"></div>
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
  .set,.name,.aut,.time,.shore{
    float: left;
  }
  .set{
    width: 10px;
    height: 28px;
    padding-left: 10px;
  }
  .name{
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
</style>