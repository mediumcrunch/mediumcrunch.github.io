(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(19),c=a.n(i),o=(a(27),a(5)),l=a(6),s=a(8),u=a(7),m=a(9),p=(a(28),a(10)),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=a.state.pageTitle;a.props.getPageTitle(e)},a.state={pageTitle:"Home"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},"hello")}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=a.state.pageTitle;a.props.getPageTitle(e)},a.state={pageTitle:"Games"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Games"},"hello")}}]),t}(n.Component),b=a(11),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setPageTitle=function(){return document.title=a.props.pageTitle+" | "+a.props.siteTitle},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.setPageTitle(),r.a.createElement("header",null,r.a.createElement("h1",null,this.props.pageTitle),r.a.createElement(b.b,{exact:!0,to:"/"},"Home"),r.a.createElement(b.b,{to:"/games"},"Games"))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,"\xa9 Michael J. Richards")}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).getPageTitle=function(e){a.setState({pageTitle:e})},a.state={siteTitle:"My Site",pageTitle:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.siteTitle,n=t.pageTitle;return r.a.createElement("div",{className:"App"},r.a.createElement(f,{siteTitle:a,pageTitle:n}),r.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(g,Object.assign({},t,{getPageTitle:e.getPageTitle}))}}),r.a.createElement(p.a,{path:"/games",render:function(t){return r.a.createElement(h,Object.assign({},t,{getPageTitle:e.getPageTitle}))}}),r.a.createElement(j,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b.a,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.32fb92be.chunk.js.map