<template>
  <div class="range-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Range 区域选择" desc="用于在指定区间里进行滑动选择"><a class="a-link" href="https://atom-design.github.io/mobile/#/range/">此测试案例请在移动模式/设备打开</a></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { Range } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Range.name, Range);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="atom-range" :attrs="[{key: 'v-model', value: 'RangeVal'}]"></start-tag><end-tag name="atom-range"></end-tag><br/>// 设置区间<br/><start-tag name="atom-range" :attrs="[{key: ':min', value: '10'}, {key: ':max', value: '90'}]"></start-tag><end-tag name="atom-range"></end-tag><br/>// 取消提示<br/><start-tag name="atom-range" :attrs="[{key: ':isIndicator', value: 'false'}]"></start-tag><end-tag name="atom-range"></end-tag><br/>// 自定义颜色<br/><start-tag name="atom-range" :attrs="[{key: 'color', value: '#dd2622'}]"></start-tag><end-tag name="atom-range"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="range"></mobile>
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
        desc: '绑定range选择的值',
        type: 'Number',
        default: '无'
      },
      {
        name: 'min',
        desc: '设置range选择区间最小值',
        type: 'Number',
        default: '0'
      },
      {
        name: 'max',
        desc: '设置range选择区间最大值',
        type: 'Number',
        default: '100'
      },
      {
        name: 'isIndicator',
        desc: '是否显示提示',
        type: 'Boolean',
        default: 'true'
      },
      {
        name: 'color',
        desc: '修改颜色',
        type: 'String',
        default: '#108ee9'
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
.range-doc {
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
