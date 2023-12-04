"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[7159],{3435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(5893),r=n(1151);const o={title:"Rate Limiting"},a=void 0,s={id:"config-options/rate-limiting/rate-limiting",title:"Rate Limiting",description:"Using the EventRateLimit admission control enforces a limit on the number of events that the API Server will accept in a given time period. In a large multi-tenant cluster, there might be a small percentage of tenants that flood the server with event requests, which could have a significant impact on the performance of the cluster overall. Therefore, it is recommended to limit the rate of events that the API server will accept.",source:"@site/docs/config-options/rate-limiting/rate-limiting.md",sourceDirName:"config-options/rate-limiting",slug:"/config-options/rate-limiting/",permalink:"/config-options/rate-limiting/",draft:!1,unlisted:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/config-options/rate-limiting/rate-limiting.md",tags:[],version:"current",lastUpdatedAt:1701704516,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{title:"Rate Limiting"},sidebar:"mySidebar",previous:{title:"Configuring Pod Security Admission (PSA)",permalink:"/config-options/services/pod-security-admission/"},next:{title:"Cloud Providers",permalink:"/config-options/cloud-providers/"}},c={},l=[{value:"Example Configurations",id:"example-configurations",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Using the ",(0,i.jsx)(t.code,{children:"EventRateLimit"})," admission control enforces a limit on the number of events that the API Server will accept in a given time period. In a large multi-tenant cluster, there might be a small percentage of tenants that flood the server with event requests, which could have a significant impact on the performance of the cluster overall. Therefore, it is recommended to limit the rate of events that the API server will accept."]}),"\n",(0,i.jsxs)(t.p,{children:["You might want to configure event rate limit as part of compliance with the CIS (Center for Internet Security) Kubernetes Benchmark. Event rate limiting corresponds to the CIS Kubernetes Benchmark 1.1.36 - Ensure that the admission control plugin ",(0,i.jsx)(t.code,{children:"EventRateLimit"})," is set (Scored)."]}),"\n",(0,i.jsx)(t.p,{children:"Rate limits can be configured for the server, a namespace, a user, or a combination of a source and an object."}),"\n",(0,i.jsxs)(t.p,{children:["For configuration details, refer to the ",(0,i.jsx)(t.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#eventratelimit",children:"official Kubernetes documentation."})]}),"\n",(0,i.jsx)(t.h3,{id:"example-configurations",children:"Example Configurations"}),"\n",(0,i.jsxs)(t.p,{children:["The following configuration in the ",(0,i.jsx)(t.code,{children:"cluster.yml"})," can be used to enable the event rate limit by default:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"services:\n  kube-api:\n    event_rate_limit:\n      enabled: true\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When the event rate limit is enabled, you should be able to see the default values at ",(0,i.jsx)(t.code,{children:"/etc/kubernetes/admission.yaml"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"...\nplugins:\n- configuration:\n    apiVersion: eventratelimit.admission.k8s.io/v1alpha1\n    kind: Configuration\n    limits:\n    - burst: 20000\n      qps: 5000\n      type: Server\n...\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To customize the event rate limit, the entire Kubernetes resource for the configuration must be provided in the ",(0,i.jsx)(t.code,{children:"configuration"})," directive:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"services:\n  kube-api:\n    event_rate_limit:\n      enabled: true\n      configuration:\n        apiVersion: eventratelimit.admission.k8s.io/v1alpha1\n        kind: Configuration\n        limits:\n        - type: Server\n          qps: 6000\n          burst: 30000\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(7294);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);