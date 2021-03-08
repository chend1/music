<template>
  <div class="title-wrap">
    <div class="content">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="sum">
        <slot name="cnt"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Title',
  }
</script>

<style scoped>
  .title-wrap{
    margin-top: 50px;
    width: 100%;
    height: 35px;
    line-height: 35px;
    border-bottom: 2px solid #c20c0c;
  }
  .content{
    overflow: hidden;
  }
  .title,.sum{
    float: left;
  }
  .title{
    font-size: 20px;
  }
  .sum{
    padding-left: 20px;
  }
</style>