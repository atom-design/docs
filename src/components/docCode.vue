<template>
  <div class="doc-code">
    <h2 v-text="title"></h2>
    <pre class="code"><code><slot></slot></code></pre>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['title']
}
</script>

<style lang="postcss" scoped>
  .red {
    color: #dd2622;
  }
  .blue {
    color: #0033ff;
  }
  .green {
    color: #66cc33;
  }
  .yellow {
    color: #CD8500
  }
  .doc-code {
    padding-left: 24px;
    h2 {
      font-size: 16px;
    }
    .code {
      overflow-x: auto;
      border: 1px dashed #ccc;
      border-radius: 6px;
      color: #666;
      padding: 10px;
      margin: 0;
      code {
        line-height: 24px;
      }
    }
  }
</style>
