<template>
  <span class="tag" v-text="`</${name}>`"></span>
</template>

<script type="text/javascript">
  export default {
    props: ['name']
  }
</script>

<style lang="postcss" scoped>
  .tag {
    color: #dd2622;
  }
</style>
