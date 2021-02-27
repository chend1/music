<template>
  <div class="anchor">
    <div class="anchor-top">
      <h3>
        <span>热门主播</span>
      </h3>
    </div>
    <div class="anchor-list">
      <ul>
        <li v-for="(item,index) in anchorList" :key="index">
          <router-link :to="{ path: '/user/' + item.id}">
            <div class="img">
              <img :src="item.avatarUrl" alt="">
            </div>
            <div class="user">
              <div class="name">
                <h4>{{item.nickName}}</h4>
              </div>
              <div class="describe">热门主播</div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
</div>
</template>

<script>
  export default {
    name: 'Anchor',
    components: {
      
    },
    props: {
      anchorList: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.anchor-top{
    margin: 15px 15px 0;
    border-bottom: 1px solid #ccc;
    height: 40px;
    overflow: hidden;
  }
  .anchor-top h3{
    overflow: hidden;
    margin-top: 15px;
  }
  .anchor-top h3 span{
    display: block;
    float: left;
    color: #333;
  }
  .anchor-list{
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.anchor-list ul{
  margin-top: 15px;
}
.anchor-list ul li{
  width: 100%;
  height: 62px;
}
.anchor-list ul li a{
  color: #333;
}
.anchor-list ul li img{
  width: 40px;
  height: 40px;
}
.anchor-list ul li .img{
  width: 40px;
  height: 40px;
}
.anchor-list ul li .img,.user{
  float: left;
}
.user .name{
  color: #333;
  font-size: 12px;
  line-height: 25px;
  padding-left: 10px;
}
.describe{
  padding-left: 10px;
}
</style>