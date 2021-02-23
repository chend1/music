<template>
  <div class="swiper-wrap">
    <Swiper :bannerLists="recBanner" :curIndex="curIndex" @pClick="pClick">
      <SwiperItem v-for="(item,index) in recBanner" :key="index" :class="{ isShow : index === curIndex }">
        <div :style="{ backgroundImage: 'url('+item.imageUrl+'?imageView&blur=40x20)', backgroundSize: '6000px', backgroundPosition: 'center center'}">
          <div class="sw-wrap">
            <router-link :to="{ path: '/song/'+item.encodeId}" class="sw-list"> 
              <img :src="item.imageUrl" alt="" @mouseover='mouseover' @mouseout='mouseout' :class="{ imgShow : index === curIndex }">
            </router-link>
            <div class="download">

            </div>
          </div>
        </div>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import { Swiper,SwiperItem} from 'components/common/swiper'

  //导入请求函数
  import {getBanner} from 'network/recommend'
  export default {
    name: 'RcoSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    data(){
      return {
        //1.获取banner
        recBanner: [],
        //图片展示下标
        curIndex: 0,
        timer: null
      }
    },
    created(){
      getBanner(0).then( (res) => {
        this.recBanner = res.data.banners
      })
    },
    methods: {
      mouseover(){
        clearInterval(this.timer)
      },
      mouseout(){
        this.timer = setInterval(() => {
          this.curIndex++;
          if(this.curIndex >= this.recBanner.length){
            this.curIndex = 0;
          }
        }, 3000);;
      },
      pClick(num){
        this.curIndex = num
      }
    },
    mounted(){
      this.timer = setInterval(() => {
        this.curIndex++;
        if(this.curIndex >= this.recBanner.length){
          this.curIndex = 0;
        }
      }, 3000);
    }
  }
</script>

<style scoped>
  .sw-wrap{
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
  }
  .sw-list{
    float: left;
    display: block;
    height: 285px;
  }
  .sw-list img{
    display: block;
    width: 730px;
    height: 100%;
  }
  .download{
    width: 254px;
    height: 285px;
    background-color: #fff;
    float: left;
  }
  @keyframes excessive
  {
  from {opacity: 1;}
  to {opacity: .3;}
  }
  .isShow{
    display: block;
  }
  .imgShow{
    animation-delay: 3s;
    animation: excessive 3s;
  }
</style>