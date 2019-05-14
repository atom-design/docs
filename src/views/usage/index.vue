<template>
  <div class="usage-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="使用教程" desc=""></doc-title>
         <doc-code title="引入"><span class="blue">import</span> atomD <span class="blue">from</span> 'atom-design';<br/><span class="blue">import</span> 'atom-design/lib/style.css';<br/>Vue.use(atomD);</doc-code>
         <doc-code title="按需引入">使用<span class="red"> babel-plugin-import </span>来插件来实现按需引入<br/><span class="blue">(1)先安装babel-plugin-import</span><br/>npm install babel-plugin-import --save-dev<br/><span class="blue">(2)配置.babelrc</span><br/>[<br/>  <span class="yellow">"plugins"</span>: [
      [<span class="red">"import"</span>, {
        <span class="red">"libraryName"</span>: "atom-design",
        <span class="red">"libraryDirectory"</span>: "packages",
        <span class="red">"style"</span>: true
      }]
    ]<br/>]<br/><span class="blue">(3)引入所需组件</span><br/><span class="red">import</span> {Button} <span class="red">from</span> 'atom-design';<br/>Vue.component(Button.name, Button);</doc-code>
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
.usage-doc {
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
