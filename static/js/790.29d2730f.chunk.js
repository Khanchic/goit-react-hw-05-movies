"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[790],{790:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var i,r,o,a,c,p,s,x,d,l,h,u,g,f,v,Z,m,j,b=t(439),w=t(689),P=t(791),k=t(297),y=t(168),_=t(444),z=_.ZP.div(i||(i=(0,y.Z)(["\n    display: flex;\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    padding: 10px;\n\n"]))),S=_.ZP.img(r||(r=(0,y.Z)(["\n   height: 300px;\n   margin-right: 20px;\n"]))),U=_.ZP.div(o||(o=(0,y.Z)(["\n  \n    padding: 10px;\n    \n\n"]))),M=_.ZP.h1(a||(a=(0,y.Z)(["\n    font-weight: 500;\n    font-size: 25px;\n\n"]))),C=_.ZP.p(c||(c=(0,y.Z)(["\n    font-weight: 300;\n    font-size: 15px;\n    line-height: 1.67;\n\n"]))),E=_.ZP.h2(p||(p=(0,y.Z)(["\n    font-weight: 500;\n    font-size: 15px;\n\n\n"]))),F=_.ZP.h3(s||(s=(0,y.Z)(["\n    font-weight: 500;\n    font-size: 13px;\n\n\n"]))),G=t(184),B=function(n){var e=n.dataMovie,t=e.title,i=e.release_date,r=e.poster_path,o=e.genres,a=e.overview,c=e.vote_average,p=null!==r?"https://image.tmdb.org/t/p/original".concat(r):"https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg",s=i.slice(0,4),x=o.length>0?o.map((function(n){return n.name})).join(", "):"No information",d="".concat((10*c).toFixed(0),"%");return(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)(z,{children:[(0,G.jsx)(S,{alt:t,src:p}),(0,G.jsxs)(U,{children:[(0,G.jsxs)(M,{children:[t,"(",s,")"]}),(0,G.jsxs)(C,{children:["User Score: ",d]}),(0,G.jsx)(E,{children:"Overview"}),(0,G.jsx)(C,{children:a}),(0,G.jsx)(F,{children:"Genres"}),(0,G.jsx)(C,{children:x})]})]})})},D=t(820),I=t(87),N=(0,_.ZP)(D.kyg)(x||(x=(0,y.Z)(["\n    width: 7px;\n    padding: 0;\n"]))),O=(0,_.ZP)(I.rU)(d||(d=(0,y.Z)(["\n    margin-top: 5px;\n    margin-bottom: 3px;\n    display: inline-flex;\n    align-items: center;\n    gap: 5px;\n    padding: 2px 8px;\n    text-decoration: none;\n    font-weight: 500;\n    border-radius: 15px;\n    border: 1px solid #eee;\n    :hover {\n        color: #e72525;}\n"]))),T=(_.ZP.div(l||(l=(0,y.Z)(["\n    display: flex;\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    padding: 10px;\n\n"]))),_.ZP.img(h||(h=(0,y.Z)(["\n   height: 300px;\n   margin-right: 20px;\n"]))),_.ZP.div(u||(u=(0,y.Z)(["\n  \n    padding: 10px;\n    \n\n"]))),_.ZP.h1(g||(g=(0,y.Z)(["\n    font-weight: 500;\n    font-size: 25px;\n\n"]))),_.ZP.p(f||(f=(0,y.Z)(["\n    font-weight: 300;\n    font-size: 15px;\n    line-height: 1.67;\n\n"]))),_.ZP.h2(v||(v=(0,y.Z)(["\n    font-weight: 500;\n    font-size: 15px;\n\n\n"]))),_.ZP.h3(Z||(Z=(0,y.Z)(["\n    font-weight: 500;\n    font-size: 13px;\n\n\n"]))),(0,_.ZP)(I.rU)(m||(m=(0,y.Z)(["\n    text-decoration: none;\n    color: black;\n    :hover {\n        color: #0920e7;}\n"])))),q=_.ZP.div(j||(j=(0,y.Z)(["\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    padding: 10px;\n"]))),A=function(){var n,e,t=(0,w.UO)().movieId,i=null!==(n=null===(e=(0,w.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",r=(0,P.useState)(null),o=(0,b.Z)(r,2),a=o[0],c=o[1];return(0,P.useEffect)((function(){(0,k.DG)(t).then((function(n){return c(n)}))}),[t]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(O,{to:i,children:[(0,G.jsx)(N,{}),"Back"]}),a&&(0,G.jsx)(B,{dataMovie:a}),(0,G.jsxs)(q,{children:[(0,G.jsx)("p",{children:"Additional info:"}),(0,G.jsxs)("ul",{children:[(0,G.jsx)("li",{children:(0,G.jsx)(T,{to:"cast",state:{from:i},children:"Cast"})}),(0,G.jsx)("li",{children:(0,G.jsx)(T,{to:"reviews",state:{from:i},children:"Reviews"})})]})]}),(0,G.jsx)(P.Suspense,{fallback:(0,G.jsx)("p",{children:"Loading inside Movie ..."}),children:(0,G.jsx)(w.j3,{})})]})}},297:function(n,e,t){t.d(e,{DG:function(){return d},Eb:function(){return l},Ph:function(){return u},kI:function(){return x},tx:function(){return h}});var i=t(861),r=t(757),o=t.n(r),a="436949076e001e14eab6be97ed97ce99",c="https://api.themoviedb.org/3/";function p(){return s.apply(this,arguments)}function s(){return s=(0,i.Z)(o().mark((function n(){var e,t,i,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",t=r.length>1&&void 0!==r[1]?r[1]:{},n.next=4,fetch(e,t);case 4:if(!(i=n.sent).ok){n.next=11;break}return n.next=8,i.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function x(){return p("".concat(c,"trending/movie/day?api_key=").concat(a))}function d(n){return p("".concat(c,"/movie/").concat(n,"?api_key=").concat(a,"&language=en-US"))}function l(n){return p("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(a,"&language=en-US"))}function h(n){return p("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))}function u(n){return p("".concat(c,"/search/movie?api_key=").concat(a,"&language=en-US&page=1&include_adult=false&query=").concat(n))}}}]);
//# sourceMappingURL=790.29d2730f.chunk.js.map