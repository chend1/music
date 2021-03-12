<template>
  <div class="discList">
    <div class="itemWrap">
      <Carousel :navigationEnabled="true" :loop="true" :paginationEnabled="false" class="carousel" :perPage="1" :speed='1500'>
        <Slide class="slide">
          <div class="discItem" v-for="(item,index) in discLists1" :key="index">
            <div class="img">
              <img :src="item.blurPicUrl" alt="">
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
        </Slide>
        <Slide class="slide">
          <div class="discItem" v-for="(item,index) in discLists2" :key="index">
            <div class="img">
              <img :src="item.blurPicUrl" alt="">
            </div>
            <div class="name">
              <router-link :to=" { path: '/new/'+ item.id} ">
                {{item.name}}
              </router-link>
            </div>
            <div class="tit">
              <router-link :to=" { path: '/singer/'+ item.artist.id} ">
                {{item.artist.name}}
              </router-link>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'DiscList',
    props: {
      discLists: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        
      }
    },
    components: {
      Carousel,
      Slide
    },
    computed: {
      discLists1(){
        return this.discLists.slice(0,5)
      },
      discLists2(){
        return this.discLists.slice(5,10)
      }
    }
  }
</script>

<style scoped>
  .carousel{
    height: 185px;
    background: #f5f5f5;
  }
.discList{
  margin: 20px 0 37px;
  width: 100%;
  height: 185px;
  border: 1px solid #fff;
  background: #f5f5f5;
  box-sizing: border-box;
}
.itemWrap{
  width: 94%;
  margin: 0 auto;
  background-color: #fff;
  height: 185px;
  /* overflow: hidden; */
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
    background-position: -4px -570px;
  }
.slide{
  width: 100%;
}
.discItem{
  width: 20%;
  box-sizing: border-box;
  float: left;
  height: 150px;
  margin-top: 17.5px;
  padding: 0 10px;
}
.img img{
  display: block;
  width: 100px;
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
</style>