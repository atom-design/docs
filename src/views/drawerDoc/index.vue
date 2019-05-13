<template>
  <div class="drawer-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Drawer 抽屉" desc="通过设置一级子节点的插槽名navbar指定导航栏，插槽名content指定内容来设置边缘导航栏, 用于边缘显示导航栏"></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { Drawer } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Drawer.name, Drawer);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="atom-drawer" :attrs="[{key: 'v-model', value: 'drawerVal'}, {key: 'type', value: 'build-in'}]"></start-tag><br/>  // 指定为导航菜单栏<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: 'slot', value: 'navbar'}]"></start-tag><end-tag name="div"></end-tag><br/>  // 指定为内容页<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}, {key: 'slot', value: 'content'}]"></start-tag><end-tag name="div"></end-tag><br/><end-tag name="atom-drawer"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="drawer"></mobile>
    </div>
    <doc-api :apiList="apiList" desc="一级子节点必须指定插槽名为navbar的导航栏和插槽名为content的内容, 否则组件不生效"></doc-api>
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
        desc: '控制Drawer导航栏显示开关',
        type: 'Boolean',
        default: 'false'
      },
      {
        name: 'type',
        desc: '设置Drawer类型，可选值build-in (内嵌) / popup (弹出)',
        type: 'String',
        default: 'build-in'
      },
      {
        name: 'slot',
        desc: '用于一级子节点, 设置导航栏的插槽名, 可选值navbar （导航栏）/ content (内容)',
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
.drawer-doc {
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
