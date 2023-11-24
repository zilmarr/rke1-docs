"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8788],{2301:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=r(5893),s=r(1151);const t={title:"Troubleshooting vSphere Clusters"},i=void 0,l={id:"config-options/cloud-providers/vsphere/troubleshooting/troubleshooting",title:"Troubleshooting vSphere Clusters",description:"If you are experiencing issues while provisioning a cluster with enabled vSphere Cloud Provider or while creating vSphere volumes for your workloads, you should inspect the logs of the following K8s services:",source:"@site/docs/config-options/cloud-providers/vsphere/troubleshooting/troubleshooting.md",sourceDirName:"config-options/cloud-providers/vsphere/troubleshooting",slug:"/config-options/cloud-providers/vsphere/troubleshooting/",permalink:"/config-options/cloud-providers/vsphere/troubleshooting/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/cloud-providers/vsphere/troubleshooting/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1700868981,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{title:"Troubleshooting vSphere Clusters"},sidebar:"mySidebar",previous:{title:"vSphere Configuration Reference",permalink:"/config-options/cloud-providers/vsphere/config-reference/"},next:{title:"Custom Cloud Provider",permalink:"/config-options/cloud-providers/custom/"}},c={},d=[];function h(e){const o={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"If you are experiencing issues while provisioning a cluster with enabled vSphere Cloud Provider or while creating vSphere volumes for your workloads, you should inspect the logs of the following K8s services:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"controller-manager (Manages volumes in vCenter)"}),"\n",(0,n.jsx)(o.li,{children:"kubelet: (Mounts vSphere volumes to pods)"}),"\n"]}),"\n",(0,n.jsxs)(o.p,{children:["If your cluster is not configured with external ",(0,n.jsx)(o.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/logging",children:"Cluster Logging"}),", you will need to SSH into nodes to get the logs of the ",(0,n.jsx)(o.code,{children:"kube-controller-manager"})," (running on one of the control plane nodes) and the ",(0,n.jsx)(o.code,{children:"kubelet"})," (pertaining to the node where the stateful pod has been scheduled)."]}),"\n",(0,n.jsx)(o.p,{children:"The easiest way to create a SSH session with a node is the Rancher CLI tool."}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.a,{href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/cli-with-rancher",children:"Configure the Rancher CLI"})," for your cluster."]}),"\n",(0,n.jsx)(o.li,{children:"Run the following command to get a shell to the corresponding nodes:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"$ rancher ssh <nodeName>\n\n"})}),"\n",(0,n.jsxs)(o.ol,{start:"3",children:["\n",(0,n.jsx)(o.li,{children:"Inspect the logs of the controller-manager and kubelet containers looking for errors related to the vSphere cloud provider:"}),"\n"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-shell",children:"    $ docker logs --since 15m kube-controller-manager\n    $ docker logs --since 15m kubelet\n"})})]})}function a(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,o,r)=>{r.d(o,{Z:()=>l,a:()=>i});var n=r(7294);const s={},t=n.createContext(s);function i(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);