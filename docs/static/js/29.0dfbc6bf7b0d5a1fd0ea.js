webpackJsonp([29],{"1uJz":function(t,a){},e0t3:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("rIn1"),r=e("BYCM"),d=e("lur8"),n=e("KGfb"),c=e("EUxI"),l=e("acEc"),i={data:function(){return{apiList:[{name:"style",desc:"自定义样式",type:"String",default:"无"},{name:"slot",desc:"需要在一级子节点指定布局位置，可选值left / center / right",type:"String",default:"无"}]}},components:{mobile:s.a,docApi:r.a,docTitle:d.a,docCode:n.a,startTag:c.a,endTag:l.a}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header-doc"},[e("div",{staticClass:"demo-wrapper clearfix"},[e("div",{staticClass:"doc-demo"},[e("doc-title",{attrs:{title:"Header 头部导航栏",desc:"通过设置一级子节点的插槽名来布局导航栏"}}),t._v(" "),e("doc-code",{attrs:{title:"按需引入（全部引入无需此步骤）"}},[e("span",{staticClass:"blue"},[t._v("import")]),t._v(" { Header } "),e("span",{staticClass:"blue"},[t._v("from")]),t._v(" 'atom-design';"),e("br"),t._v("Vue.component(Header.name, Header);")]),t._v(" "),e("doc-code",{attrs:{title:"例子"}},[t._v("// 基本用法"),e("br"),e("start-tag",{attrs:{name:"atom-header",attrs:[{key:"style",value:"自定义样式"}]}}),e("br"),t._v("  // 布局至左边"),e("br"),t._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"},{key:"slot",value:"left"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),t._v("  // 布局至右边"),e("br"),t._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"},{key:"slot",value:"right"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),t._v("  // 布局至中间 "),e("br"),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"},{key:"slot",value:"center"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),e("end-tag",{attrs:{name:"atom-header"}}),e("br")],1)],1),t._v(" "),e("mobile",{attrs:{routerName:"header"}})],1),t._v(" "),e("doc-api",{attrs:{apiList:t.apiList}})],1)},staticRenderFns:[]};var v=e("C7Lr")(i,o,!1,function(t){e("1uJz")},"data-v-02632012",null);a.default=v.exports}});