<template>
  <div class="loading-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Loading 加载" desc="加载等待"></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Loading } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Loading.name, Loading);</doc-code>
        <doc-code title="例子">// 默认类型<br/><start-tag name="atom-loading" :attrs="[{key: ':type', value: '0'}]"></start-tag><end-tag name="atom-loading"></end-tag><br/>// 自定义radius<br/><start-tag name="atom-loading" :attrs="[{key: ':type', value: '3'}, {key: 'radius', value: '100%'}]"></start-tag><end-tag name="atom-loading"></end-tag><br/>// 自定义颜色<br/><start-tag name="atom-loading" :attrs="[{key: ':type', value: '1'}, {key: 'color', value: '#48D1CC'}]"></start-tag><end-tag name="atom-loading"></end-tag><br/>
        </doc-code>
    </div>
    <mobile routerName="loading"></mobile>
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
        desc: '设置loading类型',
        type: 'Number',
        default: '0'
      },
      {
        name: 'color',
        desc: '设置loading的主颜色',
        type: 'String',
        default: '#108ee9'
      },
      {
        name: 'radius',
        desc: '设置类型2~7loading中的圆角半径（类型0和1无此属性）',
        type: 'String',
        default: 'none'
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
.loading-doc {
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
