<template>
  <div class="pull-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Pull Gesture 上拉下拉手势" desc="通过上下拉动来做更新、加载事件"><a class="a-link" href="https://atom-design.github.io/mobile/#/pullGesture/">此测试案例请在移动模式/设备打开</a></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Pull } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Pull.name, Pull);</doc-code>
        <doc-code title="例子">// 基本用法, 需要上下拉动显示的提示项需用slot来指定插槽名称<br/><start-tag name="atom-pull" :attrs="[{key: 'height', value: '指定组件高度'}, {key: 'action', value: '指定动作, 默认both'}, {key: ':maxTopMove', value: '下拉最高高度(px)'}, {key: ':maxBotMove', value: '上拉最高高度(px)'}, {key: ':delay', value: '提示停留时间(ms)'}, {key: '@promptDisplay', value: '提示信息完全显示触发'}, {key: '@touchEnd', value: '拉动放开时触发'}, {key: '@pullEnd', value: '完全执行结束时触发'}]"></start-tag><br/>  // 顶部提示项<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: 'slot', value: 'promptTop'}]"></start-tag><end-tag name="div"></end-tag><br/>  // 底部提示项<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: 'slot', value: 'promptBottom'}]"></start-tag><end-tag name="div"></end-tag><br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag><end-tag name="div"></end-tag><br/><end-tag name="atom-pull"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="pullGesture"></mobile>
    </div>
    <doc-api :apiList="apiList" desc="使用此组件需通过height属性, 或者在atom-pull标签中设置style/class来设置组件高度，未设置高度则上下拉动不起作用"></doc-api>
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
        name: 'height',
        desc: '设置组件高度',
        type: 'String',
        default: '无'
      },
      {
        name: 'action',
        desc: '设置拉动的类型, 可选值pulldown(下拉), pullup(上拉), both(上拉和下拉)',
        type: 'String',
        default: 'both'
      },
      {
        name: ':maxTopMove',
        desc: '设置下拉最高高度, 单位px',
        type: 'Number',
        default: '无'
      },
      {
        name: ':maxBotMove',
        desc: '设置上拉拉最高高度, 单位px',
        type: 'Number',
        default: '无'
      },
      {
        name: ':delay',
        desc: '设置松开手势时提示停留时间, 单位ms',
        type: 'Number',
        default: '3e2'
      },
      {
        name: 'slot',
        desc: '需要在一级子节点指定拉动提示项的插槽名，否则提示将不起作用, 可选值promptTop (顶部提示项), promptBottom (底部提示项)',
        type: 'String',
        default: '无'
      },
      {
        name: '@promptDisplay',
        desc: '提示信息完全显示触发此事件',
        type: 'Function',
        default: '无'
      },
      {
        name: '@touchEnd',
        desc: '拉动放开时触发此事件',
        type: 'Function',
        default: '无'
      },
      {
        name: '@pullEnd',
        desc: '完全执行结束时触发此事件',
        type: 'Function',
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
.pull-doc {
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
