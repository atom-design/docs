<template>
  <div class="textarea-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Textarea 区域输入" desc="用于多行文本输入"></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Textarea } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Textarea.name, Textarea);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="atom-textarea" :attrs="[{key: 'placeholder', value: 'Please Input'}, {key: 'v-model', value: 'textareaVal'}]"></start-tag><end-tag name="atom-textarea"></end-tag><br/>// 限制输入<br/><start-tag name="atom-textarea" :attrs="[{key: 'placeholder', value: 'Please Input'}, {key: ':maxLength', value: '10'}]"></start-tag><end-tag name="atom-textarea"></end-tag><br/>// 自定义样式<br/><start-tag name="atom-textarea" :attrs="[{key: 'title', value: '默认标题'}, {key: 'placeholder', value: 'Please Input'}, {key: 'style', value: 'height: 100px; box-shadow: 0 3px 10px blue;'}]"></start-tag><end-tag name="atom-textarea"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="textarea"></mobile>
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
        desc: '绑定textarea输入的值',
        type: 'String',
        default: '无'
      },
      {
        name: 'placeholder',
        desc: '设置textarea的placeholder属性',
        type: 'String',
        default: '无'
      },
      {
        name: 'maxLength',
        desc: '设置限制输入的长度',
        type: 'Number',
        default: '无'
      },
      {
        name: 'type',
        desc: '设置textarea的type属性, 限制输入的类型',
        type: 'String',
        default: '无'
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
.textarea-doc {
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
