<template>
  <div class="installation-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="安装教程"></doc-title>
        <doc-code title="npm/yarn 安装">cnpm install atom-design --save<br/>yarn add atom-design</doc-code>
        <doc-code title="CDN 引入">// css引入<br/><start-tag name="link" :attrs="[{key: 'ref', value: 'stylesheet'}, {key: 'href', value: 'https://unpkg.com/atom-design@1.0.3/lib/style.css'}]"></start-tag><br/>// js引入<br/><start-tag name="script" :attrs="[{key: 'type', value: 'text/javascript'}, {key: 'src', value: 'https://unpkg.com/atom-design@1.0.3/lib/atomD.min.js'}]"></start-tag><end-tag name="script"></end-tag></doc-code>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import docTitle from '@/components/docTitle.vue'
import docCode from '@/components/docCode.vue'
import startTag from '@/components/startTag.vue'
import endTag from '@/components/endTag.vue'
export default {
  components: {
    docTitle,
    docCode,
    startTag,
    endTag
  }
}
</script>

<style lang="postcss" scoped>
@media only screen and (max-width: 992px) {
  .doc-demo {
    width: 100%;
    display: block;
  }
}
@media only screen and (min-width: 992px) {
  .doc-demo {
    width: 80%;
    display: inline-block;
  }
}
.installation-doc {
  padding: 0 24px 24px 0;
  .doc-title {
    padding: 0 24px;
    font-size: 14px;
  }
  .doc-demo {
    box-sizing: border-box;
    padding-right: 24px;
  }
}
</style>
