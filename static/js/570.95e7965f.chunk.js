"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[570],{570:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,c,o,i,u=t(439),a=t(689),s=t(791),f=t(297),h=t(168),l=t(444),p=l.ZP.li(r||(r=(0,h.Z)(["\n    height: auto;\n    padding: 10px;\n"]))),d=l.ZP.h2(c||(c=(0,h.Z)(["\n    font-weight: 500;\n    font-size: 15px;\n\n\n"]))),v=l.ZP.p(o||(o=(0,h.Z)(["\n    font-weight: 300;\n    font-size: 15px;\n    line-height: 1.67;\n\n"]))),g=l.ZP.ul(i||(i=(0,h.Z)(["\nmargin-left: 20px;\n\n"]))),m=t(184);function x(){var n=(0,a.UO)().movieId,e=(0,s.useState)([]),t=(0,u.Z)(e,2),r=t[0],c=t[1];return(0,s.useEffect)((function(){(0,f.tx)(n).then((function(n){var e=n.results;return c(e)}))}),[n]),(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(g,{children:0!==r.length?r.map((function(n){return[(0,m.jsxs)(p,{children:[(0,m.jsx)(d,{children:n.author}),(0,m.jsx)(v,{children:n.content})]},n.id)]})):(0,m.jsx)(v,{children:"We don`t have any reviews for this movie"})})})}},297:function(n,e,t){t.d(e,{Eb:function(){return h},Ph:function(){return p},kI:function(){return f},tx:function(){return l}});var r=t(861),c=t(757),o=t.n(c),i="436949076e001e14eab6be97ed97ce99",u="https://api.themoviedb.org/3/";function a(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function n(){var e,t,r,c=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(e,t);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return a("".concat(u,"trending/movie/day?api_key=").concat(i))}function h(n){return a("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}function l(n){return a("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}function p(n){return a("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n))}},861:function(n,e,t){function r(n,e,t,r,c,o,i){try{var u=n[o](i),a=u.value}catch(s){return void t(s)}u.done?e(a):Promise.resolve(a).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,o){var i=n.apply(e,t);function u(n){r(i,c,o,u,a,"next",n)}function a(n){r(i,c,o,u,a,"throw",n)}u(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=570.95e7965f.chunk.js.map