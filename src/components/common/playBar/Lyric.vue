<template>
  <div class="lyric">
    <p class="lrc" v-for="(item,index) in songLyric" :key="index" :class=" { 'active': index === count }">
      {{item.cnt}}
    </p>
  </div>
</template>

<script>
  import {getLyric} from 'network/song'
  export default {
    name: 'Lyric',
    data(){
      return {
        songLyric: '',
        count: 0
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
          let strArr = this.songLyric.split("\n"),
              newArr = [];
          strArr.filter( item => {
            let t = item.substring(item.indexOf("[")+1,item.indexOf("]")),
                cnt = item.substring(item.indexOf("]")+1,item.length);
            newArr.push({
              t: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
              cnt
            })
          })
          this.count = 0;
          this.songLyric = newArr 
          console.log(this.songLyric);
        })
      }
    },
    mounted(){
      this.$Eventbus.$on("lrcTimeUpDate", msg => {
        if(this.count === 0){
          this.$emit('songScorll',this.count)
        }
        if(this.songLyric.length !== 0){
          if(this.songLyric[this.count].t <= msg && msg <= this.songLyric[this.count+1].t){

          } else {
            if(this.count === this.songLyric.length-1){
              this.count = 0
            } else {
              this.count++;
              if(this.count >= 4){
                // 让歌词滚动
                this.$emit('songScorll',this.count-3)
                console.log(this.count);
              }
            }
          }
        }
      })
    }
  }
</script>

<style scoped>
  .lyric{
    padding: 25px 0;
  }
  .lyric p{
    line-height: 32px;
    word-wrap: break-word;
    opacity: .6;
  }
  .lyric p.active{
    color: #fff;
    opacity: 1;
    font-size: 14px;
  }
</style>