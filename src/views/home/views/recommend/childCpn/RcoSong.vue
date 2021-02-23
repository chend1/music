<template>
  <div class="rcoSong">
    <SongBar>
      <SongItem>

      </SongItem>
    </SongBar>
  </div>
</template>

<script>
  import { SongBar,SongItem} from 'components/common/songBar'
  export default {
    name: 'RcoSong',
    components: {
      SongBar,
      SongItem
    },
    created(){
      
    }
  }
</script>

<style scoped>

</style>