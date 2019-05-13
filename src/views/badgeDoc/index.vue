<template>
  <div class="badge-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Badge 徽章" desc="用于通知用户未处理的任务数量"></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { Badge } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Badge.name, Badge);</doc-code>
        <doc-code title="例子">// 默认类型primary<br/><start-tag name="atom-badge" :attrs="[{key: 'type', value: 'primary'}]"></start-tag>1<end-tag name="atom-badge"></end-tag><br/>// 自定义样式<br/><start-tag name="atom-badge" :attrs="[{key: 'style', value: 'width: 20px; border-radius: 100%; padding: 0;'}, {key: 'type', value: 'danger'}]"></start-tag><end-tag name="atom-badge"></end-tag>
        </doc-code>
      </div>
      <mobile routerName="badge"></mobile>
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
        name: 'type',
        desc: '徽章类型,可选值primary/warning/danger',
        type: 'String',
        default: 'primary'
      },
      {
        name: 'style',
        desc: '自定义徽章样式',
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
.badge-doc {
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
