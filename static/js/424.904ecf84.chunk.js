"use strict";(self.webpackChunkreact_movies_list=self.webpackChunkreact_movies_list||[]).push([[424],{5110:function(r,t,e){e.d(t,{Z:function(){return i}});var n="Container_container__twi-x",a=e(184);function i(r){var t=r.children;return(0,a.jsx)("div",{className:n,children:t})}},424:function(r,t,e){e.r(t),e.d(t,{default:function(){return x}});var n=e(2982),a=e(8683),i=e(5861),c=e(885),u=e(7757),o=e.n(u),s=e(2791),l=e(501),f=e(4444),p=e(9930),d={list:"PopularFilmList_list__JfWFy",item:"PopularFilmList_item__ctPWl",text:"PopularFilmList_text__iLFV9",img:"PopularFilmList_img__Go4ul"},m=e(184);function v(){var r=(0,s.useState)({movies:[],loading:!1,error:null}),t=(0,c.Z)(r,2),e=t[0],u=t[1];(0,s.useEffect)((function(){var r=function(){var r=(0,i.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return u((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!0})})),r.prev=1,r.next=4,(0,f._L)();case 4:t=r.sent,u((function(r){return(0,a.Z)((0,a.Z)({},r),{},{movies:(0,n.Z)(t),loading:!1})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),u((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loading:!1,error:r.t0})}));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[]);var v=e.loading,h=e.error,b=e.movies,x=null===b||void 0===b?void 0:b.map((function(r){var t=r.title,e=r.id,n=r.poster_path;return(0,m.jsx)("li",{className:d.item,children:(0,m.jsxs)(l.rU,{to:"/movies/".concat(e),children:[(0,m.jsx)("img",{className:d.img,src:"https://image.tmdb.org/t/p/w500/".concat(n),alt:"postermovie"}),(0,m.jsx)("p",{className:d.text,children:t})]})},e)}));return(0,m.jsxs)(m.Fragment,{children:[v&&(0,m.jsx)(p.a,{}),h&&(0,m.jsx)("div",{className:d.div,children:(0,m.jsx)("p",{className:d.text,children:"Data not found"})}),b.length>0?(0,m.jsx)("ul",{className:d.list,children:x}):(0,m.jsx)("div",{className:d.div,children:(0,m.jsx)("p",{className:d.text,children:"Sorry we dont found films..."})})]})}var h="HomePage_title__UFLA3",b=e(5110);function x(){return(0,m.jsx)("section",{className:"section",children:(0,m.jsx)("main",{children:(0,m.jsxs)(b.Z,{children:[(0,m.jsx)("h1",{className:h,children:"Weekly popular films"}),(0,m.jsx)(v,{})]})})})}},4444:function(r,t,e){e.d(t,{M1:function(){return l},TP:function(){return s},_L:function(){return o},tx:function(){return f},zi:function(){return p}});var n=e(5861),a=e(7757),i=e.n(a),c=e(4569),u=e.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),o=function(){var r=(0,n.Z)(i().mark((function r(){var t,e;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("/trending/movie/day");case 2:return t=r.sent,e=t.data,r.abrupt("return",e.results);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(i().mark((function r(t){var e,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("/movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(i().mark((function r(t){var e,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("/movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.cast);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(i().mark((function r(t){var e,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n.results);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(i().mark((function r(t){var e,n,a,c=arguments;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:1,r.next=3,u("/search/movie",{params:{query:t,page:e}});case 3:return n=r.sent,a=n.data,r.abrupt("return",a.results);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},8683:function(r,t,e){function n(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function a(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function i(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){n(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}e.d(t,{Z:function(){return i}})},2982:function(r,t,e){e.d(t,{Z:function(){return i}});var n=e(907);var a=e(181);function i(r){return function(r){if(Array.isArray(r))return(0,n.Z)(r)}(r)||function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||(0,a.Z)(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=424.904ecf84.chunk.js.map