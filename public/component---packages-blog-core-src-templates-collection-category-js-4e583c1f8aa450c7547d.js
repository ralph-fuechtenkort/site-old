(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FbdX:function(t,e,n){},H48k:function(t,e,n){"use strict";n.r(e);var r=n("t4K8");e.default=r.a},IO5D:function(t,e,n){},We4V:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("mXGw");var r=n("1Gva"),c=n("aD51"),o={count:{fontSize:4},subheader:{fontWeight:"body",color:"omegaDark"},runninghead:{fontWeight:"body",color:"omegaDark",mb:0}},i=function(t){var e=t.header,n=t.subheader,i=t.running,a=t.totalCount;return Object(c.c)("div",null,Object(c.c)(r.h,{variant:"h1",as:"h1"},e," ",a&&Object(c.c)(r.a,{variant:"tag-white",sx:o.count}," ",a)),n&&Object(c.c)(r.p,{variant:"h3",sx:o.subheader},n),i&&Object(c.c)(r.p,{variant:"h4",sx:o.runninghead},i))}},og7e:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n("Fcif"),c=n("+I+c"),o=n("mXGw"),i=n.n(o),a=n("1Gva"),l=n("GZVQ"),s=n("lAxG"),u=n("mK0O"),d=n("Cini"),b=n("y6Mt"),f=n("A4YR"),p=(n("IO5D"),n("FbdX"),{slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{display:["none","block"],textAlign:"center",width:"auto",top:5,left:4,p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}}),O=n("q/Up"),j=n("aD51");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){Object(u.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=Object(O.a)((function(){return n.e(18).then(n.t.bind(null,"2UUl",7))})),h=i.a.forwardRef((function(t,e){var n=t.columns,c=t.slidesToScroll,o=t.smoothAutoScroll,i=t.autoPlay,l=t.autoplaySpeed,s=t.fade,u=t.dots,O=t.arrows,g=t.centerMode,h=t.centerPadding,k=t.controlPosition,w=t.beforeChange,y=t.children,x=Object(d.e)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},S={centerMode:!s,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!u||!s)},D=x.theme.breakpoints.map((function(t,e){var r=n[e>=n.length?n.length-1:e],o=c[e>=c.length?c.length-1:e];return{breakpoint:parseInt(t),settings:v({slidesToShow:r,slidesToScroll:o},0===e?S:{})}})),C={ref:e,beforeChange:w,slidesToShow:n[n.length-1],slidesToScroll:c[c.length-1],speed:800,dots:u,arrows:O,centerMode:g,centerPadding:h,infinite:!0,cssEase:s?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:s,responsive:D,css:Object(b.a)(v(v(v(v({},s?p.fade:p.slide),"bottom"===k&&p.controlBottom),"center"===k&&p.controlCenter),"over"===k&&p.controlOver)),prevArrow:Object(j.c)(a.i,{sx:p.arrowPrev},Object(j.c)(f.c,null)),nextArrow:Object(j.c)(a.i,{sx:p.arrowNext},Object(j.c)(f.d,null))};o&&(C=v(v(v({},C),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!o&&i&&(C=v(v(v({},C),P),{},{speed:300,autoplaySpeed:l}));var A=y.slice(0,n[n.length-1]);return Object(j.c)(m,Object(r.a)({},C,{fallback:A}),y)})),k=h;h.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var w=n("hpqI"),y=i.a.forwardRef((function(t,e){var n=t.nodes,o=t.variant,i=t.title,u=t.withTitleLink,d=t.limit,b=t.skip,f=t.distinct,p=t.slider,O=t.aside,g=t.asNavFor,v=t.loading,m=Object(c.a)(t,["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"]),h=Object(l.g)(n,{distinct:f,limit:d,skip:b});if(!h||!h.length)return null;var y=u?h[0].category&&h[0].category.slug:"",x=i&&""+Object(l.e)(h.map((function(t){return t.id})).join()),P=Object(l.a)(p?"lists.cards.slider":"lists.cards.fixed",o),S=function(t){g&&g.current&&(g.current.slickPause(),g.current.slickGoTo(t))},D=h.map((function(e,n){return Object(j.c)(w.a,Object(r.a)({key:e.id,variant:o,onMouseOver:function(){return S(n)},onFocus:function(){return S(n)},loading:t.fade?0===n?v:void 0:v},e,m))})),C=function(){return Object(j.c)(a.b,{sx:{variant:P}},p?Object(j.c)(k,Object(r.a)({ref:e},m),D):D)};return i?Object(j.c)(s.a,{title:i,titleLink:y,key:x,aside:O},Object(j.c)(C,null)):Object(j.c)(C,null)})),x=y;y.defaultProps={variant:"vertical",columns:[1],aside:!1}},t4K8:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("Fcif"),c=n("+I+c"),o=(n("mXGw"),n("fGC6")),i=n("We4V"),a=n("u0/e"),l=n("og7e"),s=n("wEEh"),u=n("ycXb"),d=n("aD51"),b=function(t){var e=t.data,n=e.posts,b=e.collectionInfo,f=Object(c.a)(t,["data"]);return Object(d.c)(o.a,f,Object(d.c)(u.a,{title:b.name}),Object(d.c)(s.a,null),Object(d.c)(o.e,{effectProps:{effect:"fadeInDown"}},Object(d.c)(i.a,{header:b.name,subheader:b.title,running:b.description,totalCount:n.totalCount})),Object(d.c)(s.a,null),Object(d.c)(o.e,null,Object(d.c)(o.b,null,n.nodes&&Object(d.c)(l.a,{nodes:n.nodes,variant:["horizontal-md","vertical"],columns:[1,2,3,3],omitCategory:f.pageContext&&"category"===f.pageContext.collectionType}))),Object(d.c)(s.a,null),Object(d.c)(o.c,null,Object(d.c)(a.a,Object(r.a)({},n.pageInfo,b))))}},"u0/e":function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("mK0O"),c=(n("mXGw"),n("Wbzz")),o=n("1Gva"),i=n("A4YR"),a=function(t){return t.replace(/\/*$/,"/")},l=n("aD51");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},b=function(t){var e=t.currentPage,n=t.pageCount,r=t.hasPreviousPage,s=t.hasNextPage,b=t.basePath,f=void 0===b?"":b,p=t.slug;if(!s&&!r)return"";var O=a(f+(void 0===p?"":p)),j=a(O+"page"),g=e>=3?""+j+(e-1):O,v=""+j+(e+1);return Object(l.c)(o.g,{sx:d.wrapper},Object(l.c)(o.b,{sx:d.item},r&&Object(l.c)(o.c,{variant:"mute",as:c.Link,to:g,sx:d.button},Object(l.c)(i.c,null),"Previous")),Object(l.c)(o.b,{sx:u(u({},d.item),d.number)},"Page ",Object(l.c)("strong",null,e)," of ",Object(l.c)("strong",null,n)),Object(l.c)(o.b,{sx:d.item},s&&Object(l.c)(o.c,{variant:"dark",as:c.Link,to:v,sx:d.button},"Next",Object(l.c)(i.d,null))))}}},0,[3,4,19,21,17,18,22]]);
//# sourceMappingURL=component---packages-blog-core-src-templates-collection-category-js-4e583c1f8aa450c7547d.js.map