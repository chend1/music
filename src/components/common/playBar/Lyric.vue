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
          console.log(this.songLyric);
          this.songLyric = newArr 
          console.log(this.songLyric);
        })
      }
    },
    mounted(){
      this.$Eventbus.$on("lrcTimeUpDate", msg => {
        console.log(msg);
        if(this.songLyric[this.count].t){
          if(this.songLyric[this.count].t <= msg && msg <= this.songLyric[this.count+1].t){
            this.count
          } else {
            this.count++
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
  }
</style>