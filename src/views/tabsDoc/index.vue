<template>
  <div class="tabs-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Tabs 标签导航" desc="基于carousel组件实现, 用于通过标签切换页面"><a class="a-link" href="https://atom-design.github.io/mobile/#/tabs/">此测试案例请在移动模式/设备打开</a></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { Tabs } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Tabs.name, Tabs);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="atom-tabs" :attrs="[{key: 'v-model', value: 'selIdx'}, {key: ':isGesture', value: '是否允许手势滑动'}, {key: ':duration', value: '设置动画过渡时间(ms)'}]"></start-tag><br/>  // 设置为顶部导航栏<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: 'slot', value: 'navbar'}]"></start-tag><br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: '@click', value: 'selIdx = 0'}]"></start-tag><end-tag name="div"></end-tag><br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: '@click', value: 'selIdx = 1'}]"></start-tag><end-tag name="div"></end-tag><br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: '@click', value: 'selIdx = 2'}]"></start-tag><end-tag name="div"></end-tag><br/>  <end-tag name="div"></end-tag><br/>  // selIdx设置为0切换至此内容<br/>    <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag><end-tag name="div"></end-tag><br/>  // selIdx设置为1切换至此内容<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag><end-tag name="div"></end-tag><br/>  // selIdx设置为2切换至此内容<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag><end-tag name="div"></end-tag><br/><end-tag name="atom-tabs"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="tabs"></mobile>
    </div>
    <doc-api :apiList="apiList" desc="一级子节点必须设置一个插槽名为navbar, 否则组件不生效; 一级子节点navbar命名的导航栏除外的都被当成内容节点, 内容节点序号从0开始, v-model控制组件会自动切换内容节点, 无需手动实现切换逻辑"></doc-api>
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
        desc: '绑定Drawer内容页序号, 序号从0开始',
        type: 'Number',
        default: '无'
      },
      {
        name: 'isGesture',
        desc: '是否允许手势滑动',
        type: 'Boolean',
        default: 'true'
      },
      {
        name: 'duration',
        desc: '设置动画过渡时间, 单位ms',
        type: 'Number',
        default: '3e2'
      },
      {
        name: 'slot',
        desc: '设置一级子节点插槽名指定为导航栏, 值为navbar; 导航栏子节点外的一级子节点都当作内容',
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
.tabs-doc {
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
