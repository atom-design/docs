webpackJsonp([11],{MwPL:function(a,e){},cHo4:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("rIn1"),s=t("BYCM"),c=t("lur8"),l=t("KGfb"),o=t("EUxI"),n=t("acEc"),d={data:function(){return{apiList:[{name:"v-model",desc:"绑定searchBar输入的值",type:"String",default:"无"},{name:"placeholder",desc:"设置searchBar的placeholder属性",type:"String",default:"无"},{name:"isClear",desc:"是否允许清空按钮",type:"Boolean",default:"true"},{name:"style",desc:"自定义样式",type:"String",default:"无"}]}},components:{mobile:r.a,docApi:s.a,docTitle:c.a,docCode:l.a,startTag:o.a,endTag:n.a}},i={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"searchBar-doc"},[t("div",{staticClass:"demo-wrapper clearfix"},[t("div",{staticClass:"doc-demo"},[t("doc-title",{attrs:{title:"SearchBar 搜索条",desc:"用于搜索数据"}}),a._v(" "),t("doc-code",{attrs:{title:"按需引入（全部引入无需此步骤）"}},[t("span",{staticClass:"blue"},[a._v("import")]),a._v(" { SearchBar } "),t("span",{staticClass:"blue"},[a._v("from")]),a._v(" 'atom-design';"),t("br"),a._v("Vue.component(SearchBar.name, SearchBar);")]),a._v(" "),t("doc-code",{attrs:{title:"例子"}},[a._v("// 基本用法"),t("br"),t("start-tag",{attrs:{name:"atom-search-bar",attrs:[{key:"placeholder",value:"Please Input"},{key:"v-model",value:"searchVal"}]}}),t("end-tag",{attrs:{name:"atom-search-bar"}}),t("br"),a._v("// 无清空按钮"),t("br"),t("start-tag",{attrs:{name:"atom-search-bar",attrs:[{key:"placeholder",value:"Please Input"},{key:":isClear",value:"false"}]}}),t("end-tag",{attrs:{name:"atom-search-bar"}}),t("br"),a._v("// 自定义样式"),t("br"),t("start-tag",{attrs:{name:"atom-search-bar",attrs:[{key:"placeholder",value:"Please Input"},{key:"style",value:"background: rgba(0, 0, 0, 0.8); color: white"}]}}),t("end-tag",{attrs:{name:"atom-search-bar"}}),t("br")],1)],1),a._v(" "),t("mobile",{attrs:{routerName:"searchBar"}})],1),a._v(" "),t("doc-api",{attrs:{apiList:a.apiList}})],1)},staticRenderFns:[]};var u=t("C7Lr")(d,i,!1,function(a){t("MwPL")},"data-v-71b666ae",null);e.default=u.exports}});