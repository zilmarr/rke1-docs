"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[2028],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(t),k=l,g=u["".concat(s,".").concat(k)]||u[k]||d[k]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=k;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=t(3117),l=(t(7294),t(3905));const o={title:"Network Plug-ins"},i=void 0,r={unversionedId:"config-options/add-ons/network-plugins/network-plugins",id:"config-options/add-ons/network-plugins/network-plugins",title:"Network Plug-ins",description:"RKE provides the following network plug-ins that are deployed as add-ons:",source:"@site/docs/config-options/add-ons/network-plugins/network-plugins.md",sourceDirName:"config-options/add-ons/network-plugins",slug:"/config-options/add-ons/network-plugins/",permalink:"/config-options/add-ons/network-plugins/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/add-ons/network-plugins/network-plugins.md",tags:[],version:"current",lastUpdatedAt:1679596906,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"Network Plug-ins"},sidebar:"mySidebar",previous:{title:"Add-Ons",permalink:"/config-options/add-ons/"},next:{title:"Custom Network Plug-in Example",permalink:"/config-options/add-ons/network-plugins/custom-network-plugin-example/"}},s={},p=[{value:"Changing the Default Network Plug-in",id:"changing-the-default-network-plug-in",level:2},{value:"Disabling Deployment of a Network Plug-in",id:"disabling-deployment-of-a-network-plug-in",level:2},{value:"Network Plug-in Options",id:"network-plug-in-options",level:2},{value:"Canal",id:"canal",level:2},{value:"Canal Network Plug-in Options",id:"canal-network-plug-in-options",level:3},{value:"Canal Interface",id:"canal-interface",level:3},{value:"Canal Network Plug-in Tolerations",id:"canal-network-plug-in-tolerations",level:3},{value:"Flannel",id:"flannel",level:2},{value:"Flannel Network Plug-in Options",id:"flannel-network-plug-in-options",level:3},{value:"Flannel Interface",id:"flannel-interface",level:3},{value:"Calico",id:"calico",level:2},{value:"Calico Network Plug-in Options",id:"calico-network-plug-in-options",level:3},{value:"Calico Cloud Provider",id:"calico-cloud-provider",level:3},{value:"Calico Network Plug-in Tolerations",id:"calico-network-plug-in-tolerations",level:3},{value:"Weave",id:"weave",level:2},{value:"Weave Network Plug-in Options",id:"weave-network-plug-in-options",level:3},{value:"Weave Encryption",id:"weave-encryption",level:3},{value:"Custom Network Plug-ins",id:"custom-network-plug-ins",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"RKE provides the following network plug-ins that are deployed as add-ons:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flannel"),(0,l.kt)("li",{parentName:"ul"},"Calico"),(0,l.kt)("li",{parentName:"ul"},"Canal"),(0,l.kt)("li",{parentName:"ul"},"Weave")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"After you launch the cluster, you cannot change your network provider. Therefore, choose which network provider you want to use carefully, as Kubernetes doesn\u2019t allow switching between network providers. Once a cluster is created with a network provider, changing network providers would require you tear down the entire cluster and all its applications.")),(0,l.kt)("h2",{id:"changing-the-default-network-plug-in"},"Changing the Default Network Plug-in"),(0,l.kt)("p",null,"By default, the network plug-in is ",(0,l.kt)("inlineCode",{parentName:"p"},"canal"),". If you want to use another network plug-in, you need to specify which network plug-in to enable at the cluster level in the ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"## Setting the flannel network plug-in\nnetwork:\n  plugin: flannel\n")),(0,l.kt)("p",null,"The images used for network plug-ins are under the ",(0,l.kt)("a",{parentName:"p",href:"config-options/system-images/"},(0,l.kt)("inlineCode",{parentName:"a"},"system_images")," directive"),". For each Kubernetes version, there are default images associated with each network plug-in, but these can be overridden by changing the image tag in ",(0,l.kt)("inlineCode",{parentName:"p"},"system_images"),"."),(0,l.kt)("h2",{id:"disabling-deployment-of-a-network-plug-in"},"Disabling Deployment of a Network Plug-in"),(0,l.kt)("p",null,"You can disable deploying a network plug-in by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"none")," to the network ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin")," directive in the cluster configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  plugin: none\n")),(0,l.kt)("h2",{id:"network-plug-in-options"},"Network Plug-in Options"),(0,l.kt)("p",null,"Besides the different images that could be used to deploy network plug-ins, certain network plug-ins support additional options that can be used to customize the network plug-in."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#canal"},"Canal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#flannel"},"Flannel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#calico"},"Calico")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#weave"},"Weave"))),(0,l.kt)("h2",{id:"canal"},"Canal"),(0,l.kt)("h3",{id:"canal-network-plug-in-options"},"Canal Network Plug-in Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  plugin: canal\n  options:\n    canal_iface: eth1\n    canal_flannel_backend_type: vxlan\n    canal_autoscaler_priority_class_name: system-cluster-critical # Available as of RKE v1.2.6+\n    canal_priority_class_name: system-cluster-critical # Available as of RKE v1.2.6+\n")),(0,l.kt)("h3",{id:"canal-interface"},"Canal Interface"),(0,l.kt)("p",null,"By setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"canal_iface"),", you can configure the interface to use for inter-host communication."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"canal_flannel_backend_type")," option allows you to specify the type of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md"},"flannel backend")," to use. By default the ",(0,l.kt)("inlineCode",{parentName:"p"},"vxlan")," backend is used."),(0,l.kt)("h3",{id:"canal-network-plug-in-tolerations"},"Canal Network Plug-in Tolerations"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.4")),(0,l.kt)("p",null,"The configured tolerations apply to the ",(0,l.kt)("inlineCode",{parentName:"p"},"calico-kube-controllers")," Deployment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'network:\n  plugin: canal\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n')),(0,l.kt)("p",null,"To check for applied tolerations on the ",(0,l.kt)("inlineCode",{parentName:"p"},"calico-kube-controllers")," Deployment, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl -n kube-system get deploy calico-kube-controllers -o jsonpath='{.spec.template.spec.tolerations}'\n")),(0,l.kt)("h2",{id:"flannel"},"Flannel"),(0,l.kt)("h3",{id:"flannel-network-plug-in-options"},"Flannel Network Plug-in Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  plugin: flannel\n  options:\n    flannel_iface: eth1\n    flannel_backend_type: vxlan\n    flannel_autoscaler_priority_class_name: system-cluster-critical # Available as of RKE v1.2.6+\n    flannel_priority_class_name: system-cluster-critical # Available as of RKE v1.2.6+\n")),(0,l.kt)("h3",{id:"flannel-interface"},"Flannel Interface"),(0,l.kt)("p",null,"By setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"flannel_iface"),", you can configure the interface to use for inter-host communication.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"flannel_backend_type")," option allows you to specify the type of ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/coreos/flannel/blob/master/Documentation/backends.md"},"flannel backend")," to use. By default the ",(0,l.kt)("inlineCode",{parentName:"p"},"vxlan")," backend is used."),(0,l.kt)("h2",{id:"calico"},"Calico"),(0,l.kt)("h3",{id:"calico-network-plug-in-options"},"Calico Network Plug-in Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"network:\n  plugin: calico\n  options:\n    calico_cloud_provider: aws\n    calico_autoscaler_priority_class_name: system-cluster-critical # Available as of RKE v1.2.6+\n    calico_priority_class_name: system-cluster-critical # Available as of RKE v1.2.6+\n")),(0,l.kt)("h3",{id:"calico-cloud-provider"},"Calico Cloud Provider"),(0,l.kt)("p",null,"Calico currently only supports 2 cloud providers, AWS or GCE, which can be set using ",(0,l.kt)("inlineCode",{parentName:"p"},"calico_cloud_provider"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Valid Options")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"gce"))),(0,l.kt)("h3",{id:"calico-network-plug-in-tolerations"},"Calico Network Plug-in Tolerations"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Available as of v1.2.4")),(0,l.kt)("p",null,"The configured tolerations apply to the ",(0,l.kt)("inlineCode",{parentName:"p"},"calico-kube-controllers")," Deployment."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'network:\n  plugin: calico\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n')),(0,l.kt)("p",null,"To check for applied tolerations on the ",(0,l.kt)("inlineCode",{parentName:"p"},"calico-kube-controllers")," Deployment, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl -n kube-system get deploy calico-kube-controllers -o jsonpath='{.spec.template.spec.tolerations}'\n")),(0,l.kt)("h2",{id:"weave"},"Weave"),(0,l.kt)("h3",{id:"weave-network-plug-in-options"},"Weave Network Plug-in Options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'network:\n  plugin: weave\n  options:\n    weave_autoscaler_priority_class_name: system-cluster-critical # Available as of RKE v1.2.6+\n    weave_priority_class_name: system-cluster-critical # Available as of RKE v1.2.6+\n  weave_network_provider:\n    password: "Q]SZOQ5wp@n$oijz"\n')),(0,l.kt)("h3",{id:"weave-encryption"},"Weave Encryption"),(0,l.kt)("p",null,"Weave encryption can be enabled by passing a string password to the network provider config."),(0,l.kt)("h2",{id:"custom-network-plug-ins"},"Custom Network Plug-ins"),(0,l.kt)("p",null,"It is possible to add a custom network plug-in by using the ",(0,l.kt)("a",{parentName:"p",href:"config-options/add-ons/user-defined-add-ons/"},"user-defined add-on functionality")," of RKE. In the ",(0,l.kt)("inlineCode",{parentName:"p"},"addons")," field, you can add the add-on manifest of a cluster that has the network plugin-that you want, as shown in ",(0,l.kt)("a",{parentName:"p",href:"config-options/add-ons/network-plugins/custom-network-plugin-example"},"this example.")))}d.isMDXComponent=!0}}]);