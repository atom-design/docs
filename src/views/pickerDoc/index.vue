<template>
  <div class="picker-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Picker 选择器" desc="用于提供给用户选择数据"><a class="a-link" href="https://atom-design.github.io/mobile/#/picker/">此测试案例请在移动模式/设备打开</a></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Picker } <span class="blue">from</span> 'atom-design';</doc-code>
        <doc-code title="例子">// 按需引入<br/><span class="blue">Picker</span>(options:Object);<br/>// 全部引入<br/><span class="yellow">this</span>.<span class="blue">$picker</span>(options:Object);<br/><br/>// 基础用法<br/><span class="blue">Picker</span>({<br/>  list: [{<br/>    text: '<span class="red">2019</span>',<br/>    childrens: [1, 2, 3, ...]<br/>  },<br/>  {<br/>    text: '<span class="red">2020</span>'<br/>    childrens: [1, 2, 3, ...]<br/>  }, ...],<br/>  cancelBtn: <span class="green"> </span>{<br/>    text: '取消',<br/>    event: (res) => {<br/>    // res为选中的列表数组<br/>    }<br/>  },<br/>  submitBtn: <span class="green"> </span>{<br/>    text: '确认',<br/>    event: (res) => {<br/>    // res选中的列表数组<br/>    }<br/>  }<br/>});<br/>
        </doc-code>
    </div>
    <mobile routerName="picker"></mobile>
  </div>
  <doc-api :apiList="apiList" desc="格式： Picker({list: Array, cancelBtn: Object, submitBtn: Object})"></doc-api>
  <doc-api :isTitle="false" :apiList="btnApiList" desc="按钮配置表, 格式 {text: String, style: Object, actionStyle: Object, event: Function}"></doc-api>
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
        name: 'list',
        desc: '设置Picker的列表, 格式 [{text: String, childrens: [{text: String, childrens: ...}]}, ...]; text设置显示文本, childrens设置下级列表',
        type: 'Array',
        default: '无'
      },
      {
        name: 'cancelBtn',
        desc: '配置取消按钮 (配置详情参考按钮配置表)',
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
        type: 'Object',
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
        desc: '点击事件回调方法, 第一个参数为选中的数据, 参数数据类型： Array',
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
.picker-doc {
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
