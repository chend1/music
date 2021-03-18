<template>
  <div class="aside-user">
    <div class="user">
      <div class="pic">
        <router-link :to="{ path: '/user/'+$store.state.user.id }">
          <img :src="$store.state.user.head" alt="">
        </router-link>
      </div>
      <div class="right">
        <div class="name"><router-link :to="{ path: '/user/'+$store.state.user.id }">{{$store.state.user.name}}</router-link></div>
        <div class="rank">
          <p>
            <span>{{level}}</span>
            <i></i>
          </p>
        </div>
        <div class="sign" @click="signClick">签到</div>
      </div>
    </div>
    <ul>
      <li>
        <p>{{event}}</p>
        <p>动态</p>
      </li>
      <li>
        <p>{{follows}}</p>
        <p>关注</p>
      </li>
      <li>
        <p>{{followdes}}</p>
        <p>粉丝</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getEvent,getFollow,getFollowed,getLevel,getSignin} from 'network/user'
  export default {
    name: 'AsideUser',
    data(){
      return {
        uid: this.$store.state.user.id,
        event: 0,
        follows: 0,
        followdes: 0,
        level: 0
      }
    },
    created(){
      getEvent(this.uid).then( res => {
        this.event = res.data.events.length
      })
      getFollow(this.uid).then( res => {
        this.follows = res.data.follow.length;
      }),
      getFollowed(this.uid).then( res => {
        this.followdes = res.data.followeds.length;
      }),
      getLevel(this.$store.state.cookie).then( res => {
        this.level = res.data.data.level
      })
    },
    methods: {
      signClick(){
      //   getSignin(1).then( res => {
      //     console.log(res);
      //   })
      }
    }
  }
</script>

<style scoped>
.aside-user{
  height: 165px;
  padding-top: 20px;
  background-image: url(~assets/images/index.png);
  background-position: 1px -270px;
}
.user,ul{
  overflow: hidden;
  margin-left: 20px;
}
.user .pic,.right{
  float: left;
}
.right{
  padding-left: 20px;
}
.user .pic{
  width: 86px;
  height: 86px;
  border: 1px solid #dadada;
  background-color: #fff;
}
.user .pic a{
  display: block;
  width: 86px;
  height: 86px;
  padding: 2px;
}
.user .pic a img{
  width: 80px;
  height: 80px;
  margin: 0 auto;
}
ul{
  margin: 22px 0 0 3px;
}
ul li{
  float: left;
  height: 45px;
  padding: 0 18px;
  border-right: 1px solid #e4e4e4;
}
.name{
  margin-top: 3px;
}
.name a{
  display: block;
  font-size: 14px;
  color: #333;
  font-weight: 700;
  width: 60px;
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rank{
  width: 100%;
}
.rank p{
  display: inline-block;
  height: 17px;
  overflow: hidden;
  padding-left: 25px;
  line-height: 18px;
  color: #999;
  font-weight: bold;
  font-style: italic;
  background-position: -130px -64px;
  background-image: url(~assets/images/icon2.png);
  margin-top: 5px;
}
.rank p i{
  display: inline-block;
  width: 8px;
  height: 17px;
  background-position: -192px -64px;
  background-image: url(~assets/images/icon2.png);
}
.rank p span{
  display: inline-block;
  height: 17px;
  line-height: 8px;
  vertical-align: bottom;
}
.sign{
  width: 76px;
  height: 30px;
  box-sizing: border-box;
  border: 1px solid #cccccc;
  text-align: center;
  line-height: 28px;
  background-color: #eeeeee;
  color: #999;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}
ul li>p:first-child{
  font-size: 20px;
  font-weight: normal;
}
</style>