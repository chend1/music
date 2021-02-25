<template>
  <div class="songItem">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SongItem',
  }
</script>

<style scoped>
.songItem{
  height: 225px;
}
</style>