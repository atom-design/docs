webpackJsonp([27],{"9i66":function(a,t){},gWbZ:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("rIn1"),i=e("BYCM"),d=e("lur8"),s=e("KGfb"),l=e("EUxI"),o=e("acEc"),n={data:function(){return{apiList:[{name:"v-lazyload",desc:"将scr替换为v-lazyload, 让插件处理图片懒加载",type:"String",default:"无"},{name:"loading",desc:"设置未加载图片时的默认图片路径",type:"String",default:"无"}]}},components:{mobile:r.a,docApi:i.a,docTitle:d.a,docCode:s.a,startTag:l.a,endTag:o.a}},v={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"lazyload-doc"},[e("div",{staticClass:"demo-wrapper clearfix"},[e("div",{staticClass:"doc-demo"},[e("doc-title",{attrs:{title:"Lazy Load 图片懒加载",desc:"通过设置指令来懒加载图片"}}),a._v(" "),e("doc-code",{attrs:{title:"按需引入（全部引入无需此步骤）"}},[e("span",{staticClass:"blue"},[a._v("import")]),a._v(" { LazyLoad } "),e("span",{staticClass:"blue"},[a._v("from")]),a._v(" 'atom-design';"),e("br"),a._v("Vue.use(LazyLoad);")]),a._v(" "),e("doc-code",{attrs:{title:"例子"}},[a._v("// 基本用法"),e("br"),e("start-tag",{attrs:{name:"ul",attrs:[]}}),e("br"),a._v(" // 懒加载指令"),e("br"),a._v(" "),e("start-tag",{attrs:{name:"img",attrs:[{key:"v-for",value:"(item, index) in dataList"},{key:":key",value:"index"},{key:"v-lazyload",value:"图片路径"},{key:"loading",value:"loding.gif"}]}}),e("end-tag",{attrs:{name:"img"}}),e("br"),e("end-tag",{attrs:{name:"ul"}}),e("br"),a._v("// 设置未加载时的默认图片的样式"),e("br"),a._v("img[loaded=false] {"),e("br"),a._v("  width: 30px;"),e("br"),a._v("  height: 200px;"),e("br"),a._v("  margin: auto;"),e("br"),a._v("}"),e("br"),a._v("// 设置加载完成时图片样式"),e("br"),a._v("img[loaded=true] {"),e("br"),a._v("  width: 100%;"),e("br"),a._v("  height: 200px;"),e("br"),a._v("}")],1)],1),a._v(" "),e("mobile",{attrs:{routerName:"lazyLoad"}})],1),a._v(" "),e("doc-api",{attrs:{apiList:a.apiList}})],1)},staticRenderFns:[]};var c=e("C7Lr")(n,v,!1,function(a){e("9i66")},"data-v-14629b6a",null);t.default=c.exports}});