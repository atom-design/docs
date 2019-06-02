<template>
  <div class="loadmore-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Load More 滚动加载数据" desc="通过设置指令来加载数据"></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Loadmore } <span class="blue">from</span> 'atom-design';<br/>Vue.directive('loadmore', Loadmore);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="ul" :attrs="[{key: 'v-loadmore', value: 'loadMore'}, {key: 'distance', value: '设置距离滚动完剩余多少px触发loadMore'}]"></start-tag><br/>  <start-tag name="li" :attrs="[{key: 'v-for', value: '(item, index) in dataList'}, {key: ':key', value: 'index'}, {key: 'v-text', value: 'index'}]"></start-tag><end-tag name="li"></end-tag><br/><end-tag name="ul"></end-tag><br/>// loadMore处理数据加载<br/>loadMore () {<br/>  Array.prototype.push(this.dataList, nextList)<br/>}</doc-code>
      </div>
      <mobile routerName="loadMore"></mobile>
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
        name: 'v-loadmore',
        desc: '设置需要滚动加载数据的容器, 以及滚动触发加载的方法',
        type: 'String',
        default: '无'
      },
      {
        name: 'distance',
        desc: '设置距离滚动完剩余多少px触发loadMore',
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
.loadmore-doc {
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
