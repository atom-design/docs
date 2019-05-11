webpackJsonp([25],{EX1Z:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("rIn1"),n=e("BYCM"),s=e("lur8"),o=e("KGfb"),i=e("EUxI"),d=e("acEc"),m={data:function(){return{apiList:[{name:"v-model",desc:"绑定range选择的值",type:"Number",default:"无"},{name:"min",desc:"设置range选择区间最小值",type:"Number",default:"0"},{name:"max",desc:"设置range选择区间最大值",type:"Number",default:"100"},{name:"isIndicator",desc:"是否显示提示",type:"Boolean",default:"true"},{name:"color",desc:"修改颜色",type:"String",default:"#108ee9"}]}},components:{mobile:r.a,docApi:n.a,docTitle:s.a,docCode:o.a,startTag:i.a,endTag:d.a}},c={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"range-doc"},[e("div",{staticClass:"demo-wrapper clearfix"},[e("div",{staticClass:"doc-demo"},[e("doc-title",{attrs:{title:"Range 区域选择",desc:"用于在指定区间里进行滑动选择"}},[e("a",{staticClass:"a-link",attrs:{href:"https://atom-design.github.io/mobile/#/range/"}},[a._v("此测试案例请在移动模式/设备打开")])]),a._v(" "),e("doc-code",{attrs:{title:"导入"}},[e("span",{staticClass:"blue"},[a._v("import")]),a._v(" { Range } "),e("span",{staticClass:"blue"},[a._v("from")]),a._v(" 'atom-design';"),e("br"),a._v("Vue.component(Range.name, Range);")]),a._v(" "),e("doc-code",{attrs:{title:"例子"}},[a._v("// 基本用法"),e("br"),e("start-tag",{attrs:{name:"atom-range",attrs:[{key:"v-model",value:"RangeVal"}]}}),e("end-tag",{attrs:{name:"atom-range"}}),e("br"),a._v("// 设置区间"),e("br"),e("start-tag",{attrs:{name:"atom-range",attrs:[{key:":min",value:"10"},{key:":max",value:"90"}]}}),e("end-tag",{attrs:{name:"atom-range"}}),e("br"),a._v("// 取消提示"),e("br"),e("start-tag",{attrs:{name:"atom-range",attrs:[{key:":isIndicator",value:"false"}]}}),e("end-tag",{attrs:{name:"atom-range"}}),e("br"),a._v("// 自定义颜色"),e("br"),e("start-tag",{attrs:{name:"atom-range",attrs:[{key:"color",value:"#dd2622"}]}}),e("end-tag",{attrs:{name:"atom-range"}}),e("br")],1)],1),a._v(" "),e("mobile",{attrs:{routerName:"range"}})],1),a._v(" "),e("doc-api",{attrs:{apiList:a.apiList}})],1)},staticRenderFns:[]};var l=e("C7Lr")(m,c,!1,function(a){e("iRoQ")},"data-v-10511d34",null);t.default=l.exports},iRoQ:function(a,t){}});