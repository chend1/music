<template>
  <div class="asidetop">
    <div class="top">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <div class="login">
        用户登录
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AsideTop',
  }
</script>

<style scoped>
.asidetop{
  height: 126px;
  padding-top: 0;
  background-color: #eeeeee;
  border-bottom: 1px solid #b1b1b1;
  box-shadow: 0 1px 0 #b1b1b1;
}
.top p{
  width: 205px;
  margin: 0 auto;
  padding: 16px 0;
  line-height: 22px;
}
.login{
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
  background-color: #cf0f16;
  box-shadow: 0 0 1px #cf0f16;
  color: white;
  margin: 0 auto;
  cursor: pointer;
}
.login:hover{
  background-color: #eb2931;
}
</style>