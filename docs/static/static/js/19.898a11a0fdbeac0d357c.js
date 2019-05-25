webpackJsonp([19],{PZp5:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("rIn1"),r=e("BYCM"),l=e("lur8"),d=e("KGfb"),c=e("EUxI"),n=e("acEc"),v={data:function(){return{apiList:[{name:"v-model",desc:"绑定Drawer内容页序号, 序号从0开始",type:"Number",default:"无"},{name:"isGesture",desc:"是否允许手势滑动",type:"Boolean",default:"true"},{name:"duration",desc:"设置动画过渡时间, 单位ms",type:"Number",default:"3e2"},{name:"slot",desc:"设置一级子节点插槽名指定为导航栏, 值为navbar; 导航栏子节点外的一级子节点都当作内容",type:"String",default:"无"}]}},components:{mobile:s.a,docApi:r.a,docTitle:l.a,docCode:d.a,startTag:c.a,endTag:n.a}},i={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tabs-doc"},[e("div",{staticClass:"demo-wrapper clearfix"},[e("div",{staticClass:"doc-demo"},[e("doc-title",{attrs:{title:"Tabs 标签导航",desc:"基于carousel组件实现, 用于通过标签切换页面"}},[e("a",{staticClass:"a-link",attrs:{href:"https://atom-design.github.io/mobile/#/tabs/"}},[a._v("此测试案例请在移动模式/设备打开")])]),a._v(" "),e("doc-code",{attrs:{title:"按需引入（全部引入无需此步骤）"}},[e("span",{staticClass:"blue"},[a._v("import")]),a._v(" { Tabs } "),e("span",{staticClass:"blue"},[a._v("from")]),a._v(" 'atom-design';"),e("br"),a._v("Vue.component(Tabs.name, Tabs);")]),a._v(" "),e("doc-code",{attrs:{title:"例子"}},[a._v("// 基本用法"),e("br"),e("start-tag",{attrs:{name:"atom-tabs",attrs:[{key:"v-model",value:"selIdx"},{key:":isGesture",value:"是否允许手势滑动"},{key:":duration",value:"设置动画过渡时间(ms)"}]}}),e("br"),a._v("  // 设置为顶部导航栏"),e("br"),a._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"},{key:"slot",value:"navbar"}]}}),e("br"),a._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"},{key:"@click",value:"selIdx = 0"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),a._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"},{key:"@click",value:"selIdx = 1"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),a._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"},{key:"@click",value:"selIdx = 2"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),a._v(" "),e("end-tag",{attrs:{name:"div"}}),e("br"),a._v("  // selIdx设置为0切换至此内容"),e("br"),a._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),a._v("  // selIdx设置为1切换至此内容"),e("br"),a._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),a._v("  // selIdx设置为2切换至此内容"),e("br"),a._v(" "),e("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"}]}}),e("end-tag",{attrs:{name:"div"}}),e("br"),e("end-tag",{attrs:{name:"atom-tabs"}}),e("br")],1)],1),a._v(" "),e("mobile",{attrs:{routerName:"tabs"}})],1),a._v(" "),e("doc-api",{attrs:{apiList:a.apiList,desc:"一级子节点必须设置一个插槽名为navbar, 否则组件不生效; 一级子节点navbar命名的导航栏除外的都被当成内容节点, 内容节点序号从0开始, v-model控制组件会自动切换内容节点, 无需手动实现切换逻辑"}})],1)},staticRenderFns:[]};var o=e("C7Lr")(v,i,!1,function(a){e("de52")},"data-v-530a242a",null);t.default=o.exports},de52:function(a,t){}});