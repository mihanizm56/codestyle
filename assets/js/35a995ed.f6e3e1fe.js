(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,b=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?o.a.createElement(b,a(a({ref:t},l),{},{components:n})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(114));const i={title:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b"},c={unversionedId:"boilerplate/configs",id:"boilerplate/configs",isDocsHomePage:!1,title:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b",description:"`",source:"@site/docs/boilerplate/configs.md",slug:"/boilerplate/configs",permalink:"/codestyle/docs/boilerplate/configs",editUrl:"https://github.com/mihanizm56/codestyle/tree/master/docs/boilerplate/configs.md",version:"current",sidebar:"someSidebar",previous:{title:"CLI",permalink:"/codestyle/docs/boilerplate/cli"},next:{title:"\u041f\u0440\u043e\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",permalink:"/codestyle/docs/boilerplate/proxy-setup"}},a=[],p={toc:a};function l(e){let{components:t,...n}=e;return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .husky/ \u2013 \u041f\u0430\u043f\u043a\u0430 \u0441 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 husky\n\u251c\u2500\u2500 utils/ \u2013 \u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b \n\u251c\u2500\u2500 docs/ \u2013 \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430\n\u251c\u2500\u2500 deploy/ \u2013 \u0414\u0435\u043f\u043b\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430\n\u251c\u2500\u2500 .dockerignore \u2013 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0433\u043d\u043e\u0440\u0430 \u0438\u043c\u043f\u043e\u0440\u0442\u043e\u0432 \u0434\u043e\u043a\u0435\u0440 \u043e\u0431\u0440\u0430\u0437\u0430 \n\u251c\u2500\u2500 .editorconfig \u2013 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 editorconfig\n\u251c\u2500\u2500 .eslintignore \u2013 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0433\u043d\u043e\u0440\u0430 eslint\n\u251c\u2500\u2500 .gitignore \u2013 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0433\u043d\u043e\u0440\u0430 git\n\u251c\u2500\u2500 .gitlab-ci.yml \u2013 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 gitlab\n\u251c\u2500\u2500 .stylelintignore \u2013 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438\u0433\u043d\u043e\u0440\u0430 stylelint\n\u251c\u2500\u2500 tsconfig.json \u2013 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 typescript\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u251c\u2500\u2500 editorconfig \u2013 \u0414\u043e\u043f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 editorconfig\n\u2502\xa0\xa0 \u251c\u2500\u2500 git/ \u2013 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 commitizen+commitlint\n\u2502\xa0\xa0 \u251c\u2500\u2500 jest/ \u2013 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 jest\n\u2502\xa0\xa0 \u251c\u2500\u2500 prepare-app-scripts/ \u2013 \u0421\u043a\u0440\u0438\u043f\u0442\u044b \u043f\u0440\u0435\u0434\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 (npm run setup)\n\u2502\xa0\xa0 \u251c\u2500\u2500 sdk-api/ \u2013 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 sdk-api (\u043f\u043e\u043a\u0430 \u0432\u043e freeze)\n\u2502\xa0\xa0 \u251c\u2500\u2500 test-certs/ \u2013 \u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b https\n\u2502\xa0\xa0 \u251c\u2500\u2500 ts-externals/tsconfig.paths.json \u2013 \u0414\u043e\u043f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 typescript\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.json \u2013 \u0414\u0435\u043f\u043b\u043e\u0439 \u043c\u0430\u043d\u0438\u0444\u0435\u0441\u0442 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\n\u2502\xa0\xa0 \u251c\u2500\u2500 webpack \u2013 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 webpack\n|   |   \u251c\u2500\u2500 platform/development/webpack-dev.config.js \u2013 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 webpack \u0434\u043b\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0441 \u043a\u0430\u0440\u043a\u0430\u0441\u043e\u043c\n|   |   \u251c\u2500\u2500 platform/production/webpack-dev.config.js \u2013 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 webpack \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0430\u043a\u0448\u0435\u043d \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 rewired/config-overrides.js \u2013 \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 webpack \u0434\u043b\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0432 \u0440\u0435\u0436\u0438\u043c\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 (CRA) \n\u2514\u2500\u2500 ...\n")))}l.isMDXComponent=!0}}]);