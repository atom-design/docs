<template>
  <div class="slideItem-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="SlideItem 滑动条" desc="通过左右滑动来显示操作项"><a class="a-link" href="https://atom-design.github.io/mobile/#/slideItem/">此测试案例请在移动模式/设备打开</a></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Slideitem } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Slideitem.name, Slideitem);</doc-code>
        <doc-code title="例子">// 基本用法, 需要滑动显示的操作项需用slot来设置插槽名称<br/><start-tag name="atom-slide-item" :attrs="[{key: 'v-model', value: 'slideCtrl'}]"></start-tag><br/>// 操作项必须有一层插槽命名(leftAction/rightAction)的标签包裹<br/><start-tag name="div" :attrs="[{key: 'slot', value: 'leftAction'}]"></start-tag><br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag>查看<end-tag name="div"></end-tag><br/><end-tag name="div"></end-tag><br/><start-tag name="div" :attrs="[{key: 'slot', value: 'rightAction'}]"></start-tag><br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag>删除<end-tag name="div"></end-tag><br/><end-tag name="div"></end-tag><br/><end-tag name="atom-slide-item"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="slideItem"></mobile>
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
        desc: '控制slideItem的开关',
        type: 'Boolean',
        default: 'false'
      },
      {
        name: 'slot',
        desc: '需要在一级子节点指定滑动操作项的插槽名，否则手势滑动不起作用, 可选值leftAction (左边滑动操作项), rightAction (右边滑动操作项)',
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
.slideItem-doc {
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
