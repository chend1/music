<template>
  <div class="rankingListItem">
    <div class="top">
      <div class="img">
        <img :src="listItem.coverImgUrl" alt="">
        <router-link :to=" { path: '/home/ranking/'+ listItem.id} "></router-link>
      </div>
      <div class="title-wrap">
        <div class="title">
          <router-link :to=" { path: '/home/ranking/'+ listItem.id} ">
            <h3>{{listItem.name}}</h3>
          </router-link>
        </div>
        <div class="play-wrap">
          <div class="play"></div>
          <div class="col"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item,index) in listItem.tracks" :key="item.id" 
            @mouseover="mouseover(index)" :class="{ active: index === isActive }" 
            @mouseout="mouseout">
          <div class="idx">
            {{index+1}}
          </div>
          <div class="name">
            <router-link :to=" { path: '/single/'+ item.id} ">
              {{item.name}}
            </router-link>
          </div>
          <div class="play">
            <div class="playItem" @click="playItemClick(item.id)"></div>
            <div class="add"></div>
            <div class="col"></div>
          </div>
        </li>
        <li>
          <router-link :to=" { path: '/home/ranking/'+ listItem.id} ">
            查看全部>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RankingListItem',
    props: {
      listItem: {
        type: Object,
        default(){
          return {}
        }
      } 
    },
    data(){
      return {
        isActive: -1
      }
    },
    methods: {
      mouseover(index){
        this.isActive = index
      },
      mouseout(){
        this.isActive = -1
      },
      playItemClick(id){
        this.$store.dispatch('addPlayList',id)
      }
    }
  }
</script>

<style scoped>
  .rankingListItem{
    width: 33.3%;
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #c3c3c3;
  }
  .rankingListItem:last-child{
    border-right: none;
  }
  .top{
    width: 100%;
    overflow: hidden;
  }
  .img{
    width: 35%;
    float: left;
    margin: 20px 10px 15px 20px;
    position: relative;
  }
  .img a{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(~assets/images/coverall.png);
    background-position: -144px -56px;
  }
  .img img{
    width: 100%;
  }
  .title-wrap{
    float: left;
    margin-top: 20px;
  }
  .title-wrap .title{
    margin-top: 8px;
  }
  .title-wrap .title a{
    color: #333;
    font-size: 14px;
  }
  .play-wrap{
    overflow: hidden;
    margin-top: 10px;
  }
  .play-wrap .play,.play-wrap .col{
    float: left;
    width: 28px;
    height: 28px;
    background-image: url(~assets/images/index.png);
    cursor: pointer;
  }
  .play-wrap .play{
    background-position: -267px -205px;
  }
  .play-wrap .play:hover{
    background-position: -267px -235px;
  }
  .play-wrap .col{
    background-position: -295px -205px;
  }
  .play-wrap .col:hover{
    background-position: -295px -235px;
  }
  .content ul li{
    overflow: hidden;
    background-color: #e8e8e8;
    position: relative;
  }
  .content ul li .play{
    width: 82px;
    height: 32px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #e8e8e8;
    display: none;
  }
  .content ul li.active .play{
    display: block;
  }
  .content ul li:nth-child(2n) .play{
    background-color: #f4f4f4;
  }
  .content .playItem,.content .col,.content .add{
    width: 22px;
    height: 22px;
    margin-top: 5px;
    float: left;
    cursor: pointer;
  }
  .content .playItem{
    background-image: url(~assets/images/index.png);
    background-position: -264px -265px;
  }
  .content .playItem:hover{
    background-position: -264px -285px;
  }
  .content .add{
    background-image: url(~assets/images/icon.png);
    background-position: 4px -696px;
  }
  .content .add:hover{
    background-position: -18px -696px;
  }
  .content .col{
    background-image: url(~assets/images/index.png);
    background-position: -295px -266px;
  }
  .content .col:hover{
    background-position: -295px -286px;
  }
  .content ul li:nth-child(2n){
    background-color: #f4f4f4;
  }
  .content ul li>div{
    float: left;
    height: 32px;
    line-height: 32px;
  }
  .content ul li>div.idx{
    margin-left: 20px;
    width: 35px;
    text-align: center;
    color: #c10d0c;
    font-size: 16px;
  }
  .content ul li>a{
    display: block;
    line-height: 32px;
    text-align: right;
    padding-right: 30px;
    float: right;
    color: #000;
  }
  .content ul li:nth-child(n+4)>div.idx{
    color: #666;
  }
  .content ul li>div.name{
    width: 70%;
  }
  .content ul li>div.name a{
    color: #000;
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>