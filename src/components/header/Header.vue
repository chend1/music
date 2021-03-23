<template>
  <div id="header">
    <header>
      <div class="wrap">
        <div class="left">
          <h1 class="logo">
            <router-link to="/">网易云音乐</router-link>
          </h1>
        </div>
        <div class="center">
          <ul>
            <li><router-link to="/home">发现音乐</router-link></li>
            <li><router-link to="/my">我的音乐</router-link></li>
            <li><router-link to="/friend">朋友</router-link></li>
            <li><router-link to="/shop">商城</router-link></li>
            <li><router-link to="/musician">音乐人</router-link></li>
            <li class="download">
              <router-link to="/download">
                下载客户端
              </router-link>
              <span class="hot"></span>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="search">
            <div class="src">
              <input type="text" placeholder="音乐/视频/电台/用户">
            </div>
          </div>
          <div class="user">
            <div class="creator">创作者中心</div>
            <div class="login" @mouseover="userOver" @mouseout="userOut">
              <a @click="login" style="cursor: pointer;" v-if="!$store.state.isToken">登录</a>
              <div class="pic" v-else>
                <router-link :to="{ path: '/user/'+ $store.state.user.id }">
                  <img :src="$store.state.user.head" alt="">
                </router-link> 
                <div class="userList" v-show="isShowList">
                  <ul>
                    <li>
                      <router-link to="/user">
                        <span></span>
                        我的主页
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/user">
                        <span></span>
                        我的消息
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/user">
                        <span></span>
                        我的等级
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/user">
                        <span></span>
                        VIP会员
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/user">
                        <span></span>
                        个人设置
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/user">
                        <span></span>
                        实名认真
                      </router-link>
                    </li>
                    <li @click="logoutClick">
                      <a>
                        <span></span>
                        退出
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="sub-nav"></div>
    <div class="login-popup" v-if="isLogin">
      <!-- 登录弹框 -->
      <Login @loginclose="loginCloseClick" @success="success"></Login>
    </div>
  </div>
</template>

<script>
  import Login from './Login.vue'
  export default {
    name: 'Header',
    components: {
      Login
    },
    data(){
      return {
        isLogin: false,
        isShowList: true
      }
    },
    methods: {
      login(){
        this.isLogin = true
      },
      loginCloseClick(){
        this.isLogin = false
      },
      success(){
        this.isLogin = false
      },
      userOver(){
        this.isShowList = true
      },
      userOut(){
        this.isShowList = false
      },
      // 退出登录
      logoutClick(){
        this.$store.dispatch('logoutClick')
      }
    },
  }
</script>

<style scoped>
#header{
  width: 100%;
  background-color: #242424;
}
header{
  height: 69px;
}
.wrap{
  width: 1100px;
  margin: 0 auto;
}
.left,.center{
  float: left;
}
.right{
  float: right;
  width: 330px;
}
.logo{
  width: 176px;
  height: 69px;
  background: url(~assets/images/topbar.png);
  background-repeat: no-repeat;
  background-position: 0 0;
}
.logo a{
  display: block;
  width: 100%;
  height: 69px;
  text-indent: -9999px;
}
.center ul li{
  float: left;
  line-height: 69px;
  position: relative;
}
.center ul li a::after{
  content: '';
  width: 12px;
  height: 7px;
  margin-left: -6px;
  position: absolute;
  bottom: -1px;
  left: 50%;
  background: url(~assets/images/topbar.png);
  background-repeat: no-repeat;
  background-position: -226px 0;
  display: none;
}
.download{
  position: relative;
}
.download .hot{
  background: url(~assets/images/topbar.png);
  background-repeat: no-repeat;
  background-position: -190px 0;
  position: absolute;
  top: 20px;
  right: -15px;
  display: block;
  width: 28px;
  height: 19px;
}
.center ul li:hover{
  background-color: #000;
}
.center ul li a.active{
  background-color: #000;
}
.center ul li a.active::after{
  display: block;
}

.center ul li a{
  display: block;
  padding: 0 20px;
  font-size: 14px;
  color: #b8b8b8;
  height: 69px;
}
.center ul li a.active{
  color: #fff;
}
.center ul li a:hover{
  text-decoration: none;
  color: #fff;
}
.right .search,.right .user,.creator,.login{
  float: left;
}
.right .search .src{
  width: 158px;
  height: 32px;
  border-radius: 32px;
  background-color: #fff;
  margin-top: 19px;
}
.right .search .src input{
  outline: none;
  line-height: 20px;
  border: none;
  margin-top: 6px;
  width: 128px;
  margin-left: 25px;
  color: #333;
}
.user .creator{
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  border-radius: 32px;
  margin-top: 19px;
  border: 1px solid #4f4f4f;
  color: #ccc;
  margin-left: 15px;
}
.login{
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  margin-top: 19px;
  margin-left: 15px;
  position: relative;
}
.login a{
  color: #787878;
}
.sub-nav{
  width: 100%;
  height: 5px;
  background-color: #c20c0c;
}
.login-popup{
  width: 530px;
  height: 370px;
  background-color: #fff;
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 5px;
  overflow: hidden;
}
.login>.pic>a{
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
}
.login>.pic a img{
  width: 100%;
}
.login .userList{
  position: absolute;
  top: 30px;
  right: -57px;
  width: 158px;
  background-color: #2b2b2b;
  border: 1px solid #202020;
  z-index: 999
}
.login .userList ul{
  width: 100%;
}
.login .userList ul li{
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #232323;
}
.login .userList ul li:last-child{
  border-bottom: none;
}
.login .userList ul li:hover{
  background-color: #353535;
}
.login .userList ul li a{
  display: block;
  height: 34px;
  line-height: 34px;
  padding-left: 24px;
  color: #ccc;
}
.login .userList ul li a span{
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(~assets/images/toplist.png);
  background-position: -20px -142px;
  vertical-align: top;
  margin-top: 8px;
  margin-right: 5px;
}
</style>