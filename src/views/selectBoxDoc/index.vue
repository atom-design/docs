<template>
  <div class="selectBox-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Select Box 选择盒子" desc="用于提供给用户选择操作"></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { SelectBox } <span class="blue">from</span> 'atom-design';</doc-code>
        <doc-code title="例子">// 按需引入<br/><span class="blue">SelectBox</span>(options:Object);<br/>// 全部引入<br/><span class="yellow">this</span>.<span class="blue">$selectBox</span>(options:Object);<br/><br/>// 基础用法<br/><span class="blue">SelectBox</span>({<br/>  list: [{<br/>    text: '<span class="red">选择图片</span>'<br/>  },<br/>  {<br/>    text: '<span class="red">选择联系人</span>'<br/>  }]<br/>}, (msg, index)<span class="green"> => </span>{<br/>  // msg选中的文本,index选中的序号<br/>});<br/>
        </doc-code>
    </div>
    <mobile routerName="selectBox"></mobile>
  </div>
  <doc-api :apiList="apiList" desc="格式： SelectBox({list: Array}, callback)"></doc-api>
</div>
</template>

<script type="text/javascript">
import mobile from '@/components/mobile.vue'
import docApi from '@/components/docApi.vue'
import docTitle from '@/components/docTitle.vue'
import docCode from '@/components/docCode.vue'
export default {
  data () {
    return {
      apiList: [{
        name: 'list',
        desc: '设置selectBox的列表, 格式 [{text: String, style: String}, ...];text设置显示文本, style设置样式',
        type: 'Array',
        default: '无'
      },
      {
        name: 'callback',
        desc: '配置选中的回调, 第一个参数为选中的文本, 第二个参数为选中的序号',
        type: 'Function',
        default: '无'
      }]
    }
  },
  components: {
    mobile,
    docApi,
    docTitle,
    docCode
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
.selectBox-doc {
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
