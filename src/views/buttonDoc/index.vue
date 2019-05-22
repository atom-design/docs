<template>
  <div class="button-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Button 按钮" desc="可自定义样式、点击效果的按钮 (ps: 按钮上的事件需加上native修饰符)"><a class="a-link" href="https://atom-design.github.io/mobile/#/button/">此测试案例请在移动模式/设备打开</a></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Button } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Button.name, Button);</doc-code>
        <doc-code title="例子">// 默认类型primary,默认大小large<br/><start-tag name="atom-btn" :attrs="[{key: 'type', value: 'primary'}, {key: 'size', value: 'large'}]"></start-tag>Primary<end-tag name="atom-btn"></end-tag><br/>// 设置类型和大小<br/><start-tag name="atom-btn" :attrs="[{key: 'type', value: 'danger'}, {key: 'size', value: 'small'}]"></start-tag>Danger<end-tag name="atom-btn"></end-tag><br/>// 自定义点击效果<br/><start-tag name="atom-btn" :attrs="[{key: ':actionStyle', value: `{background: 'blue', color: 'white'}`}]"></start-tag>Primary<end-tag name="atom-btn"></end-tag>
        </doc-code>
      </div>
      <mobile routerName="button"></mobile>
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
        desc: '设置按钮类型,可选值primary/danger/warning',
        type: 'String',
        default: 'primary'
      },
      {
        name: 'size',
        desc: '设置按钮大小,可选值large/small',
        type: 'String',
        default: 'large'
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
.button-doc {
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
