(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{334:function(e,n,t){"use strict";function r(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",(function(){return r}))},335:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));encodeURIComponent;const r=String.raw||((e,...n)=>{const t=e.length-1;return e.slice(0,t).reduce(((e,t,r)=>e+t+n[r]),"")+e[t]})},354:function(e,n,t){"use strict";t.r(n);var r,c=t(334),o=t(9),f=(t(49),t(335)),l={name:"blogListing",asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function n(){var t,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$sanity,o=Object(f.a)(r||(r=Object(c.a)(['*[_type == "pkost"]{\n      authors[]->{name, bio}\n      }']))),n.next=4,t.fetch(o);case 4:return l=n.sent,n.abrupt("return",{posts:l});case 6:case"end":return n.stop()}}),n)})))()}},w=t(48),component=Object(w.a)(l,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("main",[e._v("\n  "+e._s(e.posts)+"\n")])}),[],!1,null,null,null);n.default=component.exports}}]);