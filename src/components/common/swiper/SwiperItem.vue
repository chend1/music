<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SwiperItem'
}
</script>

<style scoped>

.slide {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
}

.slide img{
  width: 100%
}
</style>