webpackJsonp([26],{DAmJ:function(t,a){},sVm1:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("rIn1"),c=e("BYCM"),i=e("lur8"),o=e("KGfb"),r=e("EUxI"),n=e("acEc"),d={data:function(){return{apiList:[{name:"v-model",desc:"绑定switch值",type:"Boolean",default:"无"},{name:"color",desc:"设置switch的主颜色",type:"String",default:"#108ee9"}]}},components:{mobile:s.a,docApi:c.a,docTitle:i.a,docCode:o.a,startTag:r.a,endTag:n.a}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"switch-doc"},[e("div",{staticClass:"demo-wrapper clearfix"},[e("div",{staticClass:"doc-demo"},[e("doc-title",{attrs:{title:"Switch 开关",desc:"通过两互斥对象进行控制开关"}}),t._v(" "),e("doc-code",{attrs:{title:"按需引入（全部引入无需此步骤）"}},[e("span",{staticClass:"blue"},[t._v("import")]),t._v(" { Switch } "),e("span",{staticClass:"blue"},[t._v("from")]),t._v(" 'atom-design';"),e("br"),t._v("Vue.component(Switch.name, Switch);")]),t._v(" "),e("doc-code",{attrs:{title:"例子"}},[t._v("// v-model绑定Boolean类型变量控制"),e("br"),e("start-tag",{attrs:{name:"atom-switch",attrs:[{key:"v-model",value:"switchVar"}]}}),e("end-tag",{attrs:{name:"atom-switch"}}),e("br"),t._v("// 自定义颜色"),e("br"),e("start-tag",{attrs:{name:"atom-switch",attrs:[{key:"v-model",value:"switchVar"},{key:"color",value:"#ff9933"}]}}),e("end-tag",{attrs:{name:"atom-switch"}})],1)],1),t._v(" "),e("mobile",{attrs:{routerName:"switch"}})],1),t._v(" "),e("doc-api",{attrs:{apiList:t.apiList}})],1)},staticRenderFns:[]};var m=e("C7Lr")(d,l,!1,function(t){e("DAmJ")},"data-v-0a34c742",null);a.default=m.exports}});