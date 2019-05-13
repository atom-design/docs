<template>
  <div class="inputItem-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="InputItem 输入条" desc="用于单行文本输入"></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { InputItem } <span class="blue">from</span> 'atom-design';<br/>Vue.component(InputItem.name, InputItem);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="atom-inputItem" :attrs="[{key: 'title', value: '默认标题'}, {key: 'placeholder', value: 'Please Input'}, {key: 'v-model', value: 'inputVal'}]"></start-tag><end-tag name="atom-inputItem"></end-tag><br/>// 禁止清空<br/><start-tag name="atom-inputItem" :attrs="[{key: 'title', value: '默认标题'}, {key: 'placeholder', value: 'Please Input'}, {key: ':canClear', value: 'false'}]"></start-tag><end-tag name="atom-inputItem"></end-tag><br/>// 自定义样式<br/><start-tag name="atom-inputItem" :attrs="[{key: 'title', value: '默认标题'}, {key: 'placeholder', value: 'Please Input'}, {key: 'style', value: 'color: #108ee9;'}, {key: ':inputStyle', value: `{color: '#108ee9'}`}]"></start-tag><end-tag name="atom-inputItem"></end-tag><br/>// 设置input类型<br/><start-tag name="atom-inputItem" :attrs="[{key: 'title', value: '默认标题'}, {key: 'placeholder', value: 'Please Input'}, {key: 'type', value: 'number'}]"></start-tag><end-tag name="atom-inputItem"></end-tag><br/>// 设置对齐<br/><start-tag name="atom-inputItem" :attrs="[{key: 'title', value: '默认标题'}, {key: 'placeholder', value: 'Please Input'}, {key: 'align', value: 'right'}]"></start-tag><end-tag name="atom-inputItem"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="inputItem"></mobile>
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
        desc: '绑定input输入值',
        type: 'String',
        default: '无'
      },
      {
        name: 'title',
        desc: '设置标题',
        type: 'String',
        default: '无'
      },
      {
        name: 'placeholder',
        desc: '设置input的placeholder属性',
        type: 'String',
        default: '无'
      },
      {
        name: 'type',
        desc: '设置input的type属性, 限制输入的类型',
        type: 'String',
        default: '无'
      },
      {
        name: 'align',
        desc: '设置input的文本对齐，可选值 left / center / right',
        type: 'String',
        default: 'left'
      },
      {
        name: 'actionStyle',
        desc: '设置点击效果',
        type: 'Object',
        default: '{background: "#f7f8f9"}'
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
.inputItem-doc {
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
