"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[374],{7374:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(8683),a=r(5861),s=r(885),i=r(7757),c=r.n(i),o=r(2791),u=r(501),l=r(6871),d={title:"MovieDetailsList_title__FnCTS",flex:"MovieDetailsList_flex__NWBFi",list:"MovieDetailsList_list__EurYk",item:"MovieDetailsList_item__HRZx5",title__child:"MovieDetailsList_title__child__ropvg",text:"MovieDetailsList_text__6AGQT",title__modif:"MovieDetailsList_title__modif__ZxyeJ"},f=r(184);function p(e){var t=e.poster_path,r=e.tagline,n=e.title,a=e.release_date,s=e.overview,i=e.genres,c=e.vote_average,o=e.id,u=10*c.toFixed(),l=a.slice(0,4),p=i.map((function(e){return e.name})).join(" ");return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{className:"visually-hidden",children:"Movie details"}),(0,f.jsxs)("div",{className:d.flex,children:[(0,f.jsx)("img",{className:d.image,src:t=t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792__340.jpg",alt:r,width:240}),(0,f.jsxs)("ul",{className:d.list,children:[(0,f.jsxs)("li",{className:d.item,children:[(0,f.jsxs)("h2",{className:d.title__modif,children:[n,"(",l,")"]}),(0,f.jsxs)("p",{className:d.text,children:["User score: ",u,"%"]})]}),(0,f.jsxs)("li",{className:d.item,children:[(0,f.jsx)("h2",{className:d.title__child,children:"Overview"}),(0,f.jsx)("p",{className:d.text,children:s})]}),(0,f.jsxs)("li",{className:d.item,children:[(0,f.jsx)("h2",{className:d.title__child,children:"Genres"}),(0,f.jsx)("p",{className:d.text,children:p})]})]})]})]},o)}var v=r(2982),h=r(4444),m=r(9634),x="Cast_text__G99Oq",_="Cast_div__7enfQ",j="Cast_item__iDaXp",g="Cast_list__iUE7c";function b(){var e=(0,o.useState)({cast:[],loading:!1,error:null}),t=(0,s.Z)(e,2),r=t[0],i=t[1],u=(0,l.UO)().movieId;(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,(0,h.M1)(u);case 4:t=e.sent,i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{cast:(0,v.Z)(t),loading:!1})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loading:!1,error:e.t0})}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[u]);var d=r.loading,p=r.error,b=r.cast,w=b.map((function(e){var t=e.name,r=e.character,n=e.profile_path,a=e.id;return(0,f.jsxs)("ul",{className:g,children:[(0,f.jsx)("img",{src:n=n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792__340.jpg",alt:t,width:140}),(0,f.jsxs)("li",{className:j,children:[(0,f.jsx)("p",{className:x,children:t}),(0,f.jsxs)("p",{className:x,children:["Character: ",r]})]})]},a)}));return(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(m.Z,{}),p&&(0,f.jsx)("div",{className:_,children:(0,f.jsx)("p",{className:x,children:"Data not found"})}),b.length>0?(0,f.jsx)("div",{className:_,children:w}):(0,f.jsx)("div",{className:_,children:(0,f.jsx)("p",{className:x,children:"Sorry we dont have informations about this cast"})})]})}var w=r(9930),N="Reviews_list__2Btbj",Z="Reviews_author__e1mOu",y="Reviews_text__oRft7",O="Reviews_div__l23hA";function k(){var e=(0,o.useState)({review:[],loading:!1,error:null}),t=(0,s.Z)(e,2),r=t[0],i=t[1],u=(0,l.UO)().movieId;(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,(0,h.tx)(u);case 4:t=e.sent,i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!1,review:(0,v.Z)(t)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loading:!1,error:e.t0})}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[u]);var d=r.loading,p=r.error,m=r.review,x=m.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,f.jsx)("ul",{className:N,children:(0,f.jsxs)("li",{children:[(0,f.jsxs)("p",{className:Z,children:["Author: ",t]}),(0,f.jsx)("p",{className:y,children:r})]})},n)}));return(0,f.jsxs)(f.Fragment,{children:[d&&(0,f.jsx)(w.a,{}),p&&(0,f.jsx)("div",{className:O,children:(0,f.jsx)("p",{className:y,children:"Data not found"})}),m.length>0?(0,f.jsx)("div",{className:O,children:x}):(0,f.jsx)("div",{className:O,children:(0,f.jsx)("p",{className:y,children:"We dont have any reviews for this movie"})})]})}var D="MovieDetailsPage_text__vp0Sm",P="MovieDetailsPage_link__rhdjc",M="MovieDetailsPage_error__inSZ8";function S(){var e=(0,o.useState)({movies:{},loading:!1,error:null}),t=(0,s.Z)(e,2),r=t[0],i=t[1],d=(0,l.UO)().movieId,v=(0,l.s0)();(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{loading:!0})})),e.prev=1,e.next=4,(0,h.TP)(d);case 4:t=e.sent,i((function(e){return(0,n.Z)((0,n.Z)({},e),{},{movies:t,loading:!1})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i((function(t){return(0,n.Z)((0,n.Z)({},t),{},{loading:!1,error:e.t0})}));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[d]);var m=r.loading,x=r.error,_=r.movies,j=Object.keys(_).length>0;return(0,f.jsxs)(f.Fragment,{children:[m&&(0,f.jsx)(w.a,{}),x&&(0,f.jsx)("div",{className:"container",children:(0,f.jsx)("h2",{className:M,children:"Data not found"})}),j&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("section",{className:"section",children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("button",{className:"button",type:"button",onClick:function(){v(-1)},children:"\u2190 Go back"}),(0,f.jsx)(p,(0,n.Z)({},_))]})}),(0,f.jsx)("section",{className:"section",children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("p",{className:D,children:"Additional information"}),(0,f.jsx)(u.rU,{className:P,to:"cast",children:"\u220e Cast"}),(0,f.jsx)(u.rU,{className:P,to:"reviews",children:"\u220e Reviews"})]})}),(0,f.jsxs)(l.Z5,{children:[(0,f.jsx)(l.AW,{path:"cast",element:(0,f.jsx)(b,{})}),(0,f.jsx)(l.AW,{path:"reviews",element:(0,f.jsx)(k,{})})]})]})]})}},4444:function(e,t,r){r.d(t,{M1:function(){return l},TP:function(){return u},_L:function(){return o},tx:function(){return d},zi:function(){return f}});var n=r(5861),a=r(7757),s=r.n(a),i=r(4569),c=r.n(i)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"34dbf9d1a3fd74b10bf7ab9eec59866f",language:"en-US"}}),o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:1,e.next=3,c("/search/movie",{params:{query:t,page:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return s}})},2982:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(907);var a=r(181);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=374.ff745e52.chunk.js.map