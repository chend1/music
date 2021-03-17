<template>
  <div class="login-wrap">
    <div class="top">
      <div class="title">
        登录
      </div>
      <div class="close">
        关闭
      </div>
    </div>
    <div class="cnt">
      <div class="on" v-if="!wait">
        <div class="left"></div>
        <div class="right">
          <div class="title">扫码登录</div>
          <div class="qr">
            <div class="noshow" v-if="isShow">
              <p>二维码已失效</p>
              <div class="u-btn2">点击刷新</div>
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
    <div class="botton">
      <div class="other">
        选择其他方式登录
      </div>
    </div>
  </div>
</template>

<script>
  import {getLoginKey,getLogin,getQrType} from 'network/login'
  export default {
    name: 'Login',
    data(){
      return {
        qrimg: '',
        key: '',
        isShow: false,
        timer: null,
        code: 801,
        wait: false
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
            this.$store.emmit('isLogin')
          }
          console.log(result);
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
        }, 60000);
      })
      // 验证二维码是否过期
    },
  }
</script>

<style scoped>
  .login-wrap{
    width: 100%;
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
    z-index: 20;
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
</style>