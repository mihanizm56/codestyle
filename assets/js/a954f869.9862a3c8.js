(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||c;return n?o.a.createElement(b,s(s({ref:t},i),{},{components:n})):o.a.createElement(b,s({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<c;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},115:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},116:function(e,t,n){"use strict";var r=n(0),o=n.n(r),c=n(10),a=n(115),s=n(8);const u=Object(r.createContext)({collectLink:()=>{}});var i=n(117),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:p,activeClassName:f,isActive:b,"data-noBrokenLinkCheck":m,autoAddBaseUrl:O=!0}=e,v=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(i.b)(),j=Object(r.useContext)(u),w=d||p,g=Object(a.a)(w),h=null==w?void 0:w.replace("pathname://",""),x=void 0!==h?(k=h,O&&(e=>e.startsWith("/"))(k)?y(k):k):void 0;var k;const P=Object(r.useRef)(!1),E=n?c.e:c.c,C=s.a.canUseIntersectionObserver;let N;Object(r.useEffect)((()=>(!C&&g&&window.docusaurus.prefetch(x),()=>{C&&N&&N.disconnect()})),[x,C,g]);const T=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,U=!x||!g||T;return x&&g&&!T&&!m&&j.collectLink(x),U?o.a.createElement("a",Object.assign({href:x},w&&!g&&{target:"_blank",rel:"noopener noreferrer"},v)):o.a.createElement(E,Object.assign({},v,{onMouseEnter:()=>{P.current||(window.docusaurus.preload(x),P.current=!0)},innerRef:e=>{var t,n;C&&e&&g&&(t=e,n=()=>{window.docusaurus.prefetch(x)},N=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t),N.disconnect(),n())}))})),N.observe(t))},to:x||""},n&&{isActive:b,activeClassName:f}))}},117:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(16),o=n(115);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:c=!1,absolute:a=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+s:s}(t,e,n,r)}}function a(e,t){void 0===t&&(t={});const{withBaseUrl:n}=c();return n(e,t)}},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(114)),c=n(116);const a={title:"Redux ducks"},s={unversionedId:"redux/ducks",id:"redux/ducks",isDocsHomePage:!1,title:"Redux ducks",description:"\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0445\u043e\u0434 redux-ducks",source:"@site/docs/redux/ducks.md",slug:"/redux/ducks",permalink:"/codestyle/docs/redux/ducks",editUrl:"https://github.com/mihanizm56/codestyle/tree/master/docs/redux/ducks.md",version:"current",sidebar:"someSidebar",previous:{title:"\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f",permalink:"/codestyle/docs/redux/types"},next:{title:"Redux core modules",permalink:"/codestyle/docs/redux/redux-core"}},u=[],i={toc:u};function l(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u0412 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0445\u043e\u0434 ",Object(o.b)(c.a,{to:"https://github.com/erikras/ducks-modular-redux",mdxType:"Link"},"redux-ducks")),Object(o.b)("p",null,"\u041e\u043d \u043f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0440\u0430 \u043d\u0430 \u0434\u043e\u043c\u0435\u043d\u044b(\u043c\u043e\u0434\u0443\u043b\u0438, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0441\u043c\u044b\u0441\u043b\u0443 \u0434\u0430\u043d\u043d\u044b\u0445).\n\u041a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u043e\u043c\u0438\u043c\u043e \u0440\u0430\u0441\u0448\u0430\u0440\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043f\u043e\u043a \u0438 \u0444\u0430\u0439\u043b\u043e\u0432 (_utils, _constants,...)"),Object(o.b)("p",null,"\u041c\u043e\u0434\u0443\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u043f\u0430\u043f\u043a\u0430\u0445"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 _redux    \n\u2502\xa0\xa0 \u251c\u2500\u2500 users-module\n|   \u2514\u2500\u2500 ...\n\u2502\xa0\xa0 \u251c\u2500\u2500 basket-module\n|   \u2514\u2500\u2500 ...\n\u2502\xa0\xa0 \u251c\u2500\u2500 suppliers-module\n|   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 ...\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 actions.ts - \u042d\u043a\u0448\u0435\u043d\u044b \u043c\u043e\u0434\u0443\u043b\u044f\n\u251c\u2500\u2500 reducer.ts \u2013 \u0420\u0435\u0434\u044e\u0441\u0435\u0440\n\u251c\u2500\u2500 selectors.ts \u2013 \u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b\n\u251c\u2500\u2500 index.ts \u2013 \u0440\u0435-\u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439\n\u251c\u2500\u2500 _types.ts \u2013 \u0442\u0438\u043f\u044b \u043c\u043e\u0434\u0443\u043b\u044f\n\u251c\u2500\u2500 _constants.ts \u2013 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u043c\u043e\u0434\u0443\u043b\u044f\n\u251c\u2500\u2500 sagas \u2013 \u043f\u0430\u043f\u043a\u0430 \u0441 \u0441\u0430\u0433\u0430\u043c\u0438    \n\u2502\xa0\xa0 \u251c\u2500\u2500 some-name \u2013 \u043f\u0430\u043f\u043a\u0430 \u0441 \u0441\u0430\u0433\u0430\u043c\u0438\n|   |   \u251c\u2500\u2500 some-name-worker-saga.ts \u2013 \u0432\u043e\u0442\u0447\u0435\u0440 \u0441\u0430\u0433\u0430    \n|   |   \u251c\u2500\u2500 some-name-watcher-saga.ts \u2013 \u0432\u043e\u0440\u043a\u0435\u0440 \u0441\u0430\u0433\u0430     \n|   |   \u2514\u2500\u2500 index.ts \u2013 \u0440\u0435-\u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432\u043e\u0442\u0447\u0435\u0440 \u0441\u0430\u0433\u0438\n|   \u2514\u2500\u2500 index.ts \u2013 \u0440\u0435-\u044d\u043a\u0441\u043f\u043e\u0440\u0442 \u0432\u043e\u0442\u0447\u0435\u0440 \u0441\u0430\u0433\n\u2514\u2500\u2500 ...\n")))}l.isMDXComponent=!0}}]);