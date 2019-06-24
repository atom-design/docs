<template>
  <div class="searchBar-doc">
    <div class="demo-wrapper clearfix">
      <div class="doc-demo">
        <doc-title title="Carousel 轮播" desc="用于依次轮播内容"><a class="a-link" href="https://atom-design.github.io/mobile/#/carousel/">此测试案例请在移动模式/设备打开</a></doc-title>
        <doc-code title="按需引入（全部引入无需此步骤）"><span class="blue">import</span> { Carousel } <span class="blue">from</span> 'atom-design';<br/>Vue.component(Carousel.name, Carousel);</doc-code>
        <doc-code title="例子">// 基本用法<br/><start-tag name="atom-carousel" :attrs="[{key: 'placeholder', value: 'Please Input'}, {key: 'v-model', value: 'carouselVal'}]"></start-tag><br/>  // 自定义内容，每个一级子节点为一个轮播滑块<br/>  <start-tag name="div" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag><end-tag name="div"></end-tag><br/>  <start-tag name="img" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag><end-tag name="img"></end-tag><br/>  <start-tag name="form" :attrs="[{key: 'class', value: 'custom class'}]"></start-tag><end-tag name="form"></end-tag><br/><end-tag name="atom-carousel"></end-tag><br/>
        </doc-code>
      </div>
      <mobile routerName="carousel"></mobile>
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
        desc: '绑定carousel轮播序号 (初始值不为0则按绑定值来显示轮播序号对应的轮播滑块)',
        type: 'Number',
        default: '0'
      },
      {
        name: 'loop',
        desc: '是否循环',
        type: 'Boolean',
        default: 'false'
      },
      {
        name: 'duration',
        desc: '设置轮播动画过渡时间',
        type: 'Number',
        default: '3e2'
      },
      {
        name: 'auto',
        desc: '是否自动轮播',
        type: 'Boolean',
        default: 'false'
      },
      {
        name: 'time',
        desc: '设置自动轮播间隔时间',
        type: 'Number',
        default: '3e3'
      },
      {
        name: 'pagination',
        desc: '是否显示分页（可通过v-model绑定轮播序号来自定义分页）',
        type: 'Boolean',
        default: 'false'
      },
      {
        name: 'isLock',
        desc: '是否锁定手势, 手势被锁定则无法通过手势切换',
        type: 'Boolean',
        default: 'false'
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
