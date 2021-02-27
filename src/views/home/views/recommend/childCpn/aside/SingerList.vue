<template>
  <div class="singerList">
    <div class="singer-top">
      <h3>
        <span>入驻歌手</span>
        <router-link to="/home/singer">查看全部></router-link>
      </h3>
    </div>
    <div class="singer-list">
      <ul>
        <li v-for="(item,index) in singerList" :key="index">
          <router-link :to="{ path: '/user/' + item.id}">
            <div class="img">
              <img :src="item.picUrl" alt="">
            </div>
            <div class="user">
              <div class="name">
                <h4>{{item.name}}</h4>
              </div>
              <div class="describe">流行歌手</div>
            </div>
          </router-link>
        </li>
      </ul>
      <a href="https://music.163.com/st/musician">申请成为音乐人</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingerList',
    props: {
      singerList: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .singer-top{
    margin: 0 15px;
    border-bottom: 1px solid #ccc;
    height: 40px;
    overflow: hidden;
  }
  .singer-top h3{
    overflow: hidden;
    margin-top: 15px;
  }
  .singer-top h3 span{
    display: block;
    float: left;
    color: #333;
  }
  .singer-top h3 a{
    display: block;
    float: right;
    color: #666;
  }
.singer-list{
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
}
.singer-list>a{
  display: block;
  width: 96%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #c3c3c3;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-top: 20px;
  color: #333;
  font-weight: 700;
}
.singer-list>a:hover{
  text-decoration: none;
  background-color: #fbfbfb;
}
.singer-list ul li{
  width: 100%;
  height: 62px;
  margin-top: 15px;
  border: 1px solid #e9e9e9;
  background-color: #fafafa;
}
.singer-list ul li a{
  color: #333;
}
.singer-list ul li img{
  width: 62px;
  height: 62px;
}
.singer-list ul li .img{
  width: 62px;
  height: 62px;
}
.singer-list ul li .img,.user{
  float: left;
}
.user .name{
  color: #333;
  font-size: 14px;
  line-height: 35px;
  padding-left: 10px;
}
.describe{
  padding-left: 10px;
}
</style>