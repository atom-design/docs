<template>
  <div class="searchBar-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="SearchBar 搜索条" desc="用于搜索数据"></doc-title>
        <doc-code title="导入"><span class="blue">import</span> { SearchBar } <span class="blue">from</span> 'atom-design';<br/>Vue.component(SearchBar.name, SearchBar);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="atom-searchBar" :attrs="[{key: 'placeholder', value: 'Please Input'}, {key: 'v-model', value: 'searchVal'}]"></start-tag><end-tag name="atom-searchBar"></end-tag><br/>// 无清空按钮<br/><start-tag name="atom-searchBar" :attrs="[{key: 'placeholder', value: 'Please Input'}, {key: ':isClear', value: 'false'}]"></start-tag><end-tag name="atom-searchBar"></end-tag><br/>// 自定义样式<br/><start-tag name="atom-searchBar" :attrs="[{key: 'placeholder', value: 'Please Input'}, {key: 'style', value: 'background: rgba(0, 0, 0, 0.8); color: white'}]"></start-tag><end-tag name="atom-searchBar"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="searchBar"></mobile>
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
        desc: '绑定searchBar输入的值',
        type: 'String',
        default: '无'
      },
      {
        name: 'placeholder',
        desc: '设置searchBar的placeholder属性',
        type: 'String',
        default: '无'
      },
      {
        name: 'isClear',
        desc: '是否允许清空按钮',
        type: 'Boolean',
        default: 'true'
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
.searchBar-doc {
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
