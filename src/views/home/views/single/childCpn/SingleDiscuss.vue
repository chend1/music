<template>
  <div class="single-discussItem">
    <Discuss  v-for="(item,index) in discuss" :key="index">
      <DiscussItem :discussItem="item">
      </DiscussItem>
    </Discuss>
  </div>
</template>

<script>
  import {Discuss,DiscussItem} from 'components/common/discuss'
  export default {
    name: 'SingleDiscuss',
    components: {
      Discuss,
      DiscussItem
    },
    props: {
      discuss: {
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