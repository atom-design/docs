<template>
  <div class="doc-title">
    <h1 v-text="title"></h1>
    <p v-text="desc"></p>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['title', 'desc']
}
</script>

<style lang="postcss" scoped>
  .doc-title {
    padding-left: 24px;
    .a-link {
      color: #0033ff;
      text-decoration: underline;
    }
  }
</style>
