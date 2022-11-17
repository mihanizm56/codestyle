(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),o=(r(0),r(114));const c={title:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 redux"},a={unversionedId:"redux/patterns",id:"redux/patterns",isDocsHomePage:!1,title:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 redux",description:"\u041b\u0435\u043d\u0438\u0432\u044b\u0435 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b \u0438 \u043a\u0430\u043a \u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b",source:"@site/docs/redux/patterns.md",slug:"/redux/patterns",permalink:"/codestyle/docs/redux/patterns",editUrl:"https://github.com/mihanizm56/codestyle/tree/master/docs/redux/patterns.md",version:"current",sidebar:"someSidebar",previous:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 ui-kit",permalink:"/codestyle/docs/react/ui-kit"},next:{title:"\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 redux (actions, reducers, selectors)",permalink:"/codestyle/docs/redux/naming"}},i=[{value:"\u041b\u0435\u043d\u0438\u0432\u044b\u0435 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b \u0438 \u043a\u0430\u043a \u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b",id:"\u043b\u0435\u043d\u0438\u0432\u044b\u0435-\u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b-\u0438-\u043a\u0430\u043a-\u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b",children:[]},{value:"\u0413\u0434\u0435 \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u0438\u0437\u043d\u0435\u0441 \u043b\u043e\u0433\u0438\u043a\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0433\u0434\u0435-\u0434\u0435\u0440\u0436\u0430\u0442\u044c-\u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0438-\u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0435-\u0444\u043e\u0440\u043c\u0430\u0442\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",children:[]},{value:"\u0417\u0430\u043f\u0440\u0435\u0442 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 useSelector \u0438 useDispatch",id:"\u0437\u0430\u043f\u0440\u0435\u0442-\u043d\u0430-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-useselector-\u0438-usedispatch",children:[]}],u={toc:i};function s(e){let{components:t,...r}=e;return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u043b\u0435\u043d\u0438\u0432\u044b\u0435-\u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b-\u0438-\u043a\u0430\u043a-\u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b"},"\u041b\u0435\u043d\u0438\u0432\u044b\u0435 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b \u0438 \u043a\u0430\u043a \u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b"),Object(o.b)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 replaceReducers \u0438\u0437 redux - \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0440\u0435\u043d\u0434\u0435\u0440\u0430 \u0440\u0435\u0434\u044e\u0441\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d, \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0435 \u0438 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0438 \u043d\u043e\u0432\u044b\u0445 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u043e\u0432 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430\u0445 \u043f\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u043e\u043c\u0435\u043d\u0442 \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u0435\u0436\u043d\u0438\u0435 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u043b\u0438\u0441\u044c \u0430 \u043d\u043e\u0432\u044b\u0435 \u0435\u0449\u0435 \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0438\u0441\u044c \u0438\u043b\u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442. \u042d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0438\u0437 \u0437\u0430 \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u0440\u0435\u043d\u0434\u0435\u0440 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437 \u0437\u0430 \u043e\u0442\u0437\u044b\u0432\u0447\u0438\u0432\u043e\u0433\u043e UX \u0438 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430 \u043d\u0430 \u0440\u0435\u043d\u0434\u0435\u0440. \u0414\u043b\u044f \u0438\u0437\u0431\u0435\u0436\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u043f\u0440\u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f\u0445 \u0433\u043e\u043d\u043a\u0438 - \u043d\u0443\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0435\u0441\u043b\u0438 \u0440\u0435\u0434\u044e\u0441\u0435\u0440 \u043d\u0435 \u0431\u044b\u043b \u0432\u044b\u0431\u0440\u0430\u043d"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"import { createSelector } from 'reselect';\nimport { MembersFormStateType, MembersFormStatePartType } from './_types';\nimport { initialState } from './reducer';\nimport { FORM_MEMBERS_REDUCER_NAME } from './_constants';\n\nexport const membersValuesStorageSelector = (store: MembersFormStatePartType) =>\n  store[FORM_MEMBERS_REDUCER_NAME] || initialState;\n\nexport const membersFormIsLoadingSelector = createSelector(\n  [membersValuesStorageSelector],\n  ({ isLoading }: MembersFormStateType) => isLoading,\n);\n")),Object(o.b)("h3",{id:"\u0433\u0434\u0435-\u0434\u0435\u0440\u0436\u0430\u0442\u044c-\u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0438-\u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0435-\u0444\u043e\u0440\u043c\u0430\u0442\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445"},"\u0413\u0434\u0435 \u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u0438\u0437\u043d\u0435\u0441 \u043b\u043e\u0433\u0438\u043a\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u0417\u0430\u043f\u0440\u0435\u0449\u0430\u0435\u0442\u0441\u044f \u043f\u0438\u0441\u0430\u0442\u044c \u0431\u0438\u0437\u043d\u0435\u0441 \u043b\u043e\u0433\u0438\u043a\u0443 \u0432 \u0440\u0435\u0434\u044e\u0441\u0435\u0440\u0435 \u0438 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430\u0445. \u041e\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043b\u0438\u0431\u043e \u0432 \u0441\u0430\u0433\u0430\u0445 \u043b\u0438\u0431\u043e \u0432 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0435."),Object(o.b)("li",{parentName:"ul"},"\u0412 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430\u0445 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u043e \u0441\u0442\u043e\u0440\u0430 \u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 (\u0441 \u0432\u044b\u043d\u043e\u0441\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0442\u0435\u0440\u043e\u0432 \u0432 \u0443\u0442\u0438\u043b\u0438\u0442\u044b \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438)"),Object(o.b)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0444\u043e\u0440\u043c\u0430\u0442\u0442\u0435\u0440\u044b \u0432 \u0441\u0430\u0433\u0430\u0445")),Object(o.b)("h3",{id:"\u0437\u0430\u043f\u0440\u0435\u0442-\u043d\u0430-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-useselector-\u0438-usedispatch"},"\u0417\u0430\u043f\u0440\u0435\u0442 \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 useSelector \u0438 useDispatch"),Object(o.b)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0445\u043e\u043a connect \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0447\u0438\u0441\u0442\u044b\u043c \u0438 \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442. \u0422\u0430\u043a\u0436\u0435 \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c. \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0436\u0435 connect \u043d\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0442\u043a \u043e\u043d \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043a \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435 redux"))}s.isMDXComponent=!0},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||c;return r?o.a.createElement(b,i(i({ref:t},s),{},{components:r})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);