<template>
  <div class="discWrap">
    <DiscList :discLists="discLists"></DiscList>
  </div>
</template>

<script>
  import {DiscItem,DiscList} from 'components/common/discList'
  export default {
    name: 'DiscWrap',
    components: {
      DiscList
    },
    props: {
      discLists: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>