<template>
  <div id="pc-Swiper">
    <div class="swiper">
    <slot></slot>
    <div class="point">
      <div class="wrap-p">
        <ul>
          <li v-for=" (item,index) in bannerLists" :key="index" :class="{ active : index === curIndex }" @click='pClick(index)'>{{index+1}}</li>
        </ul>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Swiper',
  props: {
    bannerLists: {
      type: Array,
      default(){
        return []
      }
    },
    curIndex: {
      type: Number,
      default: 0
    }
  },
  data(){
    return {
    }
  },
  methods: {
    pClick(index){
      this.$emit('pClick',index)
    }
  }
}
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 285px;
  overflow: hidden;
  position: relative;
}
.point{
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}
.wrap-p{
  width: 1000px;
  margin: 0 auto;
}
.point ul{
  overflow: hidden;
  width: 730px;
  text-align: center;
}
.point ul li{
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  text-indent: -9999px;
  background-color: #e5dacf;
  margin: 0 8px;
  cursor: pointer;
}
.point ul li.active{
  background-color: #ba0c0c;
}
</style>