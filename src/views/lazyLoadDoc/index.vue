<template>
  <div class="lazyload-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Lazy Load 图片懒加载" desc="通过设置指令来懒加载图片"></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Lazyload } <span class="blue">from</span> 'atom-design';<br/>Vue.directive('lazyload', Lazyload);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="ul" :attrs="[]"></start-tag><br/> // 懒加载指令<br/>  <start-tag name="img" :attrs="[{key: 'v-for', value: '(item, index) in dataList'}, {key: ':key', value: 'index'}, {key: 'v-lazyload', value: '图片路径'}, {key: 'loading', value: 'loding.gif'}]"></start-tag><end-tag name="img"></end-tag><br/><end-tag name="ul"></end-tag><br/>// 设置未加载时的默认图片的样式<br/>img[loaded=false] {<br/>  width: 30px;<br/>  height: 200px;<br/>  margin: auto;<br/>}<br/>// 设置加载完成时图片样式<br/>img[loaded=true] {<br/>  width: 100%;<br/>  height: 200px;<br/>}</doc-code>
      </div>
      <mobile routerName="lazyLoad"></mobile>
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
        name: 'v-lazyload',
        desc: '将scr替换为v-lazyload, 让插件处理图片懒加载',
        type: 'String',
        default: '无'
      },
      {
        name: 'loading',
        desc: '设置未加载图片时的默认图片路径',
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
.lazyload-doc {
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
