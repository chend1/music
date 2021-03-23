<template>
  <div class="login-wrap">
    <div class="top">
      <div class="title">
        登录
      </div>
      <div class="close" @click="loginClose">
        关闭
      </div>
    </div>
    <div class="cnt" v-if="!other">
      <div class="on" v-if="!wait">
        <div class="left"></div>
        <div class="right">
          <div class="title">扫码登录</div>
          <div class="qr">
            <div class="noshow" v-if="isShow">
              <p>二维码已失效</p>
              <div class="u-btn2" @click="refreshClick">点击刷新</div>
            </div>
            <div class="show">
              <img :src="qrimg" alt="">
            </div>
          </div>
          <div class="txt">
            使用 <router-link to="/download"> 网易云音乐APP </router-link>扫码登陆
          </div>
        </div>
      </div>
      <div class="wait" v-else>
        请在手机上确认登录
      </div>
    </div>
    <div class="cnt" v-else>
      <div class="phone">
        <input type="text" name="phone" id="phone" placeholder="请输入手机号" @input="phoneInput($event)">
      </div>
      <div class="pwd">
        <input type="password" name="pwd" id="pwd" placeholder="请输入密码"  @input="pwdInput($event)">
      </div>
      <p v-if="phoneMsg.length>1">
        {{phoneMsg}}
      </p>
      <div class="btn" @click="btnClick">
        立即登录
      </div>
    </div>
    <div class="botton">
      <div class="other" @click="otherClick">
        选择其他方式登录
      </div>
    </div>
  </div>
</template>

<script>
  import {getLoginKey,getLogin,getQrType,logOut,refresh,getUser,User,getLoginP} from 'network/login'
  export default {
    name: 'Login',
    data(){
      return {
        qrimg: '',
        key: '',
        isShow: false,
        timer: null,
        // 扫码返回值
        code: 0,
        // 是否扫码，等待确认
        wait: false,
        // 是否选中其他方式登录
        other: false,
        // 手机号登录
        phone: 0,
        password: 0,
        // 手机号登录状态返回值
        phoneCode: 0,
        phoneMsg: ''
      }
    },
    methods: {
      checkQr(){
        getQrType(this.key).then( result => {
          this.code = result.data.code
          if(this.code === 800){
            this.wait = false;
            this.isShow = true;
            clearInterval(this.timer);
          }
          if(this.code === 802){
            this.wait = true;
          }
          if(this.code === 803){
            let cookie = result.data.cookie
            getUser(cookie).then( res => {
              console.log(res);
              let user = new User(res.data.profile.userId,res.data.profile.avatarUrl,res.data.profile.nickname,cookie)
              this.$store.commit('isLogin',user);
            })
            this.$emit('success');
            clearInterval(this.timer);
          }
        })
      },
      loginClose(){
        // logOut();
        this.$emit("loginclose");
        clearInterval(this.timer);
      },
      refreshClick(){
        refresh()
      },
      // 其他方式登录点击
      otherClick(){
        this.other = !this.other
      },
      phoneInput(e){
        this.phone = e.target.value;
      },
      pwdInput(e){
        this.password = e.target.value;
      },
      btnClick(){
        getLoginP(this.phone,this.password).then( res => {
          this.phoneCode = res.data.code;
          this.phoneMsg = res.data.message;
        })
      }
    },
    created(){
      getLoginKey().then( res => {
        this.key = res.data.data.unikey;
        return res.data.data.unikey;
      }).then( key => {
        getLogin(key,'base64').then( result => {
          this.qrimg = result.data.data.qrimg;
          this.isShow = false;
        })
      }).then( () => {
        this.timer = setInterval(() => {
          this.checkQr()
        }, 500);
      })
      // 验证二维码是否过期
    }
  }
</script>

<style scoped>
  .login-wrap{
    width: 100%;
    z-index: 1000;
  }
  .top{
    position: relative;
    width: 100%;
    height: 38px;
    line-height: 38px;
    background-color: #2d2d2d;
  }
  .title{
    font-size: 14px;
    color: #fff;
    padding-left: 20px;
  }
  .close{
    position: absolute;
    z-index: 999;
    top: 4px;
    right: 4px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -9999px;
    cursor: pointer;
    background-position: -195px 9px;
    background-image: url(~assets/images/playlist.png);
  }
  .cnt{
    margin: 0 auto;
    padding: 38px 0 20px;
    text-align: center;
    overflow: hidden;
  }
  .left{
    float: left;
    margin-left: 101px;
    width: 125px;
    height: 220px;
    background: url(~assets/images/qr_guide.png?5773700…);
    background-size: contain;
  }
  .right{
    float: left;
    margin-left: 25px;
  }
  .right .title{
    font-size: 18px;
    font-weight: 500;
    color: #333;
    padding-left: 0;
  }
  .qr{
    width: 130px;
    height: 130px;
    padding: 4px;
    margin: 13px auto;
    position: relative;
    background: #fff;
  }
  .noshow,.show{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .show img{
    width: 100%;
    height: 100%;
  }
  .noshow{
    background-color: rgba(255,255,255,.9);
    z-index: 9;
  }
  .noshow p{
    margin: 45px auto 6px;
    font-size: 12px;
    color: rgba(0,0,0,0.80);
    font-weight: 500;
  }
  .noshow>div{
    margin: 0 auto;
    padding-right: 0;
    width: 64px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    border-radius: 4px;
    background: linear-gradient(180deg, #81DD81 0%, #55A055 100%);
    border: 1px solid #5BAF5B;
    box-shadow: inset 0 -1px 1px 1px rgb(185 230 185 / 31%);
    color: #fff;
    font-size: 12px;
    cursor: pointer;
  }
  .botton{
    width: 100%;
    height: 28px;
    color: #333;
  }
  .botton .other{
    display: block;
    width: 118px;
    height: 100%;
    margin: 5px auto 0;
    padding-right: 0;
    font-size: 12px;
    border: 1px solid #979797;
    border-radius: 15px;
    line-height: 28px;
    text-align: center;
    color: rgba(0,0,0,0.80);
    cursor: pointer;
  }
  .phone,.pwd{
    width: 220px;
    height: 32px;
    line-height: 30px;
    border: 1px solid #cdcdcd;
    box-sizing: border-box;
    margin: 10px auto;
  }
  .phone input,.pwd input{
    display: block;
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .btn{
    width: 220px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    box-sizing: border-box;
    background-color: #2979c7;
    color: white;
    margin: 20px auto;
    border-radius: 5px;
    cursor: pointer;
  }
</style>