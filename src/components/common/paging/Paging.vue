<template>
  <div class="paging">
    <div class="fro">
      上一页
    </div>
    <ul>
      <li v-for="(item,index) in totalCount" :key="index" :class="{ 'active': index === offset-1 }" @click="pagingClick(index+1)">
        {{item}}
      </li>
      <!-- <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <span class="eil">...</span>
      <li>{{totalCount}}</li> -->
    </ul>
    <div class="back">
      下一页
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Paging',
    props: {
      // 总条数
      total: {
        type: Number,
        default: 0
      },
      // 每页显示条数
      limit: { 
        type: Number,
        default: 50
      },
      // 当前第几页数据
      offset: {
        type: Number,
        default: 1
      }
    },
    data(){
      return {
        
      }
    },
    computed: {
      totalCount(){
        return Math.ceil(this.total/this.limit)
      },
      list(){

      }
    },
    methods: {
      pagingClick(offset){
        this.$emit('pagingClick',offset)
      }
    }
  }
</script>

<style scoped>
  .paging{
    width: 460px;
    margin: 0 auto;
    overflow: hidden;
  }
  .fro,ul,ul li{
    float: left;
  }
  .fro,.back{
    width: 70px;
    height: 26px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 2px;
    background-image: url(~assets/images/button.png);
    line-height: 24px;
    box-sizing: border-box;
  }
  .fro{
    background-position: 0 -620px;
  }
  .back{
    float: right;
    background-position: -75px -560px;
  }
  ul li{
    width: 24px;
    height: 26px;
    line-height: 24px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin: 0 3px;
    cursor: pointer;
  }
  .eil{
    float: left;
    display: block;
    width: 19px;
    text-align: center;
  }
  ul li.active{
    border-color: #A2161B;
    background-color: #d30c13;
    color: white;
  }
</style>