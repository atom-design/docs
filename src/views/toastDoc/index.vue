<template>
  <div class="toast-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Toast 轻提示" desc="用于反馈用户,不中断用户操作的提示信息"></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { Toast } <span class="blue">from</span> 'atom-design';</doc-code>
        <doc-code title="例子">// 简单用法<br/><span class="blue">Toast</span>('<span class="red">提示信息</span>')<br/>// 配置<br/><span class="blue">Toast</span>({message: "<span class="red">提示信息</span>", duration: <span class="red">5e2</span>,  position: "<span class="red">bottom</span>"})
        </doc-code>
    </div>
    <mobile routerName="toast"></mobile>
  </div>
  <doc-api :apiList="apiList"></doc-api>
</div>
</template>

<script type="text/javascript">
import mobile from '@/components/mobile.vue'
import docApi from '@/components/docApi.vue'
import docTitle from '@/components/docTitle.vue'
import docCode from '@/components/docCode.vue'
export default {
  data () {
    return {
      apiList: [{
        name: 'message',
        desc: '提示信息',
        type: 'String',
        default: '无'
      },
      {
        name: 'duration',
        desc: '停留时间,单位ms',
        type: 'Number',
        default: '1e3'
      },
      {
        name: 'position',
        desc: '弹出位置,可选值middle/top/bottom',
        type: 'String',
        default: 'middle'
      }]
    }
  },
  components: {
    mobile,
    docApi,
    docTitle,
    docCode
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
.toast-doc {
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
