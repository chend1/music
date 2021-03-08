<template>
  <div class="title-item">
    <Title>
        <p slot="title">评论</p>
        <p slot="cnt">123123123</p>
    </Title>
  </div>
</template>

<script>
  import Title from 'components/common/title/Title.vue'
  export default {
    name: 'SingleTitle',
    components: {
      Title
    }
  }
</script>

<style scoped>
 
</style>