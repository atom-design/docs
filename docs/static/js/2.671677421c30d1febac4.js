webpackJsonp([2],{"/faj":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i={components:{atomModel:e("8oEc").a}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"introduce-wrapper"},[e("div",{staticClass:"top-info"},[e("atom-model",{staticClass:"atom-model"}),t._v(" "),e("div",{staticClass:"title"},[t._v("Atom Design")]),t._v(" "),e("div",{staticClass:"title-desc"},[t._v("基于Vue2.0的移动端组件库")])],1),t._v(" "),e("h1",{staticClass:"title"},[t._v("简介")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n    一套高效、灵活、易用的组件库\n  ")]),t._v(" "),e("h1",{staticClass:"title"},[t._v("考虑到的因素")]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"desc"},[s("ul",{staticStyle:{"list-style":"circle","padding-left":"30px"}},[s("li",[this._v("图标的考虑: 对于组件库自带的图标一开始是打算用svg, 但是考虑到性能, 使用到的图标并非很多, 后面决定还是直接用css绘制")]),this._v(" "),s("li",[this._v("对于组件设计的考虑: 通过插槽的形式来设计组件是一件非常有趣的事情, 可以提供给开发者更多的自由空间, 这让开发者可以自己自定义DOM来实现想要的效果")]),this._v(" "),s("li",[this._v("对于自定义样式的考虑: 很多组件的API都提供了相关字段来修改默认的样式, 这使得开发者无需再费劲的去修改源文件的样式")])])])}]};var a=e("C7Lr")(i,r,!1,function(t){e("e6Fw")},"data-v-55b457b3",null);s.default=a.exports},"8oEc":function(t,s,e){"use strict";var i={data:function(){return{isReverse:!1,x:30,y:0}},mounted:function(){requestAnimationFrame(this.loopAnim)},methods:{getYCoordinate1:function(){return Math.sqrt(Math.pow(50,2)-Math.pow(50,2)*Math.pow(this.x-150,2)/Math.pow(120,2))+150},loopAnim:function(){this.y=this.getYCoordinate1(this.x),this.x>=270?this.isReverse=!0:this.x<=30&&(this.isReverse=!1),this.isReverse?(this.x<33||this.x>267?this.x-=.5:this.x<50||this.x>250?this.x-=1.5:this.x-=2,this.y=300-this.y):this.x<33||this.x>267?this.x+=.5:this.x<50||this.x>250?this.x+=1.5:this.x+=2;var t=document.querySelector("#lightBlue");t&&(t.style.transform="translate3d("+this.x+"px, "+this.y.toFixed(1)+"px, 0)",requestAnimationFrame(this.loopAnim))}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"atom-model"}},[e("svg",{attrs:{width:"300",height:"300"}},[e("defs",[e("radialGradient",{attrs:{id:"redGradient"}},[e("stop",{attrs:{offset:"0%","stop-color":"white"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#dd2622"}})],1),t._v(" "),e("radialGradient",{attrs:{id:"blueGradient"}},[e("stop",{attrs:{offset:"0%","stop-color":"white"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#108ee9"}})],1),t._v(" "),e("radialGradient",{attrs:{id:"yellowGradient"}},[e("stop",{attrs:{offset:"0%","stop-color":"white"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#f39800"}})],1),t._v(" "),e("radialGradient",{attrs:{id:"lightblueGradient"}},[e("stop",{attrs:{offset:"0%","stop-color":"white"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#00b7ee"}})],1)],1),t._v(" "),e("ellipse",{attrs:{cx:"150",cy:"150",rx:"120",ry:"50",stroke:"black",fill:"transparent"}}),t._v(" "),e("circle",{staticClass:"redRotate",attrs:{cx:"140",cy:"220",r:"13",fill:"url(#redGradient)"}}),t._v(" "),e("circle",{attrs:{id:"lightBlue",r:"22",fill:"url(#lightblueGradient)"}}),t._v(" "),e("circle",{staticClass:"rotate",attrs:{cx:"150",cy:"137",r:"35",fill:"url(#blueGradient)"}}),t._v(" "),e("circle",{staticClass:"yellowRotate",attrs:{cx:"250",cy:"90",r:"17",fill:"url(#yellowGradient)"}})])])},staticRenderFns:[]};var a=e("C7Lr")(i,r,!1,function(t){e("h4JQ")},"data-v-2fa6bef7",null);s.a=a.exports},e6Fw:function(t,s){},h4JQ:function(t,s){}});