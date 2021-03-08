<template>
  <div class="single wrap">
    <div class="left">
      <!-- top -->
      <SingleTop :musicMessage="musicMsg" :lyric="lyric"></SingleTop>
      <SingleTitle></SingleTitle>
      <!-- 用户评论 -->
      <SingleComment></SingleComment>
      <!-- 评论展示 -->
      <SingleDiscuss :discuss="comments"></SingleDiscuss>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
  import SingleTop from './childCpn/SingleTop.vue'
  import SingleTitle from './childCpn/SingleTitle.vue'
  import SingleComment from './childCpn/SingleComment.vue'
  import SingleDiscuss from './childCpn/SingleDiscuss.vue'
  import {getSongData,getLyric,Song,getComments} from 'network/song'
  export default {
    name: 'Single',
    components: {
      SingleTop,
      SingleTitle,
      SingleComment,
      SingleDiscuss
    },
    data(){
      return {
        id: this.$route.params.iid,
        musicMsg: {},
        lyric: '',
        // 评论数据
        comments: []
      }
    },
    mounted(){
      console.log(this.id);
    },
    created(){
      getSongData(this.id).then( res => {
        let song = new Song();
        song.id = res.data.songs[0].id;
        song.pic = res.data.songs[0].al.picUrl + '?param=130y130';
        song.al = res.data.songs[0].al;
        song.mv_id = res.data.songs[0].mv;
        song.ar = res.data.songs[0].ar;
        song.name = res.data.songs[0].name;
        this.musicMsg = song
      }),
      getLyric(this.id).then( res => {
        this.lyric = res.data.lrc.lyric;
        let reg = /\[.*\]/g;
        let reg1 = /\n/g
        this.lyric = this.lyric.replace(reg, '')
        this.lyric = this.lyric.replace(reg1, '<br>')
      }),
      getComments(this.id).then( res => {
        this.comments = res.data.comments;
        console.log(this.comments);
      })
    }
  }
</script>

<style scoped>
.single{
  overflow: hidden;
}
.left{
  width: 710px;
  float: left;
  border-left: 1px solid #e1e1e1;
  border-right: 1px solid #e1e1e1;
  box-sizing: border-box;
  padding: 45px 30px 40px 40px;
}
.right{
  float: left;
  width: 270px;
  box-sizing: border-box;
  border-right: 1px solid #e1e1e1;
}
</style>