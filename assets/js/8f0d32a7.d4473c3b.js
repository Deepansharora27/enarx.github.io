"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8034],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={},s=void 0,c={unversionedId:"Technical/Components",id:"Technical/Components",title:"Components",description:"Enarx comprises the following components:",source:"@site/docs/Technical/Components.md",sourceDirName:"Technical",slug:"/Technical/Components",permalink:"/docs/Technical/Components",editUrl:"https://github.com/enarx/enarx.github.io/blob/main/docs/Technical/Components.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TEEs",permalink:"/docs/Technical/TEE"},next:{title:"Runtime",permalink:"/docs/Technical/Runtime"}},p={},u=[{value:"Attestation",id:"attestation",level:2},{value:"Enarx API &amp; core",id:"enarx-api--core",level:2},{value:"Enarx runtime",id:"enarx-runtime",level:2},{value:"Management",id:"management",level:2},{value:"Developer tools",id:"developer-tools",level:2},{value:"TLSSock",id:"tlssock",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Enarx comprises the following components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Attestation"),(0,a.kt)("li",{parentName:"ul"},"Enarx API & core"),(0,a.kt)("li",{parentName:"ul"},"Enarx runtime"),(0,a.kt)("li",{parentName:"ul"},"Management")),(0,a.kt)("p",null,"The following components are relevant or related to Enarx:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Developer tools"),(0,a.kt)("li",{parentName:"ul"},"TLSSock")),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"core-components"},"Core components"),(0,a.kt)("h2",{id:"attestation"},"Attestation"),(0,a.kt)("p",null,"An application which is going to run in an Enarx Keep needs to attest two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The hardware TEE (Trusted Execution Environment) providing Keeps."),(0,a.kt)("li",{parentName:"ol"},"A measurement of the Enarx runtime.  This means that Red Hat may need to launch a service to abstract attestation. The way that this works is that the client requests attestation from Enarx.  Enarx supplies a blob. The client forwards this to Red Hat. Red Hat will then complete attestation of the h/w environment and translate the measurements of Enarx into a something which allows you to identify the specific version of Enarx.")),(0,a.kt)("p",null,"From the client\u2019s point of view, the attestation steps of Enarx end up with the following two cryptographically validated assertions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The TEE type and version;"),(0,a.kt)("li",{parentName:"ol"},"The Enarx version and integrity.\nThe attestation processes associated with the various hardware architectures are very different (see ",(0,a.kt)("a",{parentName:"li",href:"AMD-SEV"},"SEV architectural")," and ",(0,a.kt)("a",{parentName:"li",href:"Intel-SGX"},"SGX architectural"),"): providing a common mechanism to abstract this is expected to be a major part of the work associated with this project.")),(0,a.kt)("h2",{id:"enarx-api--core"},"Enarx API & core"),(0,a.kt)("p",null,"This project actually defines the WASI APIs and manages the attestation for all of the TEEs.  It leverages the Enarx runtime."),(0,a.kt)("h2",{id:"enarx-runtime"},"Enarx runtime"),(0,a.kt)("p",null,"This project aims to create a reusable engine to do WebAssembly.  See ",(0,a.kt)("a",{parentName:"p",href:"Runtime"},"Enarx runtime"),"."),(0,a.kt)("h2",{id:"management"},"Management"),(0,a.kt)("p",null,"This project will allow orchestration and management of workloads into Enarx Keeps."),(0,a.kt)("h1",{id:"related-components"},"Related components"),(0,a.kt)("h2",{id:"developer-tools"},"Developer tools"),(0,a.kt)("p",null,"In order to address the market and encourage maximum adoption of Enarx, tools need to be enabled to allow developers to make use of Enarx as simply as possible."),(0,a.kt)("h2",{id:"tlssock"},"TLSSock"),(0,a.kt)("p",null,"The intent of TLSSock is to extend POSIX APIs to support TLS and DTLS natively.  This is not to be used within the Keep: it\u2019s to gather agreement on an API to be put into POSIX.  We hope at some point to go through the standards process so that this is accepted by the industry.  Adoption of TLSSock and associated APIs will enable applications to use the same code both from within and outside the Keep."),(0,a.kt)("p",null,"Crypto-agility is a strong design requirement, and there is interest in providing implementations of some of the emerging quantum-resistant algorithms (partly as supporting one or more would provide good visibility for the project)."),(0,a.kt)("p",null,"Deemed out-of-scope:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IPSec integration - as this operates at the interface level, not the socket level.")),(0,a.kt)("p",null,"Issues for discussion:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SNI support"),(0,a.kt)("li",{parentName:"ul"},"GSS-API support"),(0,a.kt)("li",{parentName:"ul"},"Hardware offload support")))}h.isMDXComponent=!0}}]);