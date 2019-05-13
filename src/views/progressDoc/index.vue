<template>
  <div class="progress-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Progress 进度条" desc="显示进度"></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { Progress } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Progress.name, Progress);</doc-code>
        <doc-code title="例子">// v-model绑定进度（范围0~100）<br/><start-tag name="atom-progress" :attrs="[{key: 'v-model', value: 'progressVar'}]"></start-tag><end-tag name="atom-progress"></end-tag><br/>// 自定义颜色<br/><start-tag name="atom-progress" :attrs="[{key: 'v-model', value: 'progressVar'}, {key: 'color', value: '#ff9933'}]"></start-tag><end-tag name="atom-progress"></end-tag><br/>// 自定义线高<br/><start-tag name="atom-progress" :attrs="[{key: 'v-model', value: 'progressVar'}, {key: 'lineHeight', value: '5px'}]"></start-tag><end-tag name="atom-progress"></end-tag>
        </doc-code>
    </div>
    <mobile routerName="progress"></mobile>
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
        desc: '绑定progress值',
        type: 'Number',
        default: '无'
      },
      {
        name: 'color',
        desc: '自定义progress的颜色',
        type: 'String',
        default: '#108ee9'
      },
      {
        name: 'lineHeight',
        desc: '自定义线高',
        type: 'String',
        default: '2px'
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
.progress-doc {
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
