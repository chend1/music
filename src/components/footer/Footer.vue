<template>
  <div id="footer">
    <div class="wrap">
      <div class="list">
        <ul>
          <li><a href="https://st.music.163.com/official-terms/service">服务条款</a></li>
          <li><a href="https://st.music.163.com/official-terms/privacy">隐私政策</a></li>
          <li><a href="https://st.music.163.com/official-terms/children">儿童隐私政策</a></li>
          <li><a href="https://music.163.com/st/staticdeal/complaints.html">版权投诉政策</a></li>
          <li><a>意见反馈</a></li>
        </ul>
        <p class="right s-fc3">
          <span class="sep span">网易公司版权所有©1997-2021</span>
          <span class="span">杭州乐读科技有限公司运营：</span>
          <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" target="_blank"
            class="alink s-fc3">
            浙网文[2018]3506-263号
          </a>
        </p>
        <p class="contact s-fc3">
          <span class="sep span">违法和不良信息举报电话：0571-89853516</span>
          <span class="span">举报邮箱：</span><a class="alink" href="mailto:ncm5990@163.com">ncm5990@163.com</a>
        </p>
        <p class="right s-fc3">
          <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank"
            class="alink s-fc3">粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
            rel="noopener noreferrer" target="_blank" class="alink s-fc3 police-link">
            <span class="police-logo"></span>
            <span class="police-text">浙公网安备 33010902002564号</span>
          </a>
        </p>
      </div>
      <div class="right-wrap">
        <ul class="enter f-fr">
          <li class="unit">
          <a class="logo logonew logo-amped f-tid" href="https://web-amped.music.163.com/" target="_blank"></a>
          <span class="tt tt-amped"></span>
          </li>
          <li class="unit">
          <a class="logo logonew logo-auth f-tid" href="//music.163.com/st/userbasic#/auth" target="_blank"></a>
          <span class="tt tt-auth"></span>
          </li>
          <li class="unit">
          <a class="logo logonew logo-musician f-tid" href="//music.163.com/musician/artist" target="_blank"></a>
          <span class="tt tt-musician"></span>
          </li>
          <li class="unit">
          <a class="logo logonew logo-reward f-tid" href="//music.163.com/web/reward" target="_blank"></a>
          <span class="tt tt-reward"></span>
          </li>
          <li class="unit">
          <a class="logo logonew logo-cash f-tid" href="//music.163.com/uservideo#/plan" target="_blank"></a>
          <span class="tt tt-cash"></span>
          </li>
          </ul>
      </div>
    </div>
    <PlayBar class="paly-bar"></PlayBar>
  </div>
</template>

<script>
  import PlayBar from 'components/common/playBar/PlayBar'
  import { getSongData,getSongPlay } from 'network/song'
  export default {
    name: 'Footer',
    components: {
      PlayBar
    },
    created(){
      getSongPlay(3986241).then( res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  #footer {
    position: relative;
    width: 100%;
    height: 172px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
  }
  .paly-bar{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .list{
    float: left;
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
  }
  .list ul{
    overflow: hidden;
  }
  .list ul li{
    float: left;
  }
  .list a{
    display: inline-block;
    padding-right: 15px;
    color: #999;
  }
  .wrap {
    width: 1100px;
    margin: 0 auto;
    overflow: hidden;
  }
  .right-wrap{
    width: 480px;
    margin-top: 33px;
    float: left;
  }
   .enter .unit {
    float: left;
    width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
}
 .enter .unit:first-child {
    margin-left: 0;
}
.logonew {
    display: block;
    float: none;
    width: 50px;
    height: 45px;
    margin: 0 auto;
}
 .logonew.logo-amped {
    background-position: -63px -456.5px;
}
 .logo.logonew {
    background: url(~assets/images/foot_enter_new.png) no-repeat;
    background-size: 110px 552px;
}
.logonew + .tt {
    background: url(~assets/images/foot_enter_tt.png) no-repeat;
    background-size: 180px 139px;
}
.enter .tt {
    display: inline-block;
    margin: 5px 5px 0;
    width: 52px;
    height: 14px;
}
.enter .tt-amped {
    background-position: 0 -108px;
    margin-left: -6px;
    width: 72px;
}
</style>