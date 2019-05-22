<template>
  <div class="header-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Header 头部导航栏" desc="通过设置一级子节点的插槽名来布局导航栏"></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Header } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Header.name, Header);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="atom-header" :attrs="[{key: 'style', value: '自定义样式'}]"></start-tag><br/>  // 布局至左边<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: 'slot', value: 'left'}]"></start-tag><end-tag name="div"></end-tag><br/>  // 布局至右边<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: 'slot', value: 'right'}]"></start-tag><end-tag name="div"></end-tag><br/>  // 布局至中间 <br/><start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: 'slot', value: 'center'}]"></start-tag><end-tag name="div"></end-tag><br/><end-tag name="atom-header"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="header"></mobile>
    </div>
    <doc-api :apiList="apiList"></doc-api>
  </div>
</template>

<script type="text/javascript">
import mobile from '@/components/mobile.vue'
import docApi from '@/components/docApi.vue'
import docTitle from '@/components/docTitle.vue'
import docCode from '@/components/docCode.vue'
import startTag from '@/components/startTag.vue'
import endTag from '@/components/endTag.vue'
export default {
  data () {
    return {
      apiList: [{
        name: 'style',
        desc: '自定义样式',
        type: 'String',
        default: '无'
      },
      {
        name: 'slot',
        desc: '需要在一级子节点指定布局位置，可选值left / center / right',
        type: 'String',
        default: '无'
      }]
    }
  },
  components: {
    mobile,
    docApi,
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
    width: calc(100% - 375px);
    display: inline-block;
  }
}
.header-doc {
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
