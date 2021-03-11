<template>
  <div class="play-list-item">
    <div class="itemList">
      <div class="img">
        <router-link :to="{ path: '/home/playlist/'+songSheetItem.id}">
          <img :src="songSheetItem.coverImgUrl + '?param=140y140'" alt="">
          <span></span>
        </router-link>
        <div class="bottom">
          <div class="count">
            {{songSheetItem.playCount | getNum}}
          </div>
          <div class="play">

          </div>
        </div>
      </div>
      <div class="name">
        <router-link :to="{ path: '/home/playlist/'+songSheetItem.id}">
          <p>{{songSheetItem.name}}</p>
        </router-link>
        <div class="singer">
          <span>by</span> 
          <router-link :to="{ path: '/user/'+songSheetItem.creator.userId}">
            <p>{{songSheetItem.creator.nickname}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlayListItem',
    props: {
      songSheetItem:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      getNum(num){
        if(num/10000 >= 10){
          num= num/10000
          return num.toFixed(0) + '万'
        } else {
          return num
        }
      }
    }
  }
</script>

<style scoped>
.play-list-item{
  width: 140px;
  margin: 0 21px;
  float: left;
  margin-bottom: 30px;
}
.itemList{
  width: 100%;
}
.itemList .img{
  position: relative;
}
.img>a{
  position: relative;
  display: block;
}
.img>a span{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(~assets/images/coverall.png);
    background-position: 0 0;
  }
.bottom{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  height: 27px;
  line-height: 27px;
  background-image: url(~assets/images/coverall.png);
  background-position: 0 -537px;
  overflow: hidden;
}
.count{
  float: left;
}
.play{
  width: 16px;
  height: 17px;
  float: right;
  margin-top: 5px;
  margin-right: 10px;
  background-image: url(~assets/images/iconall.png);
  background-position: 0 0;
  cursor: pointer;
}
.play:hover{
  background-position: 0 -60px;
}
.itemList .img{
  width: 140px;
  height: 140px;
}
.name a{
  color: #000;
  font-size: 14px;
}
.name>a p{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 20px;
  margin: 5px 0 0;
}
.count{
  padding-left: 30px;
  position: relative;
  color: #ccc;
}
.count::after{
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 10px;
  width: 20px;
  height: 27px;
  background-image: url(~assets/images/iconall.png);
  overflow: hidden;
  background-position: 0 -16px;
}
.singer span,.singer a{
  display: block;
  float: left;
}
.singer span{
  width: 15%;
}
.singer a{
  padding-left: 5px;
  width: 85%;
  box-sizing: border-box;
}
.singer a p{
  color: #666;
  font-size: 12px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 20px;
}
</style>