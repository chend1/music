<template>
  <div class="playlist wrap">
    <PlayListTop></PlayListTop>
    <ListItem :songSheet="playlist"></ListItem>
    <Paging :total="total" :limit="limit" :offset="offset"></Paging>
  </div>
</template>

<script>
  import PlayListTop from './childCpn/PlayListTop.vue'
  import ListItem from './childCpn/ListItem.vue'
  import Paging from 'components/common/paging/Paging.vue'
  import {getPlayList} from 'network/playlist'
  export default {
    name: 'PlayList',
    components: {
      PlayListTop,
      ListItem,
      Paging
    },
    data(){
      return {
        playlist: [],
        total: 0,
        limit: 50,
        offset: 1
      }
    },
    created(){
      getPlayList().then( res => {
        this.playlist = res.data.playlists;
        this.total = res.data.total
        console.log(this.playlist );
      })
      getPlayList('华语',50000).then( res => {
        // console.log(res);
      })
    }
  }
</script>

<style scoped>
  .playlist{
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: border-box;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    padding: 40px;
  }
</style>