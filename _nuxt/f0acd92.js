(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{333:function(t,n,e){var content=e(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(108).default)("60d5d244",content,!0,{sourceMap:!1})},334:function(t,n,e){"use strict";function r(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}e.d(n,"a",(function(){return r}))},335:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));encodeURIComponent;const r=String.raw||((t,...n)=>{const e=t.length-1;return t.slice(0,e).reduce(((t,e,r)=>t+e+n[r]),"")+t[e]})},336:function(t,n,e){"use strict";e(333)},337:function(t,n,e){var r=e(107)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n@-webkit-keyframes rotateAnimation-data-v-c6d397e6{\n0%{\n    transform:rotateY(0deg) rotate(0deg)\n}\n50%{\n    transform:rotateY(180deg) rotate(0deg)\n}\nto{\n    transform:rotateY(1turn) rotate(0deg)\n}\n}\n@keyframes rotateAnimation-data-v-c6d397e6{\n0%{\n    transform:rotateY(0deg) rotate(0deg)\n}\n50%{\n    transform:rotateY(180deg) rotate(0deg)\n}\nto{\n    transform:rotateY(1turn) rotate(0deg)\n}\n}\nsvg[data-v-c6d397e6]{\n  -webkit-animation:rotateAnimation-data-v-c6d397e6 2s infinite;\n          animation:rotateAnimation-data-v-c6d397e6 2s infinite\n}\n.bg-lime[data-v-c6d397e6]{\n  background:#bef264\n}\n.bg-lime[data-v-c6d397e6]:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},338:function(t,n,e){"use strict";e.r(n);var r={},o=(e(336),e(48)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"\n    bg-lime\n    border-b border-gray-500\n    bg-red-50\n    p-3\n    text-gray-900 text-2xl\n    font-mono\n    mb-9\n    md:mb-24\n    transition transition-color\n    z-40\n    flex\n    justify-between\n    hover:bg-gray-800\n    group\n  "},[e("div",{staticClass:"z-40 inline-block font-macula text-gray-800 uppercase"},[e("span",{staticClass:"\n        text-xl\n        md:text-3xl\n        mina-rees\n        group-hover:text-gray-100\n        transition transition-colors\n      "},[e("i",[e("NuxtLink",{attrs:{to:"/"}},[t._v("Debates in DH Digital Project Index")])],1)]),t._v(" "),t._m(0)]),t._v(" "),e("a",{staticClass:"text-sm flex pt-2 text-gray-400 hover:text-gray-500 hidden"},[e("svg",{staticClass:"inline-block mr-2 fill-current",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 18h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"}})]),t._v("\n    About\n  ")])])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"font-sans text-sm capitalize font-bold group-hover:text-red-200"},[e("div",{staticClass:"font-thin group-hover:text-indigo-100"},[t._v("\n        Mina Rees Library / CUNY Graduate Center\n      ")])])}],!1,null,"c6d397e6",null);n.default=component.exports},343:function(t,n,e){var content=e(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(108).default)("d5b51364",content,!0,{sourceMap:!1})},348:function(t,n,e){"use strict";e(343)},349:function(t,n,e){var r=e(107)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.text-dh-blue[data-v-616d8c0a]{\n  color:#137ba2\n}\n.bg-dh-blue[data-v-616d8c0a]{\n  background:#137ba2\n}\n.lime-text[data-v-616d8c0a]{\n  color:#84cc16\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},354:function(t,n,e){"use strict";e.r(n);var r,o=e(334),c=e(9),l=(e(28),e(75),e(49),e(335)),d={name:"blogListing",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function n(){var e,c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$sanity,c=Object(l.a)(r||(r=Object(o.a)(['*[_type == "post"]{\n      ...,\n      author->\n    }']))),n.next=4,e.fetch(c);case 4:return d=n.sent,n.abrupt("return",{posts:d});case 6:case"end":return n.stop()}}),n)})))()},mounted:function(){localStorage.getItem("path");path2=pathy.replace("/dh-index",""),alert(path2),pathy&&(localStorage.removeItem("path"),this.$router.push({path:"/".concat(path2)}))}},f=(e(348),e(48)),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",{staticClass:"min-h-screen bg-gray-50 font-fort"},[e("client-only",[e("NavBar"),t._v(" "),e("section",{staticClass:"container max-w-screen-lg mx-auto"},[e("div",{staticClass:"\n          p-3\n          md:p-6\n          bg-red-50\n          shadow-sm\n          text-xl\n          border-gray-800 border\n          mb-16\n          grid\n          gap-6\n          mx-3\n          md:mx-0\n        "},[e("h2",{staticClass:"font-mono text-xl md:text-3xl font-bold"},[t._v("\n          Digital Humanities Research & Documentation\n        ")]),t._v(" "),e("p",[t._v("\n          Over the course of the Spring 2022 semester, researchers in\n          conjunction with librarians at the Mina Rees Library, will help\n          index digital projects cited in the\n          "),e("span",{staticClass:"italic"},[t._v(" Debates in Digital Humanities")]),t._v(" book\n          series, assist with preliminary data analysis and visualizations\n          based on the resulting dataset, and document the process on this\n          site.\n        ")]),t._v(" "),e("p",[t._v("More Updates soon")])]),t._v(" "),e("div",{staticClass:"divide-y divide-gray-800"},[e("h2",[t._v("Latest Posts")]),t._v(" "),t._l(t.posts,(function(n){return e("section",{key:n._id,staticClass:"p-3 hover:bg-indigo-50"},[e("NuxtLink",{attrs:{to:"blog/"+n.urlSlug.current}},[e("h2",{staticClass:"text-dh-blue text-3xl font-mono font-bold capitalize"},[t._v("\n              "+t._s(n.title)+"\n            ")]),t._v(" "),e("article",{staticClass:"font-bold my-2 text-xl"},[t._v("\n              "+t._s(n.author.title)+"\n            ")])])],1)}))],2)])],1)],1)}),[],!1,null,"616d8c0a",null);n.default=component.exports;installComponents(component,{NavBar:e(338).default})}}]);