<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .navBar{
    width: 100%;
    height: 30px;
    line-height: 30px;
    border-bottom: 2px solid #C10D0C;
  }
  .left,.center{
    float: left;
  }
  .right{
    float: right;
  }
</style>