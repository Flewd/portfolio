(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"A2+M":function(e,t,r){var o=r("X8hv");e.exports={MDXRenderer:o}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,r){var o=r("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},RIqP:function(e,t,r){var o=r("Ijbi"),n=r("EbDI"),c=r("ZhPi"),a=r("Bnag");e.exports=function(e){return o(e)||n(e)||c(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,r){var o=r("RIqP"),n=r("sXyB"),c=r("lSNA"),a=r("8OQS"),i=["scope","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r("q1tI"),u=r("7ljp").mdx,d=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=a(e,i),s=d(t),f=p.useMemo((function(){if(!r)return null;var e=l({React:p,mdx:u},s),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return p.createElement(f,l({},c))}},ZhPi:function(e,t,r){var o=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},sVz0:function(e,t,r){"use strict";r.r(t);var o=r("hGi/"),n=(r("q1tI"),r("2A+t")),c=r("izhR"),a=r("wEEd"),i=r("9eSz"),s=r.n(i),l=r("3ILm"),p=r("Wbzz"),u=r("A2+M"),d=r("Vm2P"),f=r("qKvR"),b=function(){return Object(f.c)("svg",{width:"20",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(f.c)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.832 17.642L.345 9.864a1.256 1.256 0 0 1 0-1.728L7.832.358a1.146 1.146 0 0 1 1.663 0c.46.477.46 1.251 0 1.728L4.017 7.778H20v2.444H4.017l5.478 5.692c.46.477.46 1.25 0 1.728a1.146 1.146 0 0 1-1.663 0z",fill:"currentColor"}))},x=r("jIW3"),m=function(e){var t,r,o=e.title,i=(e.areas,e.description),l=void 0===i?"":i,f=(e.date,Object(x.a)().name),m=Object(p.useStaticQuery)("640604852"),y=Object(a.c)({config:a.b.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),v=Object(a.c)({config:a.b.slow,from:{opacity:0,transform:"translate3d(-30px, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),O=Object(a.c)({config:a.b.slow,delay:500,from:{opacity:0},to:{opacity:1}});return Object(n.c)(c.c,{as:"header",variant:"layout.header"},Object(n.c)(d.a,null),Object(n.c)(c.b,{sx:{textAlign:"center",my:4,zIndex:10}},Object(n.c)(a.a.div,{style:v},Object(n.c)(p.Link,{to:"/","aria-label":f+" - Back to homepage",sx:{display:"flex",alignItems:"center",color:"text",textDecoration:"none",svg:{transition:"transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)"},"&:hover, &:focus":{svg:{transform:"translateX(-6px)"}}}},Object(n.c)(b,null),Object(n.c)("div",{sx:{overflow:"hidden",borderRadius:"full",width:"40px",height:"40px",display:"inline-block",boxShadow:"md",mx:2}},(null==m||null===(t=m.file)||void 0===t||null===(r=t.childImageSharp)||void 0===r?void 0:r.fixed)&&Object(n.c)(s.a,{fixed:m.file.childImageSharp.fixed})),Object(n.c)("span",{sx:{fontWeight:"medium"}},f))),Object(n.c)("div",{sx:{mt:4,mb:[6,6,7]}},Object(n.c)(a.a.div,{style:y},Object(n.c)(c.d,{as:"h1",variant:"styles.h1"},o)),Object(n.c)(a.a.div,{style:O},l&&Object(n.c)("div",{sx:{maxWidth:"900px",mx:"auto",mt:5,p:{textAlign:"left"}}},Object(n.c)(u.MDXRenderer,null,l))),Object(n.c)("div",{style:{flex:2,flexDirection:"row"}}))))},y=r("VpuK"),v=function(e){var t=e.prev,r=e.next;return Object(n.c)("div",{sx:{mt:6,mb:4}},Object(n.c)("div",{sx:{display:"grid",gridTemplateColumns:"250px 1fr",alignItems:"center",mb:4}},Object(n.c)("h2",{sx:{color:"textMuted",fontWeight:"medium",letterSpacing:"widest",textTransform:"uppercase",fontSize:1,my:0}},"More Projects"),Object(n.c)("div",{sx:{width:"100%",height:"2px",backgroundColor:"muted"}})),Object(n.c)("div",{sx:{display:"grid",gridTemplateColumns:["1fr","1fr","1fr 1fr"],gridGap:[4,4,5],a:{position:"relative"},"[data-name='card-overlay']":{position:"absolute",top:0,left:0,right:0,bottom:0},".gatsby-image-wrapper > div":{paddingBottom:"56% !important"}}},t&&Object(n.c)(y.a,{item:t}),r&&Object(n.c)(y.a,{item:r})))},O=r("cnFw"),j=function(e){var t=e.data,r=t.project,o=t.images,i=e.pageContext,p=i.prev,u=i.next,d=Object(a.c)({config:a.b.slow,delay:800,from:{opacity:0},to:{opacity:1}});return Object(n.c)(l.a,null,Object(n.c)(O.a,{title:r.title,description:r.excerpt,pathname:r.slug,image:r.cover.childImageSharp.resize.src}),Object(n.c)(m,{title:r.title,description:r.body,areas:r.areas,date:r.date}),Object(n.c)(c.b,{style:{maxWidth:"55em"},sx:{mt:["-6rem","-6rem","-19rem"]}},o.nodes.map((function(e){return Object(n.c)(a.a.div,{key:e.name,style:d},Object(n.c)(s.a,{fluid:e.childImageSharp.fluid,alt:e.name,sx:{mb:[4,4,2],boxShadow:"xl"}}))})),Object(n.c)(v,{prev:p,next:u})))};t.default=function(e){var t=Object.assign({},(Object(o.a)(e),e));return Object(f.c)(j,t)}},sXyB:function(e,t,r){var o=r("SksO"),n=r("b48C");function c(t,r,a){return n()?(e.exports=c=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=c=function(e,t,r){var n=[null];n.push.apply(n,t);var c=new(Function.bind.apply(e,n));return r&&o(c,r.prototype),c},e.exports.__esModule=!0,e.exports.default=e.exports),c.apply(null,arguments)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-emilia-core-src-templates-project-query-tsx-471c4d0e2c402d6f860e.js.map