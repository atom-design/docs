<template>
  <div class="dialogBox-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Dialog Box 对话框" desc="用于与用户交互的弹出框"></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Dialog } <span class="blue">from</span> 'atom-design';</doc-code>
        <doc-code title="例子">// 按需引入<br/>Dialog.<span class="blue">alert</span>('<span class="red">Title</span>', '<span class="red">Discription</span>', options);<br/>// 全部引入<br/><span class="yellow">this</span>.$dialog.<span class="blue">alert</span>('<span class="red">Title</span>', '<span class="red">Discription</span>', options);<br/><br/>// alert<br/>Dialog.<span class="blue">alert</span>('<span class="red">Title</span>', '<span class="red">Description</span>', {<br/>  // 确认按钮配置<br/>  submitBtn: {<br/>    text: 'Ok',<br/><span class="red">    event</span>: () <span class="green">=></span> {<br/>    // handle event<br/>    }<br/>  }<br/>});<br/>// confirm<br/>Dialog.<span class="blue">confirm</span>('<span class="red">Title</span>', '<span class="red">Description</span>', {<br/>  cancelBtn: {<br/>    text: 'Cancel',<br/><span class="red">    event</span>: () <span class="green">=></span> {<br/>    // handle event<br/>    }<br/>  },<br/>  submitBtn: {<br/>    text: 'Ok',<br/><span class="red">    event</span>: () <span class="green">=></span> {<br/>    // handle event<br/>    }<br/>  }<br/>});<br/>// prompt<br/>Dialog.<span class="blue">prompt</span>('<span class="red">Title</span>', '<span class="red">Description</span>', {<br/>  cancelBtn: {<br/>    text: 'Cancel',<br/><span class="red">    event</span>: (val) <span class="green">=></span> {<br/>    // handle event<br/>    }<br/>  },<br/>  submitBtn: {<br/>    text: 'Ok',<br/><span class="red">    event</span>: (val) <span class="green">=></span> {<br/>    // handle event<br/>    }<br/>  }<br/>});
        </doc-code>
    </div>
    <mobile routerName="dialogBox"></mobile>
  </div>
  <doc-api :apiList="apiList" desc="Dialog有三个方法,分别是 Dialog.alert( Title, Description, Config )、Dialog.confirm( Title, Description, Config )、Dialog.prompt( Title, Description, Config )。Title为标题,Description为描述信息,Config参数如下表："></doc-api>
  <doc-api :isTitle="false" :apiList="btnApiList" desc="按钮配置表, 格式 {text: String, style: Stirng, actionStyle: Object, event: Function}"></doc-api>
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
        name: 'clickMaskClose',
        desc: '点击遮罩层是否关闭对话框',
        type: 'Boolean',
        default: 'false'
      },
      {
        name: 'cancelBtn',
        desc: '配置取消按钮(alert无此按钮, 配置详情参考按钮配置表)',
        type: 'Object',
        default: '无'
      },
      {
        name: 'submitBtn',
        desc: '配置确认按钮 (配置详情参考按钮配置表)',
        type: 'Object',
        default: '无'
      }],
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
.dialogBox-doc {
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
