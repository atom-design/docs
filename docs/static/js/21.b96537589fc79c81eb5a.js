webpackJsonp([21],{"/CkE":function(a,e){},TPam:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("rIn1"),r=t("BYCM"),o=t("lur8"),l=t("KGfb"),c=t("EUxI"),n=t("acEc"),d={data:function(){return{apiList:[{name:"v-model",desc:"绑定carousel轮播序号 (初始值不为0则按绑定值来显示轮播序号对应的轮播滑块)",type:"Number",default:"0"},{name:"loop",desc:"是否循环",type:"Boolean",default:"false"},{name:"duration",desc:"设置轮播动画过渡时间",type:"Number",default:"3e2"},{name:"auto",desc:"是否自动轮播",type:"Boolean",default:"false"},{name:"time",desc:"设置自动轮播间隔时间",type:"Number",default:"3e3"},{name:"pagination",desc:"是否显示分页",type:"Boolean",default:"false"},{name:"isLock",desc:"是否锁定手势, 手势被锁定则无法通过手势切换",type:"Boolean",default:"false"}]}},components:{mobile:s.a,docApi:r.a,docTitle:o.a,docCode:l.a,startTag:c.a,endTag:n.a}},i={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"searchBar-doc"},[t("div",{staticClass:"demo-wrapper clearfix"},[t("div",{staticClass:"doc-demo"},[t("doc-title",{attrs:{title:"Carousel 轮播",desc:"用于依次轮播内容"}},[t("a",{staticClass:"a-link",attrs:{href:"https://atom-design.github.io/mobile/#/carousel/"}},[a._v("此测试案例请在移动模式/设备打开")])]),a._v(" "),t("doc-code",{attrs:{title:"导入"}},[t("span",{staticClass:"blue"},[a._v("import")]),a._v(" { Carousel } "),t("span",{staticClass:"blue"},[a._v("from")]),a._v(" 'atom-design';"),t("br"),a._v("Vue.component(Carousel.name, Carousel);")]),a._v(" "),t("doc-code",{attrs:{title:"例子"}},[a._v("// 基本用法"),t("br"),t("start-tag",{attrs:{name:"atom-carousel",attrs:[{key:"placeholder",value:"Please Input"},{key:"v-model",value:"carouselVal"}]}}),t("br"),a._v("  // 自定义内容，每个一级子节点为一个轮播滑块"),t("br"),a._v(" "),t("start-tag",{attrs:{name:"div",attrs:[{key:"class",value:"custom class"}]}}),t("end-tag",{attrs:{name:"div"}}),t("br"),a._v(" "),t("start-tag",{attrs:{name:"img",attrs:[{key:"class",value:"custom class"}]}}),t("end-tag",{attrs:{name:"img"}}),t("br"),a._v(" "),t("start-tag",{attrs:{name:"form",attrs:[{key:"class",value:"custom class"}]}}),t("end-tag",{attrs:{name:"form"}}),t("br"),t("end-tag",{attrs:{name:"atom-carousel"}}),t("br")],1)],1),a._v(" "),t("mobile",{attrs:{routerName:"carousel"}})],1),a._v(" "),t("doc-api",{attrs:{apiList:a.apiList}})],1)},staticRenderFns:[]};var u=t("C7Lr")(d,i,!1,function(a){t("/CkE")},"data-v-254a2378",null);e.default=u.exports}});