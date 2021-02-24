<template>
  <div class="rcoSong">
    <SongBar>
      <SongItem v-for="(item,index) in rcoSong" :key="index" class="songItem">
        <div class="itemList">
          <div class="img">
            <router-link :to="{ path: '/single/'+item.id}">
              <img :src="item.picUrl" alt="">
            </router-link>
            <div class="bottom">
              <div class="count">
                {{item.playCount | getNum}}
              </div>
              <div class="play"></div>
            </div>
          </div>
          <div class="name">
            <router-link :to="{ path: '/single/'+item.id}">
              <p>{{item.name}}</p>
            </router-link>
          </div>
        </div>
      </SongItem>
    </SongBar>
  </div>
</template>

<script>
  import { SongBar,SongItem} from 'components/common/songBar'
  export default {
    name: 'RcoSong',
    components: {
      SongBar,
      SongItem
    },
    props: {
      rcoSong: {
        type: Array,
        default(){
          return []
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
.songItem{
  width: 23%;
  box-sizing: border-box;
  float: left;
  padding: 20px 10px;
  margin: 0 1%;
}
.itemList{
  width: 100%;
}
.itemList .img{
  position: relative;
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
}
.itemList .img img{
  width: 100%;
}
.name a{
  color: #000;
  font-size: 14px;
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
</style>