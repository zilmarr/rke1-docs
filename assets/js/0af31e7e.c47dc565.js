"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(3117),o=(t(7294),t(3905));const r={title:"DNS providers"},l=void 0,s={unversionedId:"config-options/add-ons/dns/dns",id:"config-options/add-ons/dns/dns",title:"DNS providers",description:"Available DNS Providers",source:"@site/docs/config-options/add-ons/dns/dns.md",sourceDirName:"config-options/add-ons/dns",slug:"/config-options/add-ons/dns/",permalink:"/config-options/add-ons/dns/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/add-ons/dns/dns.md",tags:[],version:"current",lastUpdatedAt:1679596906,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{title:"DNS providers"},sidebar:"mySidebar",previous:{title:"Custom Network Plug-in Example",permalink:"/config-options/add-ons/network-plugins/custom-network-plugin-example/"},next:{title:"K8s Ingress Controllers",permalink:"/config-options/add-ons/ingress-controllers/"}},i={},d=[{value:"Available DNS Providers",id:"available-dns-providers",level:2},{value:"Disabling Deployment of a DNS Provider",id:"disabling-deployment-of-a-dns-provider",level:2},{value:"CoreDNS",id:"coredns",level:2},{value:"Scheduling CoreDNS",id:"scheduling-coredns",level:3},{value:"CoreDNS Upstream nameservers",id:"coredns-upstream-nameservers",level:3},{value:"CoreDNS Priority Class Name",id:"coredns-priority-class-name",level:3},{value:"CoreDNS Tolerations",id:"coredns-tolerations",level:3},{value:"kube-dns",id:"kube-dns",level:2},{value:"Scheduling kube-dns",id:"scheduling-kube-dns",level:3},{value:"kube-dns Upstream nameservers",id:"kube-dns-upstream-nameservers",level:3},{value:"kube-dns Priority Class Name",id:"kube-dns-priority-class-name",level:3},{value:"kube-dns Tolerations",id:"kube-dns-tolerations",level:3},{value:"NodeLocal DNS",id:"nodelocal-dns",level:2},{value:"Configuring NodeLocal DNS",id:"configuring-nodelocal-dns",level:3},{value:"NodeLocal Priority Class Name",id:"nodelocal-priority-class-name",level:3},{value:"Removing NodeLocal DNS",id:"removing-nodelocal-dns",level:3}],p={toc:d},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"available-dns-providers"},"Available DNS Providers"),(0,o.kt)("p",null,"RKE provides the following DNS providers that can be deployed as add-ons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://coredns.io"},"CoreDNS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/dns"},"kube-dns"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"RKE version"),(0,o.kt)("th",{parentName:"tr",align:null},"Kubernetes version"),(0,o.kt)("th",{parentName:"tr",align:null},"Default DNS provider"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v0.2.5 and higher"),(0,o.kt)("td",{parentName:"tr",align:null},"v1.14.0 and higher"),(0,o.kt)("td",{parentName:"tr",align:null},"CoreDNS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v0.2.5 and higher"),(0,o.kt)("td",{parentName:"tr",align:null},"v1.13.x and lower"),(0,o.kt)("td",{parentName:"tr",align:null},"kube-dns")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v0.2.4 and lower"),(0,o.kt)("td",{parentName:"tr",align:null},"any"),(0,o.kt)("td",{parentName:"tr",align:null},"kube-dns")))),(0,o.kt)("p",null,"CoreDNS was made the default in RKE v0.2.5 when using Kubernetes 1.14 and higher. If you are using an RKE version lower than v0.2.5, kube-dns will be deployed by default."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you switch from one DNS provider to another, the existing DNS provider will be removed before the new one is deployed.")),(0,o.kt)("h2",{id:"disabling-deployment-of-a-dns-provider"},"Disabling Deployment of a DNS Provider"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,o.kt)("p",null,"You can disable the default DNS provider by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"none")," to  the dns ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," directive in the cluster configuration. Be aware that this will prevent your pods from doing name resolution in your cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dns:\n  provider: none\n")),(0,o.kt)("h2",{id:"coredns"},"CoreDNS"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v0.2.5")),(0,o.kt)("p",null,"CoreDNS can only be used on Kubernetes v1.12.0 and higher."),(0,o.kt)("p",null,"RKE will deploy CoreDNS as a Deployment with the default replica count of 1. The pod consists of 1 container: ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns"),". RKE will also deploy coredns-autoscaler as a Deployment, which will scale the coredns Deployment by using the number of cores and nodes. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/cluster-proportional-autoscaler#linear-mode"},"Linear Mode")," for more information about this logic."),(0,o.kt)("p",null,"The images used for CoreDNS are under the ",(0,o.kt)("a",{parentName:"p",href:"config-options/system-images/"},(0,o.kt)("inlineCode",{parentName:"a"},"system_images")," directive"),". For each Kubernetes version, there are default images associated with CoreDNS, but these can be overridden by changing the image tag in ",(0,o.kt)("inlineCode",{parentName:"p"},"system_images"),"."),(0,o.kt)("h3",{id:"scheduling-coredns"},"Scheduling CoreDNS"),(0,o.kt)("p",null,"If you only want the CoreDNS pod to be deployed on specific nodes, you can set a ",(0,o.kt)("inlineCode",{parentName:"p"},"node_selector")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," section. The label in the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_selector")," would need to match the label on the nodes for the CoreDNS pod to be deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n- address: 1.1.1.1\n  role: [controlplane,worker,etcd]\n  user: root\n  labels:\n    app: dns\n\ndns:\n  provider: coredns\n  node_selector:\n    app: dns\n")),(0,o.kt)("h3",{id:"coredns-upstream-nameservers"},"CoreDNS Upstream nameservers"),(0,o.kt)("p",null,"By default, CoreDNS will use the host configured nameservers (usually residing at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),") to resolve external queries. If you want to configure specific upstream nameservers to be used by CoreDNS, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstreamnameservers")," directive."),(0,o.kt)("p",null,"When you set ",(0,o.kt)("inlineCode",{parentName:"p"},"upstreamnameservers"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," also needs to be set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dns:\n  provider: coredns\n  upstreamnameservers:\n  - 1.1.1.1\n  - 8.8.4.4\n")),(0,o.kt)("h3",{id:"coredns-priority-class-name"},"CoreDNS Priority Class Name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of RKE v1.2.6+")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority"},"pod priority")," is set by configuring a priority class name under ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dns:\n    options:\n      coredns_autoscaler_priority_class_name: system-cluster-critical\n      coredns_priority_class_name: system-cluster-critical\n    provider: coredns\n")),(0,o.kt)("h3",{id:"coredns-tolerations"},"CoreDNS Tolerations"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.2.4")),(0,o.kt)("p",null,"The configured tolerations apply to the ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns-autoscaler")," Deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'dns:\n  provider: coredns\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n')),(0,o.kt)("p",null,"To check for applied tolerations on the ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns-autoscaler")," Deployment, use the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n kube-system get deploy coredns -o jsonpath='{.spec.template.spec.tolerations}'\nkubectl -n kube-system get deploy coredns-autoscaler -o jsonpath='{.spec.template.spec.tolerations}'\n")),(0,o.kt)("h2",{id:"kube-dns"},"kube-dns"),(0,o.kt)("p",null,"RKE will deploy kube-dns as a Deployment with the default replica count of 1. The pod consists of 3 containers: ",(0,o.kt)("inlineCode",{parentName:"p"},"kubedns"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dnsmasq")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sidecar"),". RKE will also deploy kube-dns-autoscaler as a Deployment, which will scale the kube-dns Deployment by using the number of cores and nodes. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-incubator/cluster-proportional-autoscaler#linear-mode"},"Linear Mode")," for more information about this logic."),(0,o.kt)("p",null,"The images used for kube-dns are under the ",(0,o.kt)("a",{parentName:"p",href:"config-options/system-images/"},(0,o.kt)("inlineCode",{parentName:"a"},"system_images")," directive"),". For each Kubernetes version, there are default images associated with kube-dns, but these can be overridden by changing the image tag in ",(0,o.kt)("inlineCode",{parentName:"p"},"system_images"),"."),(0,o.kt)("h3",{id:"scheduling-kube-dns"},"Scheduling kube-dns"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,o.kt)("p",null,"If you only want the kube-dns pod to be deployed on specific nodes, you can set a ",(0,o.kt)("inlineCode",{parentName:"p"},"node_selector")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dns")," section. The label in the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_selector")," would need to match the label on the nodes for the kube-dns pod to be deployed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n- address: 1.1.1.1\n  role: [controlplane,worker,etcd]\n  user: root\n  labels:\n    app: dns\n\ndns:\n  provider: kube-dns\n  node_selector:\n    app: dns\n")),(0,o.kt)("h3",{id:"kube-dns-upstream-nameservers"},"kube-dns Upstream nameservers"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,o.kt)("p",null,"By default, kube-dns will use the host configured nameservers (usually residing at ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),") to resolve external queries. If you want to configure specific upstream nameservers to be used by kube-dns, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"upstreamnameservers")," directive."),(0,o.kt)("p",null,"When you set ",(0,o.kt)("inlineCode",{parentName:"p"},"upstreamnameservers"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," also needs to be set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dns:\n  provider: kube-dns\n  upstreamnameservers:\n  - 1.1.1.1\n  - 8.8.4.4\n")),(0,o.kt)("h3",{id:"kube-dns-priority-class-name"},"kube-dns Priority Class Name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of RKE v1.2.6+")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority"},"pod priority")," is set by configuring a priority class name under ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dns:\n    options:\n      kube_dns_autoscaler_priority_class_name: system-cluster-critical\n      kube_dns_priority_class_name: system-cluster-critical\n    provider: kube-dns\n")),(0,o.kt)("h3",{id:"kube-dns-tolerations"},"kube-dns Tolerations"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.2.4")),(0,o.kt)("p",null,"The configured tolerations apply to the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-dns")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-dns-autoscaler")," Deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'dns:\n  provider: kube-dns\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n\n')),(0,o.kt)("p",null,"To check for applied tolerations on the ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns-autoscaler")," Deployment, use the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get deploy kube-dns -n kube-system -o jsonpath='{.spec.template.spec.tolerations}'\nkubectl get deploy kube-dns-autoscaler -n kube-system -o jsonpath='{.spec.template.spec.tolerations}'\n")),(0,o.kt)("h2",{id:"nodelocal-dns"},"NodeLocal DNS"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,o.kt)("admonition",{title:"The option to enable NodeLocal DNS is available for:",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Kubernetes v1.15.11 and up"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes v1.16.8 and up"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes v1.17.4 and up"))),(0,o.kt)("p",null,"NodeLocal DNS is an additional component that can be deployed on each node to improve DNS performance. It is not a replacement for the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," parameter, you will still need to have one of the available DNS providers configured. See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/"},"Using NodeLocal DNSCache in Kubernetes clusters")," for more information on how NodeLocal DNS works."),(0,o.kt)("p",null,"Enable NodeLocal DNS by configuring an IP address."),(0,o.kt)("h3",{id:"configuring-nodelocal-dns"},"Configuring NodeLocal DNS"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ip_address")," parameter is used to configure what link-local IP address will be configured one each host to listen on, make sure this IP address is not already configured on the host."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'dns:\n  provider: coredns\n  nodelocal:\n    ip_address: "169.254.20.10"\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When enabling NodeLocal DNS on an existing cluster, pods that are currently running will not be modified, the updated ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," configuration will take effect only for pods started after enabling NodeLocal DNS.")),(0,o.kt)("h3",{id:"nodelocal-priority-class-name"},"NodeLocal Priority Class Name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of RKE v1.2.6+")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority"},"pod priority")," is set by configuring a priority class name under ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dns:\n    options:\n      nodelocal_autoscaler_priority_class_name: system-cluster-critical\n      nodelocal_priority_class_name: system-cluster-critical\n    provider: coredns # a DNS provider must be configured\n")),(0,o.kt)("h3",{id:"removing-nodelocal-dns"},"Removing NodeLocal DNS"),(0,o.kt)("p",null,"By removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"ip_address")," value, NodeLocal DNS will be removed from the cluster."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When removing NodeLocal DNS, a disruption to DNS can be expected. The updated ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," configuration will take effect only for pods that are started after removing NodeLocal DNS. In general pods using the default ",(0,o.kt)("inlineCode",{parentName:"p"},"dnsPolicy: ClusterFirst")," will need to be re-deployed.")))}c.isMDXComponent=!0}}]);