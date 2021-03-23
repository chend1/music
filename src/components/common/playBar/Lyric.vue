<template>
  <div class="lyric">
    <p></p>
  </div>
</template>

<script>
  import {getLyric} from 'network/song'
  export default {
    name: 'Lyric',
    data(){
      return {
        songLyric: ''
      }
    },
    computed: {
      music(){
        return this.$store.state.musicMsg.id
      }
    },
    watch: {
      music: function(newMusic,oldMusic){
        getLyric(this.$store.state.musicMsg.id).then( res => {
          this.songLyric = res.data.lrc.lyric;
          console.log(this.songLyric);
        })
      }
    }
  }
</script>

<style scoped>
  .lyric p{
    line-height: 32px;
    word-wrap: break-word;
  }
</style>