
<template>
  <div class="switch-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Radio 单选" desc="通过name属性设置单选组,在单选组中选择（默认选中只需设置v-model为选中的val属性）"></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { Radio } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Radio.name, Radio);</doc-code>
        <doc-code title="例子">// v-model绑定选中的value<br/><start-tag name="atom-radio" :attrs="[{key: 'name', value: 'groupName'}, {key: 'val', value: 'radioValue'}, {key: 'v-model', value: 'selectValue'}]"></start-tag><end-tag name="atom-radio"></end-tag><br/>// 自定义颜色<br/><start-tag name="atom-radio" :attrs="[{key: 'name', value: 'groupName'}, {key: 'val', value: 'radioValue'}, {key: 'color', value: '#ff9933'}]"></start-tag><end-tag name="atom-radio"></end-tag><br/>// 设置禁用<br/><start-tag name="atom-radio" :attrs="[{key: 'name', value: 'groupName'}, {key: 'val', value: 'radioValue'}, {key: ':disabled', value: true}]"></start-tag><end-tag name="atom-radio"></end-tag>
        </doc-code>
      </div>
      <mobile routerName="radio"></mobile>
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
        desc: '绑定选中radio的value',
        type: 'String',
        default: '无'
      },
      {
        name: 'name',
        desc: '设置radio group的名称',
        type: 'String',
        default: '无'
      },
      {
        name: 'val',
        desc: '设置radio的value',
        type: 'String',
        default: '无'
      },
      {
        name: 'color',
        desc: '设置radio的颜色',
        type: 'String',
        default: '#108ee9'
      },
      {
        name: 'disabled',
        desc: '设置radio是否禁用',
        type: 'Boolean',
        default: 'false'
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
