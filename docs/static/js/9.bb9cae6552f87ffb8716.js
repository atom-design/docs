webpackJsonp([9],{"4iop":function(e,t){},Yhlz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("rIn1"),s=a("BYCM"),l=a("lur8"),n=a("KGfb"),o=a("EUxI"),d=a("acEc"),c={data:function(){return{apiList:[{name:"v-model",desc:"绑定textarea输入的值",type:"String",default:"无"},{name:"placeholder",desc:"设置textarea的placeholder属性",type:"String",default:"无"},{name:"maxLength",desc:"设置限制输入的长度",type:"Number",default:"无"},{name:"type",desc:"设置textarea的type属性, 限制输入的类型",type:"String",default:"无"},{name:"style",desc:"自定义样式",type:"String",default:"无"}]}},components:{mobile:r.a,docApi:s.a,docTitle:l.a,docCode:n.a,startTag:o.a,endTag:d.a}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"textarea-doc"},[a("div",{staticClass:"demo-wrapper clearfix"},[a("div",{staticClass:"doc-demo"},[a("doc-title",{attrs:{title:"Textarea 区域输入",desc:"用于多行文本输入"}}),e._v(" "),a("doc-code",{attrs:{title:"导入"}},[a("span",{staticClass:"blue"},[e._v("import")]),e._v(" { Textarea } "),a("span",{staticClass:"blue"},[e._v("from")]),e._v(" 'atom-design';"),a("br"),e._v("Vue.component(Textarea.name, Textarea);")]),e._v(" "),a("doc-code",{attrs:{title:"例子"}},[e._v("// 基本用法"),a("br"),a("start-tag",{attrs:{name:"atom-textarea",attrs:[{key:"placeholder",value:"Please Input"},{key:"v-model",value:"textareaVal"}]}}),a("end-tag",{attrs:{name:"atom-textarea"}}),a("br"),e._v("// 限制输入"),a("br"),a("start-tag",{attrs:{name:"atom-textarea",attrs:[{key:"placeholder",value:"Please Input"},{key:":maxLength",value:"10"}]}}),a("end-tag",{attrs:{name:"atom-textarea"}}),a("br"),e._v("// 自定义样式"),a("br"),a("start-tag",{attrs:{name:"atom-textarea",attrs:[{key:"title",value:"默认标题"},{key:"placeholder",value:"Please Input"},{key:"style",value:"height: 100px; box-shadow: 0 3px 10px blue;"}]}}),a("end-tag",{attrs:{name:"atom-textarea"}}),a("br")],1)],1),e._v(" "),a("mobile",{attrs:{routerName:"textarea"}})],1),e._v(" "),a("doc-api",{attrs:{apiList:e.apiList}})],1)},staticRenderFns:[]};var p=a("C7Lr")(c,i,!1,function(e){a("4iop")},"data-v-7694d223",null);t.default=p.exports}});