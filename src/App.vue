<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
  </div>
</template>

<script>
import headerBar from './header.vue'
export default {
  name: 'App',
  components: {
    headerBar
  }
}
</script>

<style lang="postcss" scoped>
  #app {
    height: 100%;
  }
</style>
