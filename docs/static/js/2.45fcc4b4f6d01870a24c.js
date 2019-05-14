webpackJsonp([2],{"+al8":function(t,e){},IwDU:function(t,e){},KR8f:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=[{text:"介绍",routeName:"home"},{text:"开发指南",isChild:!0,childs:[{text:"安装",routeName:"installation"},{text:"使用",routeName:"usage"}]},{text:"组件",isChild:!0,childs:[{text:"Common",isChild:!0,childs:[{text:"Button",routeName:"buttonDoc"},{text:"Switch",routeName:"switchDoc"},{text:"Radio",routeName:"radioDoc"},{text:"Badge",routeName:"badgeDoc"},{text:"Loading",routeName:"loadingDoc"},{text:"Progress",routeName:"progressDoc"}]},{text:"Popup",isChild:!0,childs:[{text:"Toast",routeName:"toastDoc"},{text:"Dialog Box",routeName:"dialogBoxDoc"},{text:"Action Sheet",routeName:"actionSheetDoc"},{text:"Select Box",routeName:"selectBoxDoc"},{text:"Picker",routeName:"pickerDoc"}]},{text:"Data Input",isChild:!0,childs:[{text:"InputItem",routeName:"inputItemDoc"},{text:"Textarea",routeName:"textareaDoc"},{text:"SearchBar",routeName:"searchBarDoc"}]},{text:"Gesture",isChild:!0,childs:[{text:"Carousel",routeName:"carouselDoc"},{text:"SlideItem",routeName:"slideItemDoc"},{text:"PullGesture",routeName:"pullGestureDoc"},{text:"Range",routeName:"rangeDoc"}]},{text:"Navigation",isChild:!0,childs:[{text:"Header",routeName:"headerDoc"},{text:"Drawer",routeName:"drawerDoc"},{text:"Tabs",routeName:"tabsDoc"}]},{text:"JS Plugin",isChild:!0,childs:[{text:"Load More",routeName:"loadMoreDoc"},{text:"Lazy Load",routeName:"lazyLoadDoc"}]}]}],n={data:function(){return{menuList:s,select:null,dropIdx:0,secSelect:null,chooseIdx:null}},methods:{chooseComp:function(t,e){this.secSelect=null,this.dropIdx=null,this.chooseIdx=e,this.$emit("showCodeContent",t)},jumpSecMenu:function(t,e,o){t&&(this.dropIdx=null,this.chooseIdx=null,this.secSelect=e,this.$router.replace({name:t}))},jumpRouter:function(t,e){void 0!==t&&(this.dropIdx=this.dropIdx===e?null:e,this.chooseIdx=null,this.secSelect=null,this.$router.replace({name:t}))}}},a={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("aside",{staticClass:"menu-scroll"},[o("ul",t._l(t.menuList,function(e,s){return o("li",{key:s},[o("div",{staticClass:"menu-item",class:{active:t.dropIdx===s},on:{mouseover:function(e){t.select=s},mouseout:function(e){t.select=null},click:function(o){return t.jumpRouter(e.routeName,s)}}},[o("span",{domProps:{textContent:t._s(e.text)}})]),t._v(" "),t._l(e.childs,function(e,n){return o("div",{key:n,staticClass:"drop-list"},[o("div",{staticClass:"drop-item",class:{active:t.secSelect===""+s+n&&!e.isChild},on:{click:function(o){return t.jumpSecMenu(e.routeName,""+s+n,e.isChild)}}},[o("span",{staticClass:"title",domProps:{textContent:t._s(e.text)}}),t._v(" "),e.isChild?o("ul",{staticClass:"comp-list"},t._l(e.childs,function(e,s){return o("li",{key:s,staticClass:"comp-item",class:{active:t.chooseIdx===""+n+s},domProps:{textContent:t._s(e.text)},on:{click:function(o){o.stopPropagation(),t.chooseComp(e,n.toString()+s)}}})}),0):t._e()])])})],2)}),0)])},staticRenderFns:[]};var i=o("C7Lr")(n,a,!1,function(t){o("+al8")},"data-v-2ba961f0",null).exports;o("IwDU"),o("myXS");function r(t){return{name:t,functional:!0,render:function(e,o){return o.data.props={name:t},e("transition",o.data,o.children)}}}var l=r("fade"),c=(r("scale"),r("slideTop"),r("slideRight"),{name:"home",data:function(){return{showMenu:!1,showIdContent:null}},components:{menuBar:i,drawer:{name:"atom-drawer",data:function(){return{showMask:!1}},props:{type:{type:String,default:"build-in"},value:{type:Boolean,default:!1}},watch:{value:function(t){this.showMask=t;var e=this.$el.children.item(0);t?("popup"===this.type?this.showMask=!0:e.children.item(1).style.transform="translate3d("+e.children.item(0).offsetWidth+"px, 0, 0)",e.children.item(0).style.transform="translate3d("+e.children.item(0).offsetWidth+"px, 0, 0)"):("popup"===this.type?this.showMask=!1:e.children.item(1).style.transform="translate3d(0, 0, 0)",e.children.item(0).style.transform="translate3d(0, 0, 0)"),this.$emit("input",t)}},mounted:function(){this.initStyle()},methods:{initStyle:function(){var t=this.$el.children.item(0);t.children.item(0).style="position: absolute; left: -230px; top: 0; transition: transform 300ms; z-index: 2019","popup"!==this.type&&(t.children.item(1).style="position: absolute; left: 0; top: 0; transition: transform 300ms;")}},render:function(t){var e=this;if("popup"===this.type)var o=t(l,{},[t("div",{staticClass:"drawer-mask",directives:[{name:"show",value:this.showMask}],on:{click:function(){e.showMask=!1,e.$el.children.item(0).children.item(0).style.transform="translate3d(0, 0, 0)",e.$emit("input",!1)}}})]);return t("div",{class:"atom-drawer"},[t("div",{staticClass:"atom-drawper-wrapper"},[this.$slots.navbar,this.$slots.content,o])])}}},methods:{ctrlMenu:function(){this.showMenu=!this.showMenu},showContent:function(t){this.$router.replace({name:t.routeName})}}}),u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"clearfix",attrs:{id:"home-wrapper"}},[o("div",{staticClass:"home-content"},[o("div",{staticClass:"menu-ctrl",on:{click:t.ctrlMenu}},[o("i",{staticClass:"iconfont"},[t._v("")])]),t._v(" "),o("div",{staticClass:"pc-wrapper"},[o("menu-bar",{staticClass:"menu",attrs:{slot:"navbar"},on:{showCodeContent:t.showContent},slot:"navbar"}),t._v(" "),o("section",{staticClass:"content-wrapper clearfix",attrs:{slot:"content"},slot:"content"},[o("router-view",{staticClass:"doc-info"})],1)],1),t._v(" "),o("drawer",{staticClass:"drawer",model:{value:t.showMenu,callback:function(e){t.showMenu=e},expression:"showMenu"}},[o("menu-bar",{staticClass:"menu",attrs:{slot:"navbar"},on:{showCodeContent:t.showContent},slot:"navbar"}),t._v(" "),o("section",{staticClass:"content-wrapper clearfix",attrs:{slot:"content"},slot:"content"},[o("router-view",{staticClass:"doc-info"})],1)],1)],1)])},staticRenderFns:[]};var d=o("C7Lr")(c,u,!1,function(t){o("pyeB")},"data-v-47662173",null);e.default=d.exports},myXS:function(t,e){},pyeB:function(t,e){}});