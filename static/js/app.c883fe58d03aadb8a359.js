webpackJsonp([0],[,,function(t,e,n){function s(t){n(29)}var i=n(0)(n(12),n(54),s,"data-v-369b5a5a",null);t.exports=i.exports},function(t,e,n){function s(t){n(26)}var i=n(0)(n(13),n(48),s,null,null);t.exports=i.exports},function(t,e,n){"use strict";var s=n(1),i=n(64),a=n(43),l=n.n(a),r=n(35),o=n.n(r),c=n(44),_=n.n(c),v=n(34),u=n.n(v),f=n(42),d=n.n(f),p=n(40),h=n.n(p),m=n(38),x=n.n(m),g=n(37),C=n.n(g),b=n(36),y=n.n(b),S=n(39),E=n.n(S),$=n(41),w=n.n($),F=n(46),R=n.n(F),k=n(45),M=n.n(k);s.a.use(i.a),e.a=new i.a({routes:[{path:"",redirect:"/home"},{path:"/home",component:l.a},{path:"/flight",component:o.a},{path:"/flight/:id",component:u.a,children:[{path:"vip",component:d.a},{path:"airport",component:y.a},{path:"support",component:w.a},{path:"crew",component:C.a},{path:"notam",component:x.a},{path:"release",component:h.a},{path:"passenger",component:E.a}]},{path:"/message",component:_.a},{path:"/more",component:R.a},{path:"/button",component:M.a}]})},function(t,e){},function(t,e,n){"use strict";var s=n(25),i=(n.n(s),n(1)),a={};a.install=function(t,e){t.prototype.$goToRoute=function(t){this.$router.push(t)},t.prototype.$isRouteIn=function(t){return new RegExp("^"+t+"(/|$)").test(this.$route.path)}},i.a.use(a)},,function(t,e,n){function s(t){n(28)}var i=n(0)(n(11),n(51),s,null,null);t.exports=i.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(4),i=n(33),a=n.n(i),l=n(24);e.default={name:"app",data:function(){return{transitionName:"slide-left"}},store:l.a,computed:{isLoading:function(){return this.$store.state.isLoading}},router:s.a,watch:{$route:function(t,e){var n=t.path.split("/").length,s=e.path.split("/").length;this.transitionName=n<s?"slide-right":"slide-left",console.log(this.transitionName)}},components:{loading:a.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{menus:[{name:"首页",url:"/home",iconfont:"&#xe7a4;"},{name:"航班",url:"/flight",iconfont:"&#xe652;"},{name:"消息",url:"/message",iconfont:"&#xe65b;"},{name:"更多",url:"/more",iconfont:"&#xe677;"}]}},methods:{gotoAddress:function(t){this.$router.push(t)},isIn:function(t){return new RegExp("^"+t+"(/|$)").test(this.$route.path)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["back","title"],methods:{goBack:function(){$route.push(back)}}}},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),i=n.n(s),a=[{name:"support",title:"保障信息"},{name:"notam",title:"航行通告"},{name:"release",title:"放行资料"},{name:"airport",title:"机场信息"},{name:"crew",title:"机组信息"},{name:"vip",title:"要客信息"},{name:"passenger",title:"旅客信息"}];e.default={data:function(){return{menus:a}},methods:{refresh:function(t){setTimeout(function(){t()},1500)}},components:{headTop:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),i=n.n(s),a=n(3),l=n.n(a);e.default={data:function(){return{flightsOnShow:[],flights:[],filter:"out"}},methods:{refresh:function(t){setTimeout(function(){t()},1500)},log:function(t){console.log(t)},getFlights:function(){var t=this;this.$http.get("mock/flight/date/2017-7-18").then(function(t){return t.json()}).then(function(e){t.flights=e})},viewFlightDetail:function(t){this.$router.push("/flight/xxx/support")},filterFlights:function(t){t||(this.flightsOnShow=this.flights),"out"==t&&(this.flightsOnShow=this.flights.filter(function(t){return"ZSAM"==t.Depa})),"inn"==t&&(this.flightsOnShow=this.flights.filter(function(t){return"ZSAM"==t.Arri})),"care"==t&&(this.flightsOnShow=this.flights.filter(function(t){return t.Care})),"vip"==t&&(this.flightsOnShow=this.flights.filter(function(t){return"Y"==t.Vip}))}},watch:{flights:function(t,e){this.filterFlights(this.filter)},filter:function(t,e){this.filterFlights(t)}},components:{footerGuide:i.a,headTop:l.a},created:function(){0==this.flights.length&&this.getFlights()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{content:""}},methods:{getRelease:function(){var t=this;t.$store.commit("load",!0),this.$http.get("mock/flight/xxx/release").then(function(e){return t.$store.commit("load",!1),e.json()}).then(function(e){t.content=e.data})}},mounted:function(){this.getRelease()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),i=n.n(s);e.default={components:{footerGuide:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),i=n.n(s);e.default={components:{footerGuide:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),i=n.n(s);e.default={components:{headTop:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),i=n.n(s);e.default={methods:{show:function(t){}},components:{footerGuide:i.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n(8),a=n.n(i),l=n(4),r=(n(6),n(5)),o=(n.n(r),n(7)),c=n.n(o),_=n(9),v=n(10),u=n.n(v);s.a.use(_.a),s.a.use(u.a),s.a.config.productionTip=!1,"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){c.a.attach(document.body)},!1),new s.a({el:"#app",router:l.a,template:"<App/>",components:{App:a.a}})},function(t,e,n){"use strict";var s=n(1),i=n(66);s.a.use(i.a),e.a=new i.a.Store({state:{isLoading:!1},mutations:{load:function(t,e){t.isLoading=e}}})},function(t,e){var n=Date.prototype.toStrinng;Date.prototype.toString=function(t){if(!t)return n.call(this);var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours()%12==0?12:this.getHours()%12,"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){var s=n(0)(n(14),n(60),null,null,null);t.exports=s.exports},function(t,e,n){function s(t){n(30)}var i=n(0)(n(15),n(55),s,"data-v-408bcdce",null);t.exports=i.exports},function(t,e,n){function s(t){n(27)}var i=n(0)(n(16),n(49),s,"data-v-071bdb26",null);t.exports=i.exports},function(t,e,n){var s=n(0)(null,n(57),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(52),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(58),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(50),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(17),n(53),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(null,n(63),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(18),n(61),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(19),n(47),null,null,null);t.exports=s.exports},function(t,e,n){var s=n(0)(n(20),n(59),null,null,null);t.exports=s.exports},function(t,e,n){function s(t){n(31)}var i=n(0)(n(21),n(56),s,"data-v-415c55aa",null);t.exports=i.exports},function(t,e,n){function s(t){n(32)}var i=n(0)(n(22),n(62),s,"data-v-c1f74f66",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-page"},[n("p",[t._v("this is Home")]),t._v(" "),n("footer-guide")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{attrs:{id:"header-nav"}},[t.back?n("div",{staticClass:"header-back",on:{click:function(e){t.$goToRoute(t.back)}}}):t._e(),t._v(" "),n("div",{staticClass:"header-title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"header-right"},[t._t("default")],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-page  "},[n("head-top",{attrs:{title:"航班动态"}}),t._v(" "),n("div",[n("div",{staticClass:"flight-header"},[n("div",{staticClass:"flight-header__nav xa-nav",staticStyle:{display:"flex"}},[n("a",{class:{active:"out"==t.filter},on:{click:function(e){t.filter="out"}}},[t._v("出港")]),t._v(" "),n("a",{class:{active:"inn"==t.filter},on:{click:function(e){t.filter="inn"}}},[t._v("进港")]),t._v(" "),n("a",{class:{active:"care"==t.filter},on:{click:function(e){t.filter="care"}}},[t._v("关注")]),t._v(" "),n("a",{class:{active:"vip"==t.filter},on:{click:function(e){t.filter="vip"}}},[t._v("要客")])]),t._v(" "),t._m(0)]),t._v(" "),n("scroller",{staticClass:"flight-content",attrs:{"on-refresh":t.refresh}},t._l(t.flightsOnShow,function(e){return n("a",{staticClass:"flight",staticStyle:{display:"flex"},on:{click:function(n){t.viewFlightDetail(e)}}},[n("div",{staticStyle:{flex:"1"}},[t._v(t._s(e.FlightNo)),n("br"),t._v(t._s(e.AcReg))]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._v(t._s(e.Depa)),n("br"),t._v(t._s(e.Arri))]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._v(t._s(e.StandOut))]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[n("span",{staticClass:"st"},[t._v(t._s(new Date(e.Std).toString("HH:mm")))]),n("br"),t._v(" "),e.Etd&&!e.Atd?n("span",{staticClass:"et"},[t._v(t._s(new Date(e.Etd).toString("HH:mm")))]):t._e(),t._v(" "),e.Atd?n("span",{staticClass:"at"},[t._v(t._s(new Date(e.Atd).toString("HH:mm")))]):t._e(),t._v(" "),e.Etd||e.Atd?t._e():n("span",[t._v(" ")])]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[n("span",{staticClass:"st"},[t._v(t._s(new Date(e.Sta).toString("HH:mm")))]),n("br"),t._v(" "),e.Eta&&!e.Ata?n("span",{staticClass:"et"},[t._v(t._s(new Date(e.Eta).toString("HH:mm")))]):t._e(),t._v(" "),e.Ata?n("span",{staticClass:"at"},[t._v(t._s(new Date(e.Ata).toString("HH:mm")))]):t._e(),t._v(" "),e.Eta||e.Ata?t._e():n("span",[t._v(" ")])]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._v("起飞")])])}))],1),t._v(" "),n("footer-guide")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","font-size":"0.6rem","font-weight":"bold","text-align":"center",height:"1.2rem","border-top":"1px solid #ECECEC","border-bottom":"1px solid #ECECEC","line-height":"1.2rem"}},[n("div",{staticStyle:{flex:"1"}},[t._v("航班")]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._v("航线")]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._v("机位")]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._v("起飞")]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._v("到达")]),t._v(" "),n("div",{staticStyle:{flex:"1"}},[t._v("状态")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  Passanger\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("loading",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]}),t._v(" "),n("transition",{attrs:{name:t.transitionName}},[n("keep-alive",[n("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  Crew\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticStyle:{"font-size":".6rem"}},[t._v("\n    "+t._s(t.content)+"\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"footer-tab"}},t._l(t.menus,function(e){return n("a",{staticClass:"tab-item-wrapper",on:{click:function(n){n.stopPropagation(),t.$goToRoute(e.url)}}},[n("span",{class:["tab-item",{actived:t.$isRouteIn(e.url)}]},[n("i",{staticClass:"icon xa-icon",domProps:{innerHTML:t._s(e.iconfont)}}),t._v(" "),n("span",[t._v(t._s(e.name))])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-page fd"},[n("head-top",{attrs:{back:"/flight",title:"MF8401"}},[n("span",{staticClass:"xa-icon care"},[t._v("")])]),t._v(" "),n("scroller",{staticStyle:{"padding-top":"2rem"},attrs:{"on-refresh":t.refresh}},[n("div",{staticClass:"fd-general"},[n("div",{staticClass:"fd-general__element"},[n("div",{staticClass:"fd-general__element__line1 fd-airport"},[t._v("厦门")]),t._v(" "),n("div",{staticClass:"fd-general__element__line2 fd-time"},[t._v("15:00")]),t._v(" "),n("div",{staticClass:"fd-general__element__line3 fd-light"},[t._v("计划"),n("span",[t._v("1500")])])]),t._v(" "),n("div",{staticClass:"fd-general__element__middle"},[n("div",{staticClass:"fd-general__element__line1 fd-light"},[t._v("73/24")]),t._v(" "),n("div",{staticClass:"fd-general__element__line2"},[n("div",{staticStyle:{height:"2px",position:"relative","background-color":"#aaa",top:"50%"}},[n("div",{staticStyle:{height:"2px",width:"45%","background-color":"#C7E0F4"}}),t._v(" "),n("div",{staticClass:"icon xa-icon fd-plane"},[t._v("\n                            ")])])]),t._v(" "),n("div",{staticClass:"fd-general__element__line3 fd-light"},[t._v("B-2129/787")])]),t._v(" "),n("div",{staticClass:"fd-general__element"},[n("div",{staticClass:"fd-general__element__line1 fd-airport"},[t._v("北京")]),t._v(" "),n("div",{staticClass:"fd-general__element__line2 fd-time"},[t._v("18:00")]),t._v(" "),n("div",{staticClass:"fd-general__element__line3 fd-light"},[t._v("计划"),n("span",[t._v("1500")])])])]),t._v(" "),n("div",{staticClass:"fd-line"},[n("div",{staticClass:"fd-line__eobt"},[t._v("EOBT : 15:00")]),t._v(" "),n("div",{staticClass:"fd-line__cobt"},[t._v("COBT : 15:00")]),t._v(" "),n("div",{staticClass:"fd-line__cobt"}),t._v(" "),n("div",{staticClass:"fd-line__flg"},[t._v("要客 特服")])]),t._v(" "),n("div",{staticClass:"fd-related"},[n("a",{staticClass:"fd-related__pre"},[n("div",{staticClass:"arrow"},[t._v("前序")]),t._v(" "),n("div",{staticClass:"flight"},[t._v("MF8401"),n("br"),t._v("已经到达")]),t._v(" "),n("div",{staticStyle:{flex:"1"}})]),t._v(" "),n("a",{staticClass:"fd-related__aft"},[n("div",{staticStyle:{flex:"1"}}),t._v(" "),n("div",{staticClass:"flight"},[t._v("MF8401"),n("br"),t._v("已达到达")]),t._v(" "),n("div",{staticClass:"arrow"},[t._v("后序")])])]),t._v(" "),n("div",{staticClass:"fd-delay"},[n("div",{staticClass:"fd-delay__time"},[t._v("\n                延误时间"),n("br"),t._v(" "),n("span",{staticStyle:{"font-size":"1rem"}},[t._v("23分")])]),t._v(" "),n("div",{staticClass:"fd-delay__reason"},[t._v("\n                延误原因:旅客"),n("br"),t._v("\n                对外原因:旅客"),n("br"),t._v("\n                原因说明:等待晚到旅客"),n("br")])]),t._v(" "),n("div",{staticClass:"fd-spt"},[n("div",{staticClass:"fd-spt__time"},[n("div",[t._v("上客"),n("br"),t._v("13:00")])]),t._v(" "),n("div",{staticClass:"fd-spt__time"},[n("div",[t._v("客齐"),n("br"),t._v("13:00")])]),t._v(" "),n("div",{staticClass:"fd-spt__time"},[n("div",[t._v("关货舱"),n("br"),t._v("13:00")])]),t._v(" "),n("div",{staticClass:"fd-spt__time"},[n("div",[t._v("关客舱"),n("br"),t._v("13:00")])]),t._v(" "),n("div",{staticClass:"fd-spt__time"},[n("div",[t._v("撤轮档"),n("br"),t._v("13:00")])])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-page"},[n("head-top",{attrs:{back:"/more",title:"按钮"}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-content"},[n("a",{staticClass:"xa-btn xa-btn_primary"},[t._v("页面主操作")]),t._v(" "),n("a",{staticClass:"xa-btn xa-btn_default"},[t._v("次要操作")]),t._v(" "),n("a",{staticClass:"xa-btn xa-btn_warn"},[t._v("警告类操作")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  Airport Information\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  Notams\n")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-page"},[n("p",[t._v("this is Message")]),t._v(" "),n("footer-guide")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-loading"},[n("div",{staticClass:"xa-loading__bd"},[n("i",{staticClass:"xa-icon xa-loading__icon"},[t._v("")]),t._v(" "),n("div",{staticClass:"xa-loading__text"},[t._v("加载中")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v("Vip Information Sheet")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-page"},[n("div",{staticClass:"xa-lists"},[n("a",{staticClass:"xa-list xa-list-lg xa-list__access",on:{click:function(e){t.show("aaa")}}},[t._m(0),t._v(" "),n("div",{staticClass:"xa-list__ft"},[t._v("个人信息")])])]),t._v(" "),n("div",{staticClass:"xa-lists"},[n("a",{staticClass:"xa-list xa-list__access",on:{click:function(e){t.show("aaa")}}},[t._m(1),t._v(" "),n("div",{staticClass:"xa-list__ft"})]),t._v(" "),n("a",{staticClass:"xa-list xa-list__access",on:{click:function(e){t.show("aaa")}}},[t._m(2),t._v(" "),n("div",{staticClass:"xa-list__ft"})]),t._v(" "),n("a",{staticClass:"xa-list xa-list__access",on:{click:function(e){t.show("aaa")}}},[t._m(3),t._v(" "),n("div",{staticClass:"xa-list__ft"})])]),t._v(" "),n("div",{staticClass:"xa-lists"},[n("a",{staticClass:"xa-list xa-list__access",on:{click:function(e){t.$router.push("/button")}}},[t._m(4),t._v(" "),n("div",{staticClass:"xa-list__ft"})]),t._v(" "),n("a",{staticClass:"xa-list xa-list__access",on:{click:function(e){t.show("aaa")}}},[t._m(5),t._v(" "),n("div",{staticClass:"xa-list__ft"})]),t._v(" "),n("a",{staticClass:"xa-list xa-list__access",on:{click:function(e){t.show("aaa")}}},[t._m(6),t._v(" "),n("div",{staticClass:"xa-list__ft"})])]),t._v(" "),n("footer-guide")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-list__bd",staticStyle:{display:"flex"}},[n("img",{staticStyle:{height:"42px",width:"42px"},attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1803814193,1499127675&fm=26&gp=0.jpg"}}),t._v(" "),n("div",{staticClass:"xa-list__bd__title",staticStyle:{"margin-left":"15px"}},[n("div",{staticStyle:{"font-size":"18px"}},[t._v("陈楚天")]),t._v(" "),n("div",{staticStyle:{"font-size":"13px"}},[t._v("12640")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-list__bd"},[n("i",{staticClass:"xa-icon",staticStyle:{color:"#DBB06E","margin-right":"12px"}},[t._v("")]),t._v(" "),n("span",[t._v("要客信息")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-list__bd"},[n("i",{staticClass:"xa-icon",staticStyle:{color:"#51C332","margin-right":"12px"}},[t._v("")]),t._v(" "),n("span",[t._v("值班表")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-list__bd"},[n("i",{staticClass:"xa-icon",staticStyle:{color:"#957C5E","margin-right":"12px"}},[t._v("")]),t._v(" "),n("span",[t._v("预配货物")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-list__bd"},[n("span",[t._v("Button")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-list__bd"},[n("span",[t._v("Input")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xa-list__bd"},[n("span",[t._v("List")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("\n  support info\n")])},staticRenderFns:[]}},,,,,function(t,e){}],[23]);
//# sourceMappingURL=app.c883fe58d03aadb8a359.js.map