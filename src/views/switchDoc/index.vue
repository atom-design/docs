<template>
  <div class="switch-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Switch 开关" desc="通过两互斥对象进行控制开关"></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Switch } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Switch.name, Switch);</doc-code>
        <doc-code title="例子">// v-model绑定Boolean类型变量控制<br/><start-tag name="atom-switch" :attrs="[{key: 'v-model', value: 'switchVar'}]"></start-tag><end-tag name="atom-switch"></end-tag><br/>// 自定义颜色<br/><start-tag name="atom-switch" :attrs="[{key: 'v-model', value: 'switchVar'}, {key: 'color', value: '#ff9933'}]"></start-tag><end-tag name="atom-switch"></end-tag>
        </doc-code>
    </div>
    <mobile routerName="switch"></mobile>
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
        name: 'v-model',
        desc: '绑定switch值',
        type: 'Boolean',
        default: '无'
      },
      {
        name: 'color',
        desc: '设置switch的主颜色',
        type: 'String',
        default: '#108ee9'
      },
      {
        name: 'style',
        desc: '自定义样式',
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
.switch-doc {
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
