<template>
  <doc-api :isTitle="false" :apiList="btnApiList" desc="按钮配置表, 格式 {text: String, style: Stirng, actionStyle: Object, event: Function}"></doc-api>
</template>

<script type="text/javascript">
import docApi from '@/components/docApi.vue'
export default {
  data () {
    return {
      btnApiList: [{
        name: 'text',
        desc: '按钮文本',
        type: 'String',
        default: '无'
      },
      {
        name: 'style',
        desc: '按钮样式',
        type: 'String',
        default: '无'
      },
      {
        name: 'actionStyle',
        desc: '按钮点击效果',
        type: 'Object',
        default: '{background: "#f7f8f9"}'
      },
      {
        name: 'event',
        desc: '点击事件回调方法 (prompt中回调方法第一个参数为输入的数据)',
        type: 'Function',
        default: '无'
      }]
    }
  },
  components: {
    docApi
  }
}
</script>