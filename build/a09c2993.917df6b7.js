(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(84)),o={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Puth is in active development and there are still some features missing.",source:"@site/docs/introduction.md",slug:"/",permalink:"/puth-docs/docs/",editUrl:"https://github.com/puth/website/edit/master/website/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Design Principles",permalink:"/puth-docs/docs/design-principles"}},l=[{value:"What is Puth",id:"what-is-puth",children:[]},{value:"Features",id:"features",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Puth is in active development and there are still some features missing."))),Object(i.b)("p",null,"Puth replaces the current browser testing frameworks with a unified and modern framework. It is intended to be fundamentally extensible and easy to use. It was developed out of pure frustration with currently available frameworks."),Object(i.b)("p",null,"At the moment there is only a official ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"javascript"}),"Javascript client"),". This is included in Puth."),Object(i.b)("h3",{id:"what-is-puth"},"What is Puth"),Object(i.b)("p",null,"Puth is a framework that uses Puppeteer. You can build your own plugins for it and you can easily build clients in your desired programming language.\nIts goal is to replace all current Browser test framework because let's face it, they are not any good."),Object(i.b)("p",null,"The goal is to make Puth easily usable and extendable so everyone can build tools and clients for it."),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Easy to use",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"GUI"),Object(i.b)("li",{parentName:"ul"},"Built with usability in mind"),Object(i.b)("li",{parentName:"ul"},"Built on puppeteer"),Object(i.b)("li",{parentName:"ul"},"Easily customizable. Comes without additional features"))),Object(i.b)("li",{parentName:"ul"},"Extensible",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Add your own functionality with plugins"),Object(i.b)("li",{parentName:"ul"},"Extendable element functionality, Api, GUI"),Object(i.b)("li",{parentName:"ul"},"Puth standard functions are Plugins in themselves")))))}s.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);