webpackJsonp([8],{BIEt:function(t,s){},LfJI:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("lur8"),n=a("KGfb"),l=a("EUxI"),c=a("acEc"),o={components:{docTitle:e.a,docCode:n.a,startTag:l.a,endTag:c.a}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"usage-doc"},[a("div",{staticClass:"demo-wrapper clearfix"},[a("div",{staticClass:"doc-demo"},[a("doc-title",{attrs:{title:"使用教程",desc:"支持全部引入和按需引入"}}),t._v(" "),a("doc-code",{attrs:{title:"全部引入"}},[a("span",{staticClass:"blue"},[t._v("import")]),t._v(" atomD "),a("span",{staticClass:"blue"},[t._v("from")]),t._v(" 'atom-design';"),a("br"),a("span",{staticClass:"blue"},[t._v("import")]),t._v(" 'atom-design/bundle/style.css';"),a("br"),t._v("Vue.use(atomD);")]),t._v(" "),a("doc-code",{attrs:{title:"按需引入"}},[t._v("使用"),a("span",{staticClass:"red"},[t._v(" babel-plugin-component ")]),t._v("插件来实现按需引入"),a("br"),a("span",{staticClass:"blue"},[t._v("(1)先安装babel-plugin-component")]),a("br"),t._v("npm install babel-plugin-component --save-dev"),a("br"),a("span",{staticClass:"blue"},[t._v("(2)配置babel")]),a("br"),t._v("{"),a("br"),t._v(" "),a("span",{staticClass:"yellow"},[t._v('"plugins"')]),t._v(": [\n    ["),a("span",{staticClass:"red"},[t._v('"component"')]),t._v(", {\n      "),a("span",{staticClass:"red"},[t._v('"libraryName"')]),t._v(': "atom-design",\n      '),a("span",{staticClass:"red"},[t._v('"style"')]),t._v(": true\n    }]\n  ]"),a("br"),t._v("}"),a("br"),a("span",{staticClass:"blue"},[t._v("(3)引入所需组件")]),a("br"),a("span",{staticClass:"red"},[t._v("import")]),t._v(" {Button} "),a("span",{staticClass:"red"},[t._v("from")]),t._v(" 'atom-design';"),a("br"),t._v("Vue.component(Button.name, Button);")])],1)])])},staticRenderFns:[]};var i=a("C7Lr")(o,r,!1,function(t){a("BIEt")},"data-v-8a09148c",null);s.default=i.exports}});