<template>
  <span class="tag"><{{name}}<span class="tag-attr" v-for="(item, index) in attrs"><br/><span class="attr-key"> {{item.key}}</span>="<span class="attr-value">{{item.value}}</span>"</span>></span>
</template>

<script type="text/javascript">
  export default {
    props: ['name', 'attrs']
  }
</script>.

<style lang="postcss" scoped>
  .tag {
    color: #dd2622;
    .tag-attr {
      color: #008B00;
      .attr-value {
        color: #0033ff;
      }
    }
  }
</style>
