<template>
  <div class="single wrap">
    <div class="left">
      <div class="top">
        <div class="pic"></div>
        <div class="content"></div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  export default {
    name: 'Single',

  }
</script>

<style scoped>
.single{
  height: 1000px;
}
.left{
  width: 710px;
  float: left;
  height: 100px;
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #e1e1e1;
  box-sizing: border-box;
}
.right{
  float: left;
  width: 270px;
  height: 100px;
  box-sizing: border-box;
  border-right: 1px solid #e1e1e1;
}
</style>