<template>
  <div class="ranking-aside-item">
    <router-link :to="{ path: '/home/ranking/' + musicItem.id }">
      <div class="aside-item">
        <div class="aside-pic">
          <img :src="musicItem.coverImgUrl" alt="">
        </div>
        <div class="aside-cnt">
          <div class="name">
            {{musicItem.name}}
          </div>
          <div class="desc">
            {{musicItem.updateFrequency}}
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'RankingAsideItem',
    props: {
      musicItem: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .ranking-aside-item{
    position: relative;
  }
  .aside-item{
    padding: 10px 0 10px 20px;
  }
  .aside-item{
    overflow: hidden;
    position: relative;
  }
  .aside-item a{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .ranking-aside-item a.active .aside-item{
    background: #e6e6e6;
  }
  .ranking-aside-item a .aside-item:hover{
    background: #f4f2f2
  }
  .ranking-aside-item a.active .aside-item:hover{
    background: #e6e6e6;
  }
  .aside-pic{
    width: 40px;
    height: 40px;
    float: left;
  }
  .aside-pic img{
    width: 40px;
    height: 40px;
  }
  .aside-cnt{
    float: left;
    height: 40px;
    padding-left: 10px;
  }
  .aside-cnt .name{
    width: 150px;
    overflow: hidden;
    margin-bottom: 4px;
    color: #000;
  }
  .aside-cnt .desc{
    width: 169px;
    color: #999;
  }
</style>