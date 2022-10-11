"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[5038],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),h=r,g=c["".concat(i,".").concat(h)]||c[h]||p[h]||a;return t?o.createElement(g,d(d({ref:n},u),{},{components:t})):o.createElement(g,d({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,d=new Array(a);d[0]=c;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var s=2;s<a;s++)d[s]=t[s];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2713:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),d=["components"],l={title:"How Upgrades Work",weight:1},i=void 0,s={unversionedId:"upgrades/how-upgrades-work/how-upgrades-work",id:"upgrades/how-upgrades-work/how-upgrades-work",title:"How Upgrades Work",description:"In this section, you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster. The below sections describe how each type of node is upgraded by default when a cluster is upgraded using rke up.",source:"@site/docs/upgrades/how-upgrades-work/how-upgrades-work.md",sourceDirName:"upgrades/how-upgrades-work",slug:"/upgrades/how-upgrades-work/",permalink:"/rke1-docs/upgrades/how-upgrades-work/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/upgrades/how-upgrades-work/how-upgrades-work.md",tags:[],version:"current",lastUpdatedAt:1665507505,formattedLastUpdatedAt:"10/11/2022",frontMatter:{title:"How Upgrades Work",weight:1},sidebar:"mySidebar",previous:{title:"Upgrades",permalink:"/rke1-docs/upgrades/"},next:{title:"Maintaining Availability for Applications During Upgrades",permalink:"/rke1-docs/upgrades/maintaining-availability/"}},u={},p=[{value:"Upgrades of etcd Nodes",id:"upgrades-of-etcd-nodes",level:3},{value:"Upgrades of Controlplane Nodes",id:"upgrades-of-controlplane-nodes",level:3},{value:"Upgrades of Worker Nodes",id:"upgrades-of-worker-nodes",level:3},{value:"Upgrades of Addons",id:"upgrades-of-addons",level:3},{value:"Upgrades of Controlplane and etcd Nodes",id:"upgrades-of-controlplane-and-etcd-nodes",level:3},{value:"Upgrades of Worker Nodes",id:"upgrades-of-worker-nodes-1",level:3}],c={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster. The below sections describe how each type of node is upgraded by default when a cluster is upgraded using ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up"),"."),(0,a.kt)("p",null,'{{% tabs %}}\n{{% tab "RKE v1.1.0+" %}}'),(0,a.kt)("p",null,"The following features are new in RKE v1.1.0:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ability to upgrade or edit a cluster without downtime for your applications."),(0,a.kt)("li",{parentName:"ul"},"The ability to manually upgrade nodes of a certain role without upgrading others."),(0,a.kt)("li",{parentName:"ul"},"The ability to restore a Kubernetes cluster to an older Kubernetes version by restoring it to a snapshot that includes the older Kubernetes version. This capability allows you to safely upgrade one type of node at a time, because if an upgrade cannot be completed by all nodes in the cluster, you can downgrade the Kubernetes version of the nodes that were already upgraded.")),(0,a.kt)("p",null,"When a cluster is upgraded with ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up"),", using the default options, the following process is used:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The etcd plane gets get updated, one node at a time."),(0,a.kt)("li",{parentName:"ol"},"Controlplane nodes get updated, one node at a time. This includes the controlplane components and worker plane components of the controlplane nodes."),(0,a.kt)("li",{parentName:"ol"},"Worker plane components of etcd nodes get updated, one node at a time."),(0,a.kt)("li",{parentName:"ol"},"Worker nodes get updated in batches of a configurable size. The default configuration for the maximum number of unavailable nodes is ten percent, rounded down to the nearest node, with a minimum batch size of one node."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"config-options/add-ons/"},"Addons")," get upgraded one by one.")),(0,a.kt)("p",null,"The following sections break down in more detail what happens when etcd nodes, controlplane nodes, worker nodes, and addons are upgraded. This information is intended to be used to help you understand the update strategy for the cluster, and may be useful when troubleshooting problems with upgrading the cluster."),(0,a.kt)("h3",{id:"upgrades-of-etcd-nodes"},"Upgrades of etcd Nodes"),(0,a.kt)("p",null,"A cluster upgrade begins by upgrading the etcd nodes one at a time."),(0,a.kt)("p",null,"If an etcd node fails at any time, the upgrade will fail and no more nodes will be upgraded. The cluster will be stuck in an updating state and not move forward to upgrading controlplane or worker nodes."),(0,a.kt)("h3",{id:"upgrades-of-controlplane-nodes"},"Upgrades of Controlplane Nodes"),(0,a.kt)("p",null,"Controlplane nodes are upgraded one at a time by default. The maximum number of unavailable controlplane nodes can also be configured, so that they can be upgraded in batches."),(0,a.kt)("p",null,"As long as the maximum unavailable number or percentage of controlplane nodes has not been reached, Rancher will continue to upgrade other controlplane nodes, then the worker nodes."),(0,a.kt)("p",null,"If any controlplane nodes were unable to be upgraded, the upgrade will not proceed to the worker nodes."),(0,a.kt)("h3",{id:"upgrades-of-worker-nodes"},"Upgrades of Worker Nodes"),(0,a.kt)("p",null,"By default, worker nodes are upgraded in batches. The size of the batch is determined by the maximum number of unavailable worker nodes, configured as the ",(0,a.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," directive in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,a.kt)("p",null,"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," nodes is defined as 10 percent of all worker nodes. This number can be configured as a percentage or as an integer. When defined as a percentage, the batch size is rounded down to the nearest node, with a minimum of one node."),(0,a.kt)("p",null,"For example, if you have 11 worker nodes and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," is 25%, two nodes will be upgraded at once because 25% of 11 is 2.75. If you have two worker nodes and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," is 1%, the worker nodes will be upgraded one at a time because the minimum batch size is one."),(0,a.kt)("p",null,"When each node in a batch returns to a Ready state, the next batch of nodes begins to upgrade. If ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-proxy")," have started, the node is Ready. As long as the ",(0,a.kt)("inlineCode",{parentName:"p"},"max_unavailable_worker")," number of nodes have not failed, Rancher will continue to upgrade other worker nodes."),(0,a.kt)("p",null,"RKE scans the cluster before starting the upgrade to find the powered down or unreachable hosts. The upgrade will stop if that number matches or exceeds the maximum number of unavailable nodes."),(0,a.kt)("p",null,"RKE will cordon each node before upgrading it, and uncordon the node afterward. RKE can also be configured to ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"drain")," nodes before upgrading them. "),(0,a.kt)("p",null,"RKE will handle all worker node upgrades before upgrading any add-ons. As long as the maximum number of unavailable worker nodes is not reached, RKE will attempt to upgrade the ",(0,a.kt)("a",{parentName:"p",href:"#upgrades-of-addons"},"addons.")," For example, if a cluster has two worker nodes and one worker node fails, but the maximum unavailable worker nodes is greater than one, the addons will still be upgraded."),(0,a.kt)("h3",{id:"upgrades-of-addons"},"Upgrades of Addons"),(0,a.kt)("p",null,"The availability of your applications partly depends on the availability of ",(0,a.kt)("a",{parentName:"p",href:"config-options/add-ons/"},"RKE addons.")," Addons are used to deploy several cluster components, including network plug-ins, the Ingress controller, DNS provider, and metrics server."),(0,a.kt)("p",null,"Because RKE addons are necessary for allowing traffic into the cluster, they will need to be updated in batches to maintain availability. You will need to configure the maximum number of unavailable replicas for each addon in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml")," to ensure that your cluster will retain enough available replicas during an upgrade."),(0,a.kt)("p",null,"For more information on configuring the number of replicas for each addon, refer to ",(0,a.kt)("a",{parentName:"p",href:"upgrades/configuring-strategy"},"this section.")),(0,a.kt)("p",null,"For an example showing how to configure the addons, refer to the ",(0,a.kt)("a",{parentName:"p",href:"upgrades/configuring-strategy/#example-cluster-yml"},"example cluster.yml.")),(0,a.kt)("p",null,'{{% /tab %}}\n{{% tab "RKE before v1.1.0" %}}'),(0,a.kt)("p",null,"When a cluster is upgraded with ",(0,a.kt)("inlineCode",{parentName:"p"},"rke up"),", using the default options, the following process is used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"etcd nodes get updated first, one at a time."),(0,a.kt)("li",{parentName:"ul"},"Controlplane nodes get updated second, in batches of 50 or the total number of worker nodes, whichever is lower."),(0,a.kt)("li",{parentName:"ul"},"Worker nodes and addons get updated third, in batches of 50 or the total number of worker nodes, whichever is lower."),(0,a.kt)("li",{parentName:"ul"},"Addons get upgraded one by one.")),(0,a.kt)("h3",{id:"upgrades-of-controlplane-and-etcd-nodes"},"Upgrades of Controlplane and etcd Nodes"),(0,a.kt)("p",null,"Controlplane and etcd nodes would be upgraded in batches of 50 nodes or the total number of controlplane nodes, whichever is lower."),(0,a.kt)("p",null,"If a node fails at any time, the upgrade will stop upgrading any other nodes and fail."),(0,a.kt)("h3",{id:"upgrades-of-worker-nodes-1"},"Upgrades of Worker Nodes"),(0,a.kt)("p",null,"Worker nodes are upgraded simultaneously, in batches of either 50 or the total number of worker nodes, whichever is lower. If a worker node fails at any time, the upgrade stops."),(0,a.kt)("p",null,"When a worker node is upgraded, it restarts several Docker processes, including the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubelet")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-proxy"),". When ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-proxy")," comes up, it flushes ",(0,a.kt)("inlineCode",{parentName:"p"},"iptables"),". When this happens, pods on this node can\u2019t be accessed, resulting in downtime for the applications."),(0,a.kt)("p",null,"{{% /tab %}}\n{{% /tabs %}}"))}h.isMDXComponent=!0}}]);