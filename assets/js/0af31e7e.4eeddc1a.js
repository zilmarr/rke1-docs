"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8883],{1453:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var o=s(5893),r=s(1151);const d={title:"DNS providers"},i=void 0,l={id:"config-options/add-ons/dns/dns",title:"DNS providers",description:"Available DNS Providers",source:"@site/docs/config-options/add-ons/dns/dns.md",sourceDirName:"config-options/add-ons/dns",slug:"/config-options/add-ons/dns/",permalink:"/config-options/add-ons/dns/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/add-ons/dns/dns.md",tags:[],version:"current",lastUpdatedAt:1701704516,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"DNS providers"},sidebar:"mySidebar",previous:{title:"Custom Network Plug-in Example",permalink:"/config-options/add-ons/network-plugins/custom-network-plugin-example/"},next:{title:"K8s Ingress Controllers",permalink:"/config-options/add-ons/ingress-controllers/"}},t={},a=[{value:"Available DNS Providers",id:"available-dns-providers",level:2},{value:"Disabling Deployment of a DNS Provider",id:"disabling-deployment-of-a-dns-provider",level:2},{value:"CoreDNS",id:"coredns",level:2},{value:"Scheduling CoreDNS",id:"scheduling-coredns",level:3},{value:"CoreDNS Upstream nameservers",id:"coredns-upstream-nameservers",level:3},{value:"CoreDNS Priority Class Name",id:"coredns-priority-class-name",level:3},{value:"CoreDNS Tolerations",id:"coredns-tolerations",level:3},{value:"kube-dns",id:"kube-dns",level:2},{value:"Scheduling kube-dns",id:"scheduling-kube-dns",level:3},{value:"kube-dns Upstream nameservers",id:"kube-dns-upstream-nameservers",level:3},{value:"kube-dns Priority Class Name",id:"kube-dns-priority-class-name",level:3},{value:"kube-dns Tolerations",id:"kube-dns-tolerations",level:3},{value:"NodeLocal DNS",id:"nodelocal-dns",level:2},{value:"Configuring NodeLocal DNS",id:"configuring-nodelocal-dns",level:3},{value:"NodeLocal Priority Class Name",id:"nodelocal-priority-class-name",level:3},{value:"Removing NodeLocal DNS",id:"removing-nodelocal-dns",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"available-dns-providers",children:"Available DNS Providers"}),"\n",(0,o.jsx)(n.p,{children:"RKE provides the following DNS providers that can be deployed as add-ons:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://coredns.io",children:"CoreDNS"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/kubernetes/dns",children:"kube-dns"})}),"\n"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"RKE version"}),(0,o.jsx)(n.th,{children:"Kubernetes version"}),(0,o.jsx)(n.th,{children:"Default DNS provider"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"v0.2.5 and higher"}),(0,o.jsx)(n.td,{children:"v1.14.0 and higher"}),(0,o.jsx)(n.td,{children:"CoreDNS"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"v0.2.5 and higher"}),(0,o.jsx)(n.td,{children:"v1.13.x and lower"}),(0,o.jsx)(n.td,{children:"kube-dns"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"v0.2.4 and lower"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"kube-dns"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"CoreDNS was made the default in RKE v0.2.5 when using Kubernetes 1.14 and higher. If you are using an RKE version lower than v0.2.5, kube-dns will be deployed by default."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If you switch from one DNS provider to another, the existing DNS provider will be removed before the new one is deployed."})}),"\n",(0,o.jsx)(n.h2,{id:"disabling-deployment-of-a-dns-provider",children:"Disabling Deployment of a DNS Provider"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of v0.2.0"})}),"\n",(0,o.jsxs)(n.p,{children:["You can disable the default DNS provider by specifying ",(0,o.jsx)(n.code,{children:"none"})," to  the dns ",(0,o.jsx)(n.code,{children:"provider"})," directive in the cluster configuration. Be aware that this will prevent your pods from doing name resolution in your cluster."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"dns:\n  provider: none\n"})}),"\n",(0,o.jsx)(n.h2,{id:"coredns",children:"CoreDNS"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of v0.2.5"})}),"\n",(0,o.jsx)(n.p,{children:"CoreDNS can only be used on Kubernetes v1.12.0 and higher."}),"\n",(0,o.jsxs)(n.p,{children:["RKE will deploy CoreDNS as a Deployment with the default replica count of 1. The pod consists of 1 container: ",(0,o.jsx)(n.code,{children:"coredns"}),". RKE will also deploy coredns-autoscaler as a Deployment, which will scale the coredns Deployment by using the number of cores and nodes. Please see ",(0,o.jsx)(n.a,{href:"https://github.com/kubernetes-incubator/cluster-proportional-autoscaler#linear-mode",children:"Linear Mode"})," for more information about this logic."]}),"\n",(0,o.jsxs)(n.p,{children:["The images used for CoreDNS are under the ",(0,o.jsxs)(n.a,{href:"/config-options/system-images/",children:[(0,o.jsx)(n.code,{children:"system_images"})," directive"]}),". For each Kubernetes version, there are default images associated with CoreDNS, but these can be overridden by changing the image tag in ",(0,o.jsx)(n.code,{children:"system_images"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"scheduling-coredns",children:"Scheduling CoreDNS"}),"\n",(0,o.jsxs)(n.p,{children:["If you only want the CoreDNS pod to be deployed on specific nodes, you can set a ",(0,o.jsx)(n.code,{children:"node_selector"})," in the ",(0,o.jsx)(n.code,{children:"dns"})," section. The label in the ",(0,o.jsx)(n.code,{children:"node_selector"})," would need to match the label on the nodes for the CoreDNS pod to be deployed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"nodes:\n- address: 1.1.1.1\n  role: [controlplane,worker,etcd]\n  user: root\n  labels:\n    app: dns\n\ndns:\n  provider: coredns\n  node_selector:\n    app: dns\n"})}),"\n",(0,o.jsx)(n.h3,{id:"coredns-upstream-nameservers",children:"CoreDNS Upstream nameservers"}),"\n",(0,o.jsxs)(n.p,{children:["By default, CoreDNS will use the host configured nameservers (usually residing at ",(0,o.jsx)(n.code,{children:"/etc/resolv.conf"}),") to resolve external queries. If you want to configure specific upstream nameservers to be used by CoreDNS, you can use the ",(0,o.jsx)(n.code,{children:"upstreamnameservers"})," directive."]}),"\n",(0,o.jsxs)(n.p,{children:["When you set ",(0,o.jsx)(n.code,{children:"upstreamnameservers"}),", the ",(0,o.jsx)(n.code,{children:"provider"})," also needs to be set."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"dns:\n  provider: coredns\n  upstreamnameservers:\n  - 1.1.1.1\n  - 8.8.4.4\n"})}),"\n",(0,o.jsx)(n.h3,{id:"coredns-priority-class-name",children:"CoreDNS Priority Class Name"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of RKE v1.2.6+"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority",children:"pod priority"})," is set by configuring a priority class name under ",(0,o.jsx)(n.code,{children:"options"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"dns:\n    options:\n      coredns_autoscaler_priority_class_name: system-cluster-critical\n      coredns_priority_class_name: system-cluster-critical\n    provider: coredns\n"})}),"\n",(0,o.jsx)(n.h3,{id:"coredns-tolerations",children:"CoreDNS Tolerations"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of v1.2.4"})}),"\n",(0,o.jsxs)(n.p,{children:["The configured tolerations apply to the ",(0,o.jsx)(n.code,{children:"coredns"})," and the ",(0,o.jsx)(n.code,{children:"coredns-autoscaler"})," Deployment."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'dns:\n  provider: coredns\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To check for applied tolerations on the ",(0,o.jsx)(n.code,{children:"coredns"})," and ",(0,o.jsx)(n.code,{children:"coredns-autoscaler"})," Deployment, use the following commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl -n kube-system get deploy coredns -o jsonpath='{.spec.template.spec.tolerations}'\nkubectl -n kube-system get deploy coredns-autoscaler -o jsonpath='{.spec.template.spec.tolerations}'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"kube-dns",children:"kube-dns"}),"\n",(0,o.jsxs)(n.p,{children:["RKE will deploy kube-dns as a Deployment with the default replica count of 1. The pod consists of 3 containers: ",(0,o.jsx)(n.code,{children:"kubedns"}),", ",(0,o.jsx)(n.code,{children:"dnsmasq"})," and ",(0,o.jsx)(n.code,{children:"sidecar"}),". RKE will also deploy kube-dns-autoscaler as a Deployment, which will scale the kube-dns Deployment by using the number of cores and nodes. Please see ",(0,o.jsx)(n.a,{href:"https://github.com/kubernetes-incubator/cluster-proportional-autoscaler#linear-mode",children:"Linear Mode"})," for more information about this logic."]}),"\n",(0,o.jsxs)(n.p,{children:["The images used for kube-dns are under the ",(0,o.jsxs)(n.a,{href:"/config-options/system-images/",children:[(0,o.jsx)(n.code,{children:"system_images"})," directive"]}),". For each Kubernetes version, there are default images associated with kube-dns, but these can be overridden by changing the image tag in ",(0,o.jsx)(n.code,{children:"system_images"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"scheduling-kube-dns",children:"Scheduling kube-dns"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of v0.2.0"})}),"\n",(0,o.jsxs)(n.p,{children:["If you only want the kube-dns pod to be deployed on specific nodes, you can set a ",(0,o.jsx)(n.code,{children:"node_selector"})," in the ",(0,o.jsx)(n.code,{children:"dns"})," section. The label in the ",(0,o.jsx)(n.code,{children:"node_selector"})," would need to match the label on the nodes for the kube-dns pod to be deployed."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"nodes:\n- address: 1.1.1.1\n  role: [controlplane,worker,etcd]\n  user: root\n  labels:\n    app: dns\n\ndns:\n  provider: kube-dns\n  node_selector:\n    app: dns\n"})}),"\n",(0,o.jsx)(n.h3,{id:"kube-dns-upstream-nameservers",children:"kube-dns Upstream nameservers"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of v0.2.0"})}),"\n",(0,o.jsxs)(n.p,{children:["By default, kube-dns will use the host configured nameservers (usually residing at ",(0,o.jsx)(n.code,{children:"/etc/resolv.conf"}),") to resolve external queries. If you want to configure specific upstream nameservers to be used by kube-dns, you can use the ",(0,o.jsx)(n.code,{children:"upstreamnameservers"})," directive."]}),"\n",(0,o.jsxs)(n.p,{children:["When you set ",(0,o.jsx)(n.code,{children:"upstreamnameservers"}),", the ",(0,o.jsx)(n.code,{children:"provider"})," also needs to be set."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"dns:\n  provider: kube-dns\n  upstreamnameservers:\n  - 1.1.1.1\n  - 8.8.4.4\n"})}),"\n",(0,o.jsx)(n.h3,{id:"kube-dns-priority-class-name",children:"kube-dns Priority Class Name"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of RKE v1.2.6+"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority",children:"pod priority"})," is set by configuring a priority class name under ",(0,o.jsx)(n.code,{children:"options"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"dns:\n    options:\n      kube_dns_autoscaler_priority_class_name: system-cluster-critical\n      kube_dns_priority_class_name: system-cluster-critical\n    provider: kube-dns\n"})}),"\n",(0,o.jsx)(n.h3,{id:"kube-dns-tolerations",children:"kube-dns Tolerations"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of v1.2.4"})}),"\n",(0,o.jsxs)(n.p,{children:["The configured tolerations apply to the ",(0,o.jsx)(n.code,{children:"kube-dns"})," and the ",(0,o.jsx)(n.code,{children:"kube-dns-autoscaler"})," Deployment."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'dns:\n  provider: kube-dns\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To check for applied tolerations on the ",(0,o.jsx)(n.code,{children:"coredns"})," and ",(0,o.jsx)(n.code,{children:"coredns-autoscaler"})," Deployment, use the following commands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"kubectl get deploy kube-dns -n kube-system -o jsonpath='{.spec.template.spec.tolerations}'\nkubectl get deploy kube-dns-autoscaler -n kube-system -o jsonpath='{.spec.template.spec.tolerations}'\n"})}),"\n",(0,o.jsx)(n.h2,{id:"nodelocal-dns",children:"NodeLocal DNS"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of v1.1.0"})}),"\n",(0,o.jsx)(n.admonition,{title:"The option to enable NodeLocal DNS is available for:",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Kubernetes v1.15.11 and up"}),"\n",(0,o.jsx)(n.li,{children:"Kubernetes v1.16.8 and up"}),"\n",(0,o.jsx)(n.li,{children:"Kubernetes v1.17.4 and up"}),"\n"]})}),"\n",(0,o.jsxs)(n.p,{children:["NodeLocal DNS is an additional component that can be deployed on each node to improve DNS performance. It is not a replacement for the ",(0,o.jsx)(n.code,{children:"provider"})," parameter, you will still need to have one of the available DNS providers configured. See ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/administer-cluster/nodelocaldns/",children:"Using NodeLocal DNSCache in Kubernetes clusters"})," for more information on how NodeLocal DNS works."]}),"\n",(0,o.jsx)(n.p,{children:"Enable NodeLocal DNS by configuring an IP address."}),"\n",(0,o.jsx)(n.h3,{id:"configuring-nodelocal-dns",children:"Configuring NodeLocal DNS"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ip_address"})," parameter is used to configure what link-local IP address will be configured one each host to listen on, make sure this IP address is not already configured on the host."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'dns:\n  provider: coredns\n  nodelocal:\n    ip_address: "169.254.20.10"\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["When enabling NodeLocal DNS on an existing cluster, pods that are currently running will not be modified, the updated ",(0,o.jsx)(n.code,{children:"/etc/resolv.conf"})," configuration will take effect only for pods started after enabling NodeLocal DNS."]})}),"\n",(0,o.jsx)(n.h3,{id:"nodelocal-priority-class-name",children:"NodeLocal Priority Class Name"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Available as of RKE v1.2.6+"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/#pod-priority",children:"pod priority"})," is set by configuring a priority class name under ",(0,o.jsx)(n.code,{children:"options"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"dns:\n    options:\n      nodelocal_autoscaler_priority_class_name: system-cluster-critical\n      nodelocal_priority_class_name: system-cluster-critical\n    provider: coredns # a DNS provider must be configured\n"})}),"\n",(0,o.jsx)(n.h3,{id:"removing-nodelocal-dns",children:"Removing NodeLocal DNS"}),"\n",(0,o.jsxs)(n.p,{children:["By removing the ",(0,o.jsx)(n.code,{children:"ip_address"})," value, NodeLocal DNS will be removed from the cluster."]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["When removing NodeLocal DNS, a disruption to DNS can be expected. The updated ",(0,o.jsx)(n.code,{children:"/etc/resolv.conf"})," configuration will take effect only for pods that are started after removing NodeLocal DNS. In general pods using the default ",(0,o.jsx)(n.code,{children:"dnsPolicy: ClusterFirst"})," will need to be re-deployed."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var o=s(7294);const r={},d=o.createContext(r);function i(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);