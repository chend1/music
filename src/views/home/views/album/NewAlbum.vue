<template>
  <div class="new-album">
    <AlbumTop></AlbumTop>
    <AlbumItem :discLists="albumList"></AlbumItem>
  </div>
</template>

<script>
  import AlbumTop from './childCpn/AlbumTop.vue'
  import AlbumItem from './childCpn/AlbumItem.vue'
  import {getAlbumList} from 'network/album'
  export default {
    name: 'NewAlbum',
    components: {
      AlbumTop,
      AlbumItem
    },
    data(){
      return {
        albumList: [],
        total: 0
      }
    },
    created(){
      getAlbumList('ALL',45).then( res => {
        this.albumList = res.data.albums;
        this.total = res.data.total
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  .new-album{
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: border-box;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    padding: 40px;
  }
</style>