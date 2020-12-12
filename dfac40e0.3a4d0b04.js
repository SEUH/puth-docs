(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(84)),c={id:"write-your-own-client",title:"Write your own client",sidebar_label:"Write your own client"},i={unversionedId:"write-your-own-client",id:"write-your-own-client",isDocsHomePage:!1,title:"Write your own client",description:"Here you will learn how to create a client for Puth. Puth is on the one hand a http server over which you work via remote prcedure calls on the remote objects.",source:"@site/docs/write-your-own-generic-client.md",slug:"/write-your-own-client",permalink:"puth-docs/docs/write-your-own-client",editUrl:"https://github.com/puth/website/edit/master/website/docs/write-your-own-generic-client.md",version:"current",sidebar_label:"Write your own client",sidebar:"docs",previous:{title:"Installation",permalink:"puth-docs/docs/installation"}},l=[{value:"Puths Api",id:"puths-api",children:[]},{value:"Principles of remote object interactions",id:"principles-of-remote-object-interactions",children:[]},{value:"Lets start",id:"lets-start",children:[{value:"Creating a new Context",id:"creating-a-new-context",children:[]},{value:"Creating a new Browser",id:"creating-a-new-browser",children:[]},{value:"Creating a new Page",id:"creating-a-new-page",children:[]},{value:"Opening a website on the page",id:"opening-a-website-on-the-page",children:[]}]},{value:"Working example",id:"working-example",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Here you will learn how to create a client for Puth. Puth is on the one hand a http server over which you work via remote prcedure calls on the remote objects."),Object(r.b)("h2",{id:"puths-api"},Object(r.b)("a",Object(a.a)({parentName:"h2"},{href:"api"}),"Puths Api")),Object(r.b)("p",null,"We use the following 5 api endpoints to write our own client."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"api#create-context"}),"Create Context"),": ",Object(r.b)("inlineCode",{parentName:"li"},"POST /context")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"api#delete-context"}),"Delete Context"),": ",Object(r.b)("inlineCode",{parentName:"li"},"DELETE /context")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"api#call-on-context"}),"Call on Context"),": ",Object(r.b)("inlineCode",{parentName:"li"},"PATCH /context/call")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"api#get-on-context"}),"Get on Context"),": ",Object(r.b)("inlineCode",{parentName:"li"},"PATCH /context/get")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"api#set-on-context"}),"Set on Context"),": ",Object(r.b)("inlineCode",{parentName:"li"},"PATCH /context/set"))),Object(r.b)("h2",{id:"principles-of-remote-object-interactions"},"Principles of remote object interactions"),Object(r.b)("p",null,"The Api always returns one of the following types: ",Object(r.b)("inlineCode",{parentName:"p"},"GenericObject"),", ",Object(r.b)("inlineCode",{parentName:"p"},"GenericValue")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Error"),"."),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"GenericObject")," response ",Object(r.b)("strong",{parentName:"p"},"does not")," contain the actual object, it contains an ",Object(r.b)("inlineCode",{parentName:"p"},"Representation")," (Object with ",Object(r.b)("inlineCode",{parentName:"p"},"id"),", ",Object(r.b)("inlineCode",{parentName:"p"},"type")," and ",Object(r.b)("inlineCode",{parentName:"p"},"represents"),")."),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"GenericValue")," response contains the actual ",Object(r.b)("inlineCode",{parentName:"p"},"value"),". You only get a GenericValue response if the returning value, of f.e. a function call, is serializable."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Conclusion")),Object(r.b)("p",null,"The client never gets the actual objects on which you interact. It only knows the ",Object(r.b)("inlineCode",{parentName:"p"},"Representation")," of objects, it is somewhat like a Handle/Pointer/Symbol."),Object(r.b)("h2",{id:"lets-start"},"Lets start"),Object(r.b)("p",null,"Our goal is to connect to Puth, then create our first context, browser and page. Then we want to open a website. I will represent the actual http requests for this. You can use any language, i will just show some example prototype code in javascript for easier understanding."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// This is a prototype code representation of our goal\nputh = Puth('http://127.0.0.1:4000'); // Puth will be the final client\ncontext = puth.contextCreate();\nbrowser = context.createBrowser();\npage = browser.newPage();\n\npage.goto('https://docs.puth.io/');\n")),Object(r.b)("h3",{id:"creating-a-new-context"},"Creating a new Context"),Object(r.b)("p",null,"To create a new context we need to make a POST request to ",Object(r.b)("inlineCode",{parentName:"p"},"/context"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"contextRepresentation = request('POST', '/context');\n")),Object(r.b)("h3",{id:"creating-a-new-browser"},"Creating a new Browser"),Object(r.b)("p",null,"Now we have the ",Object(r.b)("inlineCode",{parentName:"p"},"Representation")," of the Context. Next we want to instantiate a new Browser."),Object(r.b)("p",null,"To create a new Browser we need to call the ",Object(r.b)("inlineCode",{parentName:"p"},"createBrowser")," function on the context. So we need to make a PATCH request to ",Object(r.b)("inlineCode",{parentName:"p"},"/context/call"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"contextRepresentation = request('POST', '/context');\n\nbrowserRepresentation = request('PATCH', '/context/call', {\n  context: contextRepresentation,\n  function: 'createBrowser',\n});\n")),Object(r.b)("h3",{id:"creating-a-new-page"},"Creating a new Page"),Object(r.b)("p",null,"Now we have the ",Object(r.b)("inlineCode",{parentName:"p"},"Representation")," of the Browser. Next we want to instantiate a new Page."),Object(r.b)("p",null,"To create a new Page we need to call the ",Object(r.b)("inlineCode",{parentName:"p"},"newPage")," function on the Browser object within the context. Again we need to make a PATCH request to ",Object(r.b)("inlineCode",{parentName:"p"},"/context/call")," but now containing the object with which we want to interact."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"contextRepresentation = request('POST', '/context');\n\nbrowserRepresentation = request('PATCH', '/context/call', {\n  context: contextRepresentation,\n  function: 'createBrowser',\n});\n\npageRepresentation = request('PATCH', '/context/call', {\n  context: contextRepresentation,\n  id: browserRepresentation.id,\n  type: browserRepresentation.type,\n  function: 'createPage',\n});\n")),Object(r.b)("h3",{id:"opening-a-website-on-the-page"},"Opening a website on the page"),Object(r.b)("p",null,"Now we have the ",Object(r.b)("inlineCode",{parentName:"p"},"Representation")," of the Page. Next we want to go to a website."),Object(r.b)("p",null,"To go to a website on the page, we need to call the ",Object(r.b)("inlineCode",{parentName:"p"},"goto")," function on the Page object within the context. Again we need to make a PATCH request to ",Object(r.b)("inlineCode",{parentName:"p"},"/context/call")," but now containing the object with which we want to interact."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* .... */\n\npageRepresentation = request('PATCH', '/context/call', {\n  context: contextRepresentation,\n  id: browserRepresentation.id,\n  type: browserRepresentation.type,\n  function: 'createPage',\n});\n\nrequest('PATCH', '/context/call', {\n  context: contextRepresentation,\n  id: pageRepresentation.id,\n  type: pageRepresentation.type,\n  function: 'goto',\n  parameters: [\n    'https://docs.puth.io/'\n  ]\n});\n")),Object(r.b)("h2",{id:"working-example"},"Working example"),Object(r.b)("p",null,"The following code illustrates what we have learned in this tutorial. Now you know how to interact with Puth. If you want to have a look on the official js client, you can go to LINK"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="Dependencies: axios. Written for nodejs."',title:'"Dependencies:',"axios.":!0,Written:!0,for:!0,'nodejs."':!0}),"const axios = require('axios');\n\n(async () => {\n  \n  // Create axios instance\n  let instance = axios.create({\n    baseURL: 'http://127.0.0.1:4000',\n  });\n  \n  // Create context\n  let contextRepr = await instance.post('/context', {})\n    .then(r => r.data)\n    .catch(console.error);\n  \n  // Call createBrowser on Context\n  let browserRepr = await instance.patch('/context/call', {\n      context: contextRepr,\n      id: contextRepr.id,\n      type: contextRepr.type,\n      function: 'createBrowser',\n    })\n    .then(r => r.data)\n    .catch(console.error);\n  \n  // Call createPage on Browser\n  let pageRepr = await instance.patch('/context/call', {\n      context: contextRepr,\n      id: browserRepr.id,\n      type: browserRepr.type,\n      function: 'newPage',\n    })\n    .then(r => r.data)\n    .catch(console.error);\n  \n  // Call goto on Page\n  await instance.patch('/context/call', {\n      context: contextRepr,\n      id: pageRepr.id,\n      type: pageRepr.type,\n      function: 'goto',\n      parameters: [\n        'https://google.com/',\n      ],\n    })\n    .then(r => r.data)\n    .catch(console.error);\n  \n  // Cal url function on page\n  let pageUrl = await instance.patch('/context/call', {\n      context: contextRepr,\n      id: pageRepr.id,\n      type: pageRepr.type,\n      function: 'url',\n    })\n    .then(r => r.data)\n    .catch(console.error);\n  \n  console.log('page url is', pageUrl.value);\n  \n  // Cleanup: delete the context\n  await instance.delete('/context', {\n    data: {\n      id: contextRepr.id,\n    },\n  });\n\n})();\n")))}s.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},w=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),w=a,d=b["".concat(c,".").concat(w)]||b[w]||u[w]||r;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=w;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}w.displayName="MDXCreateElement"}}]);