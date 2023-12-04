"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[4153],{371:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=o(5893),r=o(1151);const s={title:"Troubleshooting"},c=void 0,i={id:"etcd-snapshots/troubleshooting/troubleshooting",title:"Troubleshooting",description:"As of v0.1.9, the rke-bundle-cert container is removed on both success and failure of a restore. To debug any issues, you will need to look at the logs generated from rke.",source:"@site/docs/etcd-snapshots/troubleshooting/troubleshooting.md",sourceDirName:"etcd-snapshots/troubleshooting",slug:"/etcd-snapshots/troubleshooting/",permalink:"/etcd-snapshots/troubleshooting/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/troubleshooting/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1701704516,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"Troubleshooting"},sidebar:"mySidebar",previous:{title:"Example Scenarios",permalink:"/etcd-snapshots/example-scenarios/"},next:{title:"Certificate Management",permalink:"/cert-mgmt/"}},a={},d=[];function l(e){const t={code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["As of ",(0,n.jsx)(t.strong,{children:"v0.1.9"}),", the ",(0,n.jsx)(t.strong,{children:"rke-bundle-cert"})," container is removed on both success and failure of a restore. To debug any issues, you will need to look at the ",(0,n.jsx)(t.strong,{children:"logs"})," generated from rke."]}),"\n",(0,n.jsxs)(t.p,{children:["As of ",(0,n.jsx)(t.strong,{children:"v0.1.8"})," and below, the ",(0,n.jsx)(t.strong,{children:"rke-bundle-cert"})," container is left over from a failed etcd restore. If you are having an issue with restoring an ",(0,n.jsx)(t.strong,{children:"etcd snapshot"})," then you can do the following on each etcd nodes before attempting to do another restore:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"docker container rm --force rke-bundle-cert\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The rke-bundle-cert container is usually removed when a backup or restore of ",(0,n.jsx)(t.strong,{children:"etcd"})," succeeds. Whenever something goes wrong, the ",(0,n.jsx)(t.strong,{children:"rke-bundle-cert"})," container will be left over. You can look\nat the logs or inspect the container to see what the issue is."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"docker container logs --follow rke-bundle-cert\ndocker container inspect rke-bundle-cert\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The important thing to note is the mounts of the container and location of the ",(0,n.jsx)(t.code,{children:"pki.bundle.tar.gz"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>c});var n=o(7294);const r={},s=n.createContext(r);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);