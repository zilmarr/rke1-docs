"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[3127],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(3117),a=(t(7294),t(3905));const s={title:"Example Cluster.ymls"},o=void 0,i={unversionedId:"example-yamls/example-yamls",id:"example-yamls/example-yamls",title:"Example Cluster.ymls",description:"There are lots of different configuration options that can be set in the cluster configuration file for RKE. Here are some examples of files:",source:"@site/docs/example-yamls/example-yamls.md",sourceDirName:"example-yamls",slug:"/example-yamls/",permalink:"/example-yamls/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/example-yamls/example-yamls.md",tags:[],version:"current",lastUpdatedAt:1687467719,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"Example Cluster.ymls"},sidebar:"mySidebar",previous:{title:"User-Defined Add-Ons",permalink:"/config-options/add-ons/user-defined-add-ons/"},next:{title:"Troubleshooting",permalink:"/troubleshooting/"}},l={},c=[{value:"Minimal <code>cluster.yml</code> example",id:"minimal-clusteryml-example",level:2},{value:"Full <code>cluster.yml</code> example",id:"full-clusteryml-example",level:2}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are lots of different ",(0,a.kt)("a",{parentName:"p",href:"/config-options/"},"configuration options")," that can be set in the cluster configuration file for RKE. Here are some examples of files:"),(0,a.kt)("admonition",{title:"Note for Rancher 2 users",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you are configuring Cluster Options using a ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rke-cluster-config-file-reference"},"Config File")," when creating ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher Launched Kubernetes"),", the names of services should contain underscores only: ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_api")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_controller"),". This only applies to Rancher v2.0.5 and v2.0.6.")),(0,a.kt)("h2",{id:"minimal-clusteryml-example"},"Minimal ",(0,a.kt)("inlineCode",{parentName:"h2"},"cluster.yml")," example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nodes:\n    - address: 1.2.3.4\n      user: ubuntu\n      role:\n        - controlplane\n        - etcd\n        - worker\n")),(0,a.kt)("h2",{id:"full-clusteryml-example"},"Full ",(0,a.kt)("inlineCode",{parentName:"h2"},"cluster.yml")," example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'nodes:\n    - address: 1.1.1.1\n      user: ubuntu\n      role:\n        - controlplane\n        - etcd\n      port: 2222\n      docker_socket: /var/run/docker.sock\n    - address: 2.2.2.2\n      user: ubuntu\n      role:\n        - worker\n      ssh_key_path: /home/user/.ssh/id_rsa\n      ssh_key: |-\n        -----BEGIN RSA PRIVATE KEY-----\n\n        -----END RSA PRIVATE KEY-----\n      ssh_cert_path: /home/user/.ssh/test-key-cert.pub\n      ssh_cert: |-\n        ssh-rsa-cert-v01@openssh.com AAAAHHNzaC1yc2EtY2VydC12MDFAb3Bl....\n    - address: example.com\n      user: ubuntu\n      role:\n        - worker\n      hostname_override: node3\n      internal_address: 192.168.1.6\n      labels:\n        app: ingress\n      taints:\n        - key: test-key\n          value: test-value\n          effect: NoSchedule\n\n# If set to true, RKE will not fail when unsupported Docker version\n# are found\nignore_docker_version: false\n\n# Enable running cri-dockerd\n# Up to Kubernetes 1.23, kubelet contained code called dockershim\n# to support Docker runtime. The replacement is called cri-dockerd\n# and should be enabled if you want to keep using Docker as your\n# container runtime\n# Only available to enable in Kubernetes 1.21 and higher\nenable_cri_dockerd: true\n\n# Cluster level SSH private key\n# Used if no ssh information is set for the node\nssh_key_path: ~/.ssh/test\n\n# Enable use of SSH agent to use SSH private keys with passphrase\n# This requires the environment `SSH_AUTH_SOCK` configured pointing\n#to your SSH agent which has the private key added\nssh_agent_auth: true\n\n# List of registry credentials\n# If you are using a Docker Hub registry, you can omit the `url`\n# or set it to `docker.io`\n# is_default set to `true` will override the system default\n# registry set in the global settings\nprivate_registries:\n     - url: registry.com\n       user: Username\n       password: password\n       is_default: true\n\n# Bastion/Jump host configuration\nbastion_host:\n    address: x.x.x.x\n    user: ubuntu\n    port: 22\n    ssh_key_path: /home/user/.ssh/bastion_rsa\n# or\n#   ssh_key: |-\n#     -----BEGIN RSA PRIVATE KEY-----\n#\n#     -----END RSA PRIVATE KEY-----\n\n# Set the name of the Kubernetes cluster\ncluster_name: mycluster\n\n\n# The Kubernetes version used. The default versions of Kubernetes\n# are tied to specific versions of the system images.\n#\n# For RKE v0.2.x and below, the map of Kubernetes versions and their system images is\n# located here:\n# https://github.com/rancher/types/blob/release/v2.2/apis/management.cattle.io/v3/k8s_defaults.go\n#\n# For RKE v0.3.0 and above, the map of Kubernetes versions and their system images is\n# located here:\n# https://github.com/rancher/kontainer-driver-metadata/blob/master/rke/k8s_rke_system_images.go\n#\n# In case the kubernetes_version and kubernetes image in\n# system_images are defined, the system_images configuration\n# will take precedence over kubernetes_version.\nkubernetes_version: v1.10.3-rancher2\n\n# System Images are defaulted to a tag that is mapped to a specific\n# Kubernetes Version and not required in a cluster.yml.\n# Each individual system image can be specified if you want to use a different tag.\n#\n# For RKE v0.2.x and below, the map of Kubernetes versions and their system images is\n# located here:\n# https://github.com/rancher/types/blob/release/v2.2/apis/management.cattle.io/v3/k8s_defaults.go\n#\n# For RKE v0.3.0 and above, the map of Kubernetes versions and their system images is\n# located here:\n# https://github.com/rancher/kontainer-driver-metadata/blob/master/rke/k8s_rke_system_images.go\n#\nsystem_images:\n    kubernetes: rancher/hyperkube:v1.10.3-rancher2\n    etcd: rancher/coreos-etcd:v3.1.12\n    alpine: rancher/rke-tools:v0.1.9\n    nginx_proxy: rancher/rke-tools:v0.1.9\n    cert_downloader: rancher/rke-tools:v0.1.9\n    kubernetes_services_sidecar: rancher/rke-tools:v0.1.9\n    kubedns: rancher/k8s-dns-kube-dns-amd64:1.14.8\n    dnsmasq: rancher/k8s-dns-dnsmasq-nanny-amd64:1.14.8\n    kubedns_sidecar: rancher/k8s-dns-sidecar-amd64:1.14.8\n    kubedns_autoscaler: rancher/cluster-proportional-autoscaler-amd64:1.0.0\n    pod_infra_container: rancher/pause-amd64:3.1\n\nservices:\n    etcd:\n      # Custom uid/guid for etcd directory and files\n      uid: 52034\n      gid: 52034\n      # if external etcd is used\n      # path: /etcdcluster\n      # external_urls:\n      #   - https://etcd-example.com:2379\n      # ca_cert: |-\n      #   -----BEGIN CERTIFICATE-----\n      #   xxxxxxxxxx\n      #   -----END CERTIFICATE-----\n      # cert: |-\n      #   -----BEGIN CERTIFICATE-----\n      #   xxxxxxxxxx\n      #   -----END CERTIFICATE-----\n      # key: |-\n      #   -----BEGIN PRIVATE KEY-----\n      #   xxxxxxxxxx\n      #   -----END PRIVATE KEY-----\n    # Note for Rancher v2.0.5 and v2.0.6 users: If you are configuring\n    # Cluster Options using a Config File when creating Rancher Launched\n    # Kubernetes, the names of services should contain underscores\n    # only: `kube_api`.\n    kube-api:\n      # IP range for any services created on Kubernetes\n      # This must match the service_cluster_ip_range in kube-controller\n      service_cluster_ip_range: 10.43.0.0/16\n      # Expose a different port range for NodePort services\n      service_node_port_range: 30000-32767\n      pod_security_policy: false\n      # Encrypt secret data at Rest\n      # Available as of v0.3.1\n      secrets_encryption_config:\n        enabled: true\n        custom_config:\n          apiVersion: apiserver.config.k8s.io/v1\n          kind: EncryptionConfiguration\n          resources:\n          - resources:\n            - secrets\n            providers:\n            - aescbc:\n                keys:\n                - name: k-fw5hn\n                  secret: RTczRjFDODMwQzAyMDVBREU4NDJBMUZFNDhCNzM5N0I=\n            - identity: {}\n      # Enable audit logging\n      # Available as of v1.0.0\n      audit_log:\n        enabled: true\n        configuration:\n          max_age: 6\n          max_backup: 6\n          max_size: 110\n          path: /var/log/kube-audit/audit-log.json\n          format: json\n          policy:\n            apiVersion: audit.k8s.io/v1 # This is required.\n            kind: Policy\n            omitStages:\n              - "RequestReceived"\n            rules:\n              # Log pod changes at RequestResponse level\n              - level: RequestResponse\n                resources:\n                - group: ""\n                  # Resource "pods" doesn\'t match requests to any subresource of pods,\n                  # which is consistent with the RBAC policy.\n                  resources: ["pods"]\n      # Using the EventRateLimit admission control enforces a limit on the number of events\n      # that the API Server will accept in a given time period\n      # Available as of v1.0.0\n      event_rate_limit:\n        enabled: true\n        configuration:\n          apiVersion: eventratelimit.admission.k8s.io/v1alpha1\n          kind: Configuration\n          limits:\n          - type: Server\n            qps: 6000\n            burst: 30000\n      # Enable AlwaysPullImages Admission controller plugin\n      # Available as of v0.2.0\n      always_pull_images: false\n      # Add additional arguments to the kubernetes API server\n      # This WILL OVERRIDE any existing defaults\n      extra_args:\n        # Enable audit log to stdout\n        audit-log-path: "-"\n        # Increase number of delete workers\n        delete-collection-workers: 3\n        # Set the level of log output to debug-level\n        v: 4\n    # Note for Rancher 2 users: If you are configuring Cluster Options\n    # using a Config File when creating Rancher Launched Kubernetes,\n    # the names of services should contain underscores only:\n    # `kube_controller`. This only applies to Rancher v2.0.5 and v2.0.6.\n    kube-controller:\n      # CIDR pool used to assign IP addresses to pods in the cluster\n      cluster_cidr: 10.42.0.0/16\n      # IP range for any services created on Kubernetes\n      # This must match the service_cluster_ip_range in kube-api\n      service_cluster_ip_range: 10.43.0.0/16\n      # Add additional arguments to the kubernetes API server\n      # This WILL OVERRIDE any existing defaults\n      extra_args:\n        # Set the level of log output to debug-level\n        v: 4\n        # Enable RotateKubeletServerCertificate feature gate\n        feature-gates: RotateKubeletServerCertificate=true\n        # Enable TLS Certificates management\n        # https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster/\n        cluster-signing-cert-file: "/etc/kubernetes/ssl/kube-ca.pem"\n        cluster-signing-key-file: "/etc/kubernetes/ssl/kube-ca-key.pem"\n    kubelet:\n      # Base domain for the cluster\n      cluster_domain: cluster.local\n      # IP address for the DNS service endpoint\n      cluster_dns_server: 10.43.0.10\n      # Fail if swap is on\n      fail_swap_on: false\n      # Configure pod-infra-container-image argument\n      pod-infra-container-image: "k8s.gcr.io/pause:3.2"\n      # Generate a certificate signed by the kube-ca Certificate Authority\n      # for the kubelet to use as a server certificate\n      # Available as of v1.0.0\n      generate_serving_certificate: true\n      extra_args:\n        # Set max pods to 250 instead of default 110\n        max-pods: 250\n        # Enable RotateKubeletServerCertificate feature gate\n        feature-gates: RotateKubeletServerCertificate=true\n      # Optionally define additional volume binds to a service\n      extra_binds:\n        - "/usr/libexec/kubernetes/kubelet-plugins:/usr/libexec/kubernetes/kubelet-plugins"\n    scheduler:\n      extra_args:\n        # Set the level of log output to debug-level\n        v: 4\n    kubeproxy:\n      extra_args:\n        # Set the level of log output to debug-level\n        v: 4\n\n# Currently, only authentication strategy supported is x509.\n# You can optionally create additional SANs (hostnames or IPs) to\n# add to the API server PKI certificate.\n# This is useful if you want to use a load balancer for the\n# control plane servers.\nauthentication:\n    strategy: x509\n    sans:\n      - "10.18.160.10"\n      - "my-loadbalancer-1234567890.us-west-2.elb.amazonaws.com"\n\n# Kubernetes Authorization mode\n# Use `mode: rbac` to enable RBAC\n# Use `mode: none` to disable authorization\nauthorization:\n    mode: rbac\n\n# If you want to set a Kubernetes cloud provider, you specify\n# the name and configuration\ncloud_provider:\n    name: aws\n\n# Add-ons are deployed using kubernetes jobs. RKE will give\n# up on trying to get the job status after this timeout in seconds..\naddon_job_timeout: 30\n\n# Specify network plugin-in (canal, calico, flannel, weave, or none)\nnetwork:\n  plugin: canal\n  # Specify MTU\n  mtu: 1400\n  options:\n    # Configure interface to use for Canal\n    canal_iface: eth1\n    canal_flannel_backend_type: vxlan\n    # Available as of v1.2.6\n    canal_autoscaler_priority_class_name: system-cluster-critical\n    canal_priority_class_name: system-cluster-critical\n  # Available as of v1.2.4\n  tolerations:\n  - key: "node.kubernetes.io/unreachable"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  - key: "node.kubernetes.io/not-ready"\n    operator: "Exists"\n    effect: "NoExecute"\n    tolerationseconds: 300\n  # Available as of v1.1.0\n  update_strategy:\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 6\n\n# Specify DNS provider (coredns or kube-dns)\ndns:\n  provider: coredns\n  # Available as of v1.1.0\n  update_strategy:\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 20%\n      maxSurge: 15%\n  linear_autoscaler_params:\n    cores_per_replica: 0.34\n    nodes_per_replica: 4\n    prevent_single_point_failure: true\n    min: 2\n    max: 3\n\n# Specify monitoring provider (metrics-server)\nmonitoring:\n  provider: metrics-server\n  # Available as of v1.1.0\n  update_strategy:\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 8\n\n# Currently only nginx ingress provider is supported.\n# To disable ingress controller, set `provider: none`\n# `node_selector` controls ingress placement and is optional\ningress:\n  provider: nginx\n  node_selector:\n    app: ingress\n  # Available as of v1.1.0\n  update_strategy:\n    strategy: RollingUpdate\n    rollingUpdate:\n      maxUnavailable: 5\n\n# All add-on manifests MUST specify a namespace\naddons: |-\n    ---\n    apiVersion: v1\n    kind: Pod\n    metadata:\n      name: my-nginx\n      namespace: default\n    spec:\n      containers:\n      - name: my-nginx\n        image: nginx\n        ports:\n        - containerPort: 80\n\naddons_include:\n    - https://raw.githubusercontent.com/rook/rook/master/cluster/examples/kubernetes/rook-operator.yaml\n    - https://raw.githubusercontent.com/rook/rook/master/cluster/examples/kubernetes/rook-cluster.yaml\n    - /path/to/manifest\n')))}p.isMDXComponent=!0}}]);