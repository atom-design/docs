webpackJsonp([15],{O5hy:function(t,a){},piTM:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("rIn1"),n=e("BYCM"),s=e("lur8"),i=e("KGfb"),o=e("EUxI"),l=e("acEc"),c={data:function(){return{apiList:[{name:"type",desc:"设置按钮类型,可选值primary/danger/warning",type:"String",default:"primary"},{name:"size",desc:"设置按钮大小,可选值large/small",type:"String",default:"large"},{name:"actionStyle",desc:"设置点击效果",type:"Object",default:'{background: "#f7f8f9"}'},{name:"style",desc:"自定义样式",type:"String",default:"无"}]}},components:{mobile:r.a,docApi:n.a,docTitle:s.a,docCode:i.a,startTag:o.a,endTag:l.a}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"button-doc"},[e("div",{staticClass:"demo-wrapper clearfix"},[e("div",{staticClass:"doc-demo"},[e("doc-title",{attrs:{title:"Button 按钮",desc:"可自定义样式、点击效果的按钮 (ps: 按钮上的事件需加上native修饰符)"}},[e("a",{staticClass:"a-link",attrs:{href:"https://atom-design.github.io/mobile/#/button/"}},[t._v("此测试案例请在移动模式/设备打开")])]),t._v(" "),e("doc-code",{attrs:{title:"按需引入（全部引入无需此步骤）"}},[e("span",{staticClass:"blue"},[t._v("import")]),t._v(" { Button } "),e("span",{staticClass:"blue"},[t._v("from")]),t._v(" 'atom-design';"),e("br"),t._v("Vue.component(Button.name, Button);")]),t._v(" "),e("doc-code",{attrs:{title:"例子"}},[t._v("// 默认类型primary,默认大小large"),e("br"),e("start-tag",{attrs:{name:"atom-btn",attrs:[{key:"type",value:"primary"},{key:"size",value:"large"}]}}),t._v("Primary"),e("end-tag",{attrs:{name:"atom-btn"}}),e("br"),t._v("// 设置类型和大小"),e("br"),e("start-tag",{attrs:{name:"atom-btn",attrs:[{key:"type",value:"danger"},{key:"size",value:"small"}]}}),t._v("Danger"),e("end-tag",{attrs:{name:"atom-btn"}}),e("br"),t._v("// 自定义点击效果"),e("br"),e("start-tag",{attrs:{name:"atom-btn",attrs:[{key:":actionStyle",value:"{background: 'blue', color: 'white'}"}]}}),t._v("Primary"),e("end-tag",{attrs:{name:"atom-btn"}})],1)],1),t._v(" "),e("mobile",{attrs:{routerName:"button"}})],1),t._v(" "),e("doc-api",{attrs:{apiList:t.apiList}})],1)},staticRenderFns:[]};var m=e("C7Lr")(c,d,!1,function(t){e("O5hy")},"data-v-6338f9de",null);a.default=m.exports}});