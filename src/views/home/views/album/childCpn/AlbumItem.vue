<template>
  <div class="album-item">
    <div class="discItem" v-for="(item,index) in discLists" :key="index">
      <div class="img">
        <img :src="item.blurPicUrl + '?param=130y130'" alt="">
        <router-link :to=" { path: '/home/album/'+ item.id} "></router-link>
      </div>
      <div class="name">
        <router-link :to=" { path: '/home/album/'+ item.id} ">
          {{item.name}}
        </router-link>
      </div>
      <div class="tit">
        <router-link :to=" { path: '/home/singer/'+ item.artist.id} ">
          {{item.artist.name}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlbumItem',
    props: {
      discLists: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.discItem{
  width: 20%;
  box-sizing: border-box;
  float: left;
  height: 180px;
  margin-top: 17.5px;
  padding: 0 10px;
}
.img img{
  display: block;
  width: 130px;
}
.name,.tit{
  white-space: nowrap;
  width: 100%;
  height: 19px;
  padding-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
}
.name a{
  color: #000;
}
.tit a{
  color: #666;
}
.img{
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
    background-position: 0 -845px;
  }
</style>