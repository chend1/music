<template>
  <div class="foot-play-list">
    <div class="foot-left">
      <div class="list-head">
        <div class="list">
          <h4>
            播放列表
            <span>
              ({{$store.state.playList.length}})
            </span>
          </h4>
        </div>
        <div class="operate">
          <div class="list-add">
            <span></span>
            收藏全部
          </div>
          <div class="clear">
            
            <span>
              <i></i>
              清除
            </span> 
          </div>
        </div>
      </div>
      <div class="no-cnt" v-if="$store.state.playList.length < 1">
        <p>
          <i></i>
          <span>你还没有添加任何歌曲</span>
        </p>
        <p>
          去首页 <router-link to="/home/recommend">发现音乐</router-link>
          ，或在<router-link to="/my">我的音乐</router-link>收听自己收藏的歌单。
        </p>
      </div>
      <div class="cnt-list" v-else>
        <ul>
          <li v-for="(item,index) in $store.state.playList" :key="index">
            <FootPlayListItem :item="item"></FootPlayListItem>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot-right">
      <div class="list-head">
        <div class="name">
          {{$store.state.musicMsg.title}}
        </div>
        <div class="close" @click="closeClick"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import FootPlayListItem from './FootPlayListItem.vue'
  export default {
    name: 'FootPlayList',
    components: {
      FootPlayListItem
    },
    data(){
      return {
        localList: []
      }
    },
    methods: {
      closeClick(){
        console.log(111);
        this.$emit('closeClick') 
      }
    },
    created(){
      this.$store.commit('loadPlayList')
    }
  }
</script>

<style scoped>
  .foot-play-list{
    overflow: hidden;
    background-color: #161616;
  }
  .foot-left{
    width: 560px;
    float: left;
    box-sizing: border-box;
  }
  .foot-right{
    width: 440px;
    float: left;
    box-sizing: border-box;
  }
  .list-head{
    height: 40px;
    line-height: 40px;
    background-color: #111;
    position: relative;
  }
  .list-head .list,.list-add,.clear{
    float: left;
  }
  .list-head .name{
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }
  .close{
    position: absolute;
    top: 6px;
    right: 8px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
    background-position: -195px 9px;
    background-image: url(~assets/images/playlist.png);
  }
  .list{
    font-size: 14px;
    color: #e2e2e2;
    padding-left: 20px;
  }
  .operate{
    float: right;
  }
  .list-add{
    cursor: pointer;
    padding: 0 10px;
    color: #ccc;
  }
  .list-add span{
    display: inline-block;
    height: 16px;
    width: 16px;
    background-position: -24px 0;
    background-image: url(~assets/images/playlist.png);
    vertical-align: middle;
  }
  .clear i{
    display: inline-block;
    width: 13px;
    height: 16px;
    background-position: -51px 0;
    background-image: url(~assets/images/playlist.png);
    vertical-align: middle;
  }
  .clear span{
    padding: 0 10px;
    border-left: 1px solid #585656;
    color: #ccc;
    cursor: pointer;
  }
  .no-cnt{
    padding-top: 85px;
    text-align: center;
    line-height: 43px;
    color: #aaa;
  }
  .no-cnt i{
    display: inline-block;
    position: relative;
    top: -4px;
    width: 36px;
    height: 29px;
    margin-right: 3px;
    background-position: -138px 0;
    background-image: url(~assets/images/playlist.png);
    vertical-align: middle;
  }
  .no-cnt a{
    color: #aaa;
    text-decoration: underline;
  }
  .cnt-list{
    height: 258px;
    overflow-y: scroll;
  }
  .cnt-list::-webkit-scrollbar{
    width: 6px;
    height: 6px;
    background-color: #100f0e;
  }
  .cnt-list::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background-color: #1f1d1d;
    border: 1px solid #515050;
  }
  .cnt-list::-webkit-scrollbar-track：{
    background-color: #100f0e;
  }
</style>