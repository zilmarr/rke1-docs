"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8850],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8355:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=o(3117),n=(o(7294),o(3905));const i={title:"Custom Cloud Provider",weight:255},a=void 0,c={unversionedId:"config-options/cloud-providers/custom/custom",id:"config-options/cloud-providers/custom/custom",title:"Custom Cloud Provider",description:"If you want to enable a different cloud provider, RKE allows for custom cloud provider options. A name must be provided and the custom Cloud Provider options can be passed in as a multiline string in customCloudProvider.",source:"@site/docs/config-options/cloud-providers/custom/custom.md",sourceDirName:"config-options/cloud-providers/custom",slug:"/config-options/cloud-providers/custom/",permalink:"/config-options/cloud-providers/custom/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/custom/custom.md",tags:[],version:"current",lastUpdatedAt:1678745957,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{title:"Custom Cloud Provider",weight:255},sidebar:"mySidebar",previous:{title:"Troubleshooting vSphere Clusters",permalink:"/config-options/cloud-providers/vsphere/troubleshooting/"},next:{title:"Audit Log",permalink:"/config-options/audit-log/"}},s={},l=[],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you want to enable a different cloud provider, RKE allows for custom cloud provider options. A name must be provided and the custom Cloud Provider options can be passed in as a multiline string in ",(0,n.kt)("inlineCode",{parentName:"p"},"customCloudProvider"),"."),(0,n.kt)("p",null,"For example, in order to use the oVirt cloud provider with Kubernetes, here's the following cloud provider information:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[connection]\nuri = https://localhost:8443/ovirt-engine/api\nusername = admin@internal\npassword = admin\n")),(0,n.kt)("p",null,"To add this cloud config file to RKE, the ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud_provider")," would be need to be set."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"cloud_provider:\n    name: ovirt\n    # Note the pipe as this is what indicates a multiline string\n    customCloudProvider: |-\n      [connection]\n      uri = https://localhost:8443/ovirt-engine/api\n      username = admin@internal\n      password = admin\n")))}p.isMDXComponent=!0}}]);