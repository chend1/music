<template>
  <div class="listItem wrap">
    <PlayListItem v-for="(item,index) in songSheet" :key="index" :songSheetItem="item"></PlayListItem>
  </div>
</template>

<script>
  import PlayListItem from 'components/common/playlistitem/PlayListItem.vue'
  export default {
    name: 'ListItem',
    components: {
      PlayListItem
    },
    props: {
      songSheet: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .listItem{
    margin-top: 30px;
  }
</style>