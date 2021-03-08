<template>
  <div class="discussItem">
    <div class="wrap">
      <div class="head">
        <img :src="discussItem.user.avatarUrl" alt="">
      </div>
      <div class="cnt">
        <div class="user">
          <div class="name">
            <router-link :to="{ path: '/user/'+discussItem.user.userId}">
              {{discussItem.user.nickname}}
            </router-link>
          </div>
          ：{{discussItem.content}}
          <div class="user-reply" v-for="(item,index) in discussItem.beReplied" :key="index">          
            <div class="user-cnt">
              <div class="user-name">
                <router-link :to="{ path: '/user/'+item.user.userId}">
                  {{item.user.nickname}}
                </router-link>
              </div>
              ：{{item.content}}
            </div>
          </div>
        </div>
        <div class="botton">
          <div class="time">
            {{discussItem.time | changeTime}}
          </div>
          <div class="operate">
            <div class="praise"></div>
            <div class="reply">回复</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DiscussItem',
    props: {
      discussItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      changeTime(time){
        let newTime = new Date(time);
        let nowTime = new Date();
        let y = newTime.getFullYear();
        let M = newTime.getMonth();
        let d = newTime.getDate();
        let h = newTime.getHours();
        let m = newTime.getMinutes();
        let s = newTime.getSeconds();
        // ---
        let yNow = nowTime.getFullYear();
        let MNow = nowTime.getMonth();
        let dNow = nowTime.getDate();
        let hNow = nowTime.getHours();
        let mNow = nowTime.getMinutes();
        let sNow = nowTime.getSeconds();
        if(y === yNow && M === MNow && d === dNow && h === hNow){
          return mNow - m + '分钟前'
        }
        if(y === yNow && M === MNow && d === dNow){
          if(h < 10){
            h = '0' + h;
          }
          if(m < 10){
            m = '0' + m;
          }
          if(s < 10){
            s = '0' + s;
          }
          return h + ':' + m
        }
        if(h < 10){
            h = '0' + h;
        }
        if(m < 10){
          m = '0' + m;
        }
        if(s < 10){
          s = '0' + s;
        }
        return  y + '-' + M + '-' + d + '  ' + h + ':' + m
      }
    }
  }
</script>

<style scoped>
  .discussItem,.wrap{
    width: 100%;
    overflow: hidden;
  }
  .discussItem{
    padding: 15px 0;
    border-top: 1px dotted #ccc;
  }
  .head,.cnt{
    float: left;
  }
  .cnt{
    width: 588px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .head{
    width: 50px;
    height: 50px;
  }
  .head img{
    width: 50px;
    height: 50px;
  }
  .user{
    overflow: hidden;
  }
  .user .name{
    display: inline-block;
  }
  .user .name a{
    color: #0c73c2;
  }
  .botton{
    overflow: hidden;
    width: 100%;
    margin-top: 15px;
  }
  .botton .time,.botton .operate .praise,.botton .operate .reply{
    float: left;
  }
  .botton .operate{
    float: right;
  }
  .botton .operate .praise,.botton .operate .reply{
    margin-top: 2px;
    height: 14px;
    cursor: pointer;
  }
  .botton .operate .praise{
    width: 15px;
    background-image: url(~assets/images/icon2.png);
    background-position: -150px 0;
  }
  .botton .operate .reply{
    padding: 0 10px;
  }
  .user-reply{
    width: 100%;
    box-sizing: border-box;
    background: #f4f4f4;
    border: 1px solid #dedede;
    overflow: hidden;
    margin-top: 10px;
  }
  .user-cnt{
    padding: 8px 19px;
    line-height: 20px;
  }
  .user-name{
    display: inline-block;
  }
  .user-name a{
    color: #0c73c2;
  }
</style>