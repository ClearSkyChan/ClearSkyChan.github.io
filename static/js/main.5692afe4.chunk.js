(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),i=(a(14),a(1)),l=a(2),o=a(4),m=a(3),h=a(5),d=(a(15),a(16),function(e){function t(){var e;Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={times:[],indexes:[]};for(var a=0;a<24;a++)e.state.times.push(a);for(var n=0;n<24;n++)e.state.times.push(n);for(var r=0;r<100;r++)e.state.indexes.push(r);return e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onScroll",value:function(e,t){console.log(e.target.scrollTop);var a=e.target.scrollLeft,n=e.target.scrollTop;document.getElementsByClassName("gantt-header")[0].scrollLeft=a,document.getElementsByClassName("gantt-content-locked")[0].scrollTop=n}},{key:"render",value:function(){var e={width:60*this.state.times.length};return r.a.createElement("div",{className:"gantt"},r.a.createElement("div",{className:"gantt-header-wrapper"},r.a.createElement("div",{className:"gantt-header-locked"}),r.a.createElement("div",{className:"gantt-header"},this.state.times.map(function(e,t){return r.a.createElement("div",{key:t,className:"gantt-header-cell"},e+":00")}))),r.a.createElement("div",{className:"gantt-content-wrapper"},r.a.createElement("div",{className:"gantt-content-locked"},this.props.indexs),r.a.createElement("div",{className:"gantt-content",onScroll:this.onScroll},r.a.createElement("div",{style:e},this.props.blocks))))}}]),t}(r.a.Component)),u=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"side"},this.props.children)}}]),t}(r.a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="gantt-block";return e+=this.props.alt?" gantt-block-alt":"",r.a.createElement("div",{className:e},this.props.children)}}]),t}(r.a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={left:(this.props.left||0)+"px",width:(this.props.width||40)+"px",top:this.props.top};return r.a.createElement("div",{className:this.props.className+" task ",style:e},this.props.children)}}]),t}(r.a.Component),v=function(e){function t(){var e;Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={},e.state.data=[];for(var a=0;a<100;a++)e.state.data.push({aircraft:{acReg:"B-1818",acType:"B737-800",maxSeat:170},flights:[{flightNo:"GT7300",depa:"ZGGG",arri:"ZUCK",left:200,width:200},{flightNo:"GT7300",depa:"ZUCK",airri:"ZULS",left:450,width:150},{flightNo:"GT8300",depa:"ZULS",airri:"ZBAA",left:850,width:150}],connections:[]});return e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d,{indexs:r.a.createElement("div",null,this.state.data.map(function(e,t){return r.a.createElement(u,{key:t,className:"side"},r.a.createElement("div",{className:"ac-info"},r.a.createElement("div",{className:"ac-reg"},r.a.createElement("i",{class:"icon-flight"}),e.aircraft.acReg),r.a.createElement("div",{className:"ac-detail"},e.aircraft.acType," / ",e.aircraft.maxSeat)))})),blocks:r.a.createElement("div",null,this.state.data.map(function(e,t){return r.a.createElement(p,{key:t,alt:t%2},r.a.createElement(f,{left:"150",width:"50",className:"airport"},"ZGGG"),r.a.createElement(f,{left:"150",width:"70",className:"airport-status"}),e.flights.map(function(e,t){var a=t>0?"flight-status flight-status-sch":"flight-status flight-status-flying";return r.a.createElement("div",{key:t},r.a.createElement(f,{left:e.left,width:e.width,className:"flight"},e.flightNo),r.a.createElement(f,{left:e.left+(t<1?20:0),width:e.width,className:a}))}),r.a.createElement(f,{left:"400",width:"50",className:"airport"},"ZUCK"),r.a.createElement(f,{left:"420",width:"30",className:"airport-status airport-less-time"}),r.a.createElement(f,{left:"600",width:"250",className:"airport"},"ZULS"),r.a.createElement(f,{left:"600",width:"250",className:"airport-status"}),r.a.createElement(f,{left:"1600",width:"150",className:"maint"},"\u673a\u52a1\u7ef4\u4fee\u5de5\u4f5c"),r.a.createElement(f,{left:"1400",width:"120",className:"overnight"},"(ZBAA,ZGGG)"))}))})}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.5692afe4.chunk.js.map