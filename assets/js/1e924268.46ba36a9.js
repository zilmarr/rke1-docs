"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[8614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(3117),r=(n(7294),n(3905));const i={title:"RKE Kubernetes Installation",description:"RKE is a fast, versatile Kubernetes installer you can use to install Kubernetes on your Linux hosts. Learn the simple steps for an RKE Kubernetes installation"},l=void 0,o={unversionedId:"installation/installation",id:"installation/installation",title:"RKE Kubernetes Installation",description:"RKE is a fast, versatile Kubernetes installer you can use to install Kubernetes on your Linux hosts. Learn the simple steps for an RKE Kubernetes installation",source:"@site/docs/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/installation/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/installation/installation.md",tags:[],version:"current",lastUpdatedAt:1687467719,formattedLastUpdatedAt:"Jun 22, 2023",frontMatter:{title:"RKE Kubernetes Installation",description:"RKE is a fast, versatile Kubernetes installer you can use to install Kubernetes on your Linux hosts. Learn the simple steps for an RKE Kubernetes installation"},sidebar:"mySidebar",previous:{title:"Requirements",permalink:"/os/"},next:{title:"Custom Certificates",permalink:"/installation/certs/"}},s={},u=[{value:"Download the RKE binary",id:"download-the-rke-binary",level:2},{value:"Alternative RKE macOS Install - Homebrew",id:"alternative-rke-macos-install---homebrew",level:3},{value:"Alternative RKE macOS Install - MacPorts",id:"alternative-rke-macos-install---macports",level:3},{value:"Prepare the Nodes for the Kubernetes cluster",id:"prepare-the-nodes-for-the-kubernetes-cluster",level:2},{value:"Creating the Cluster Configuration File",id:"creating-the-cluster-configuration-file",level:2},{value:"Using <code>rke config</code>",id:"using-rke-config",level:3},{value:"Other RKE Configuration Options",id:"other-rke-configuration-options",level:4},{value:"High Availability",id:"high-availability",level:3},{value:"Certificates",id:"certificates",level:3},{value:"Deploying Kubernetes with RKE",id:"deploying-kubernetes-with-rke",level:2},{value:"Save Your Files",id:"save-your-files",level:2},{value:"Kubernetes Cluster State",id:"kubernetes-cluster-state",level:3},{value:"Interacting with your Kubernetes cluster",id:"interacting-with-your-kubernetes-cluster",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"RKE is a fast, versatile Kubernetes installer that you can use to install Kubernetes on your Linux hosts. You can get started in a couple of quick and easy steps"),(0,r.kt)("h2",{id:"download-the-rke-binary"},"Download the RKE binary"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From your workstation, open a web browser and look up the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/#latest-release"},"latest available RKE release"),". You can click on the release notes link to go straight to that release or manually navigate to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke/releases"},"RKE Releases")," page and download the latest available RKE installer applicable to your operating system and architecture:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:"),"\nBe aware that the release that is marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"Latest release")," on GitHub release page might not be the actual latest available release of RKE.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"macOS"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"rke_darwin-amd64")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linux (Intel/AMD)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"rke_linux-amd64")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linux (ARM 32-bit)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"rke_linux-arm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Linux (ARM 64-bit)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"rke_linux-arm64")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Windows (32-bit)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"rke_windows-386.exe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Windows (64-bit)"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"rke_windows-amd64.exe")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the RKE binary to a folder in your ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH")," and rename it ",(0,r.kt)("inlineCode",{parentName:"p"},"rke")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"rke.exe")," for Windows)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# macOS\n$ mv rke_darwin-amd64 rke\n# Linux\n$ mv rke_linux-amd64 rke\n# Windows PowerShell\n> mv rke_windows-amd64.exe rke.exe\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make the RKE binary that you just downloaded executable. Open Terminal, change directory to the location of the RKE binary, and then run one of the commands below."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Using Windows?"),"\nThe file is already an executable. Skip to ",(0,r.kt)("a",{parentName:"p",href:"#prepare-the-nodes-for-the-kubernetes-cluster"},"Prepare the Nodes for the Kubernetes Cluster"),".")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ chmod +x rke\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm that RKE is now executable by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ rke --version\n")))),(0,r.kt)("h3",{id:"alternative-rke-macos-install---homebrew"},"Alternative RKE macOS Install - Homebrew"),(0,r.kt)("p",null,"RKE can also be installed and updated using Homebrew, a package manager for macOS."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Homebrew. See ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"https://brew.sh/")," for instructions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"brew"),", install RKE by running the following command in a Terminal window:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ brew install rke\n")))),(0,r.kt)("p",null,"If you have already installed RKE using ",(0,r.kt)("inlineCode",{parentName:"p"},"brew"),", you can upgrade RKE by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ brew upgrade rke\n")),(0,r.kt)("h3",{id:"alternative-rke-macos-install---macports"},"Alternative RKE macOS Install - MacPorts"),(0,r.kt)("p",null,"RKE can also be installed and updated using MacPorts, a package manager for macOS."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install MacPorts. See ",(0,r.kt)("a",{parentName:"p",href:"https://www.macports.org/"},"https://www.macports.org/")," for instructions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"port"),", install RKE by running the following command in a Terminal window:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ port install rke\n")))),(0,r.kt)("p",null,"If you have already installed RKE using ",(0,r.kt)("inlineCode",{parentName:"p"},"port"),", you can upgrade RKE by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ port upgrade rke\n")),(0,r.kt)("h2",{id:"prepare-the-nodes-for-the-kubernetes-cluster"},"Prepare the Nodes for the Kubernetes cluster"),(0,r.kt)("p",null,"The Kubernetes cluster components are launched using Docker on a Linux distro. You can use any Linux you want, as long as you can install Docker on it."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For information on which Docker versions were tested with your version of RKE, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rke1/support-matrix/all-supported-versions/"},"support matrix")," for installing Rancher on RKE.")),(0,r.kt)("p",null,"Review the ",(0,r.kt)("a",{parentName:"p",href:"/os/"},"OS requirements")," and configure each node appropriately."),(0,r.kt)("h2",{id:"creating-the-cluster-configuration-file"},"Creating the Cluster Configuration File"),(0,r.kt)("p",null,"RKE uses a cluster configuration file, referred to as ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," to determine what nodes will be in the cluster and how to deploy Kubernetes. There are ",(0,r.kt)("a",{parentName:"p",href:"/config-options/"},"many configuration options")," that can be set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". In our example, we will be assuming the minimum of one ",(0,r.kt)("a",{parentName:"p",href:"/config-options/nodes/"},"node")," for your Kubernetes cluster."),(0,r.kt)("p",null,"There are two easy ways to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using our ",(0,r.kt)("a",{parentName:"li",href:"/example-yamls/#minimal-cluster-yml-example"},"minimal ",(0,r.kt)("inlineCode",{parentName:"a"},"cluster.yml"))," and updating it based on the node that you will be using."),(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"rke config")," to query for all the information needed.")),(0,r.kt)("h3",{id:"using-rke-config"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"rke config")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"rke config")," to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," in the current directory. This command will prompt you for all the information needed to build a cluster. See ",(0,r.kt)("a",{parentName:"p",href:"/config-options/"},"cluster configuration options")," for details on the various options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rke config --name cluster.yml\n")),(0,r.kt)("h4",{id:"other-rke-configuration-options"},"Other RKE Configuration Options"),(0,r.kt)("p",null,"You can create an empty template ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"--empty")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rke config --empty --name cluster.yml\n")),(0,r.kt)("p",null,"Instead of creating a file, you can print the generated configuration to stdout using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--print")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rke config --print\n")),(0,r.kt)("h3",{id:"high-availability"},"High Availability"),(0,r.kt)("p",null,"RKE is HA ready, you can specify more than one ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane")," node in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file. RKE will deploy master components on all of these nodes and the kubelets are configured to connect to ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:6443")," by default which is the address of ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx-proxy")," service that proxy requests to all master nodes."),(0,r.kt)("p",null,"To create an HA cluster, specify more than one host with role ",(0,r.kt)("inlineCode",{parentName:"p"},"controlplane"),"."),(0,r.kt)("h3",{id:"certificates"},"Certificates"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,r.kt)("p",null,"By default, Kubernetes clusters require certificates and RKE auto-generates the certificates for all cluster components. You can also use ",(0,r.kt)("a",{parentName:"p",href:"installation/certs"},"custom certificates"),". After the Kubernetes cluster is deployed, you can ",(0,r.kt)("a",{parentName:"p",href:"/cert-mgmt/#certificate-rotation"},"manage these auto-generated certificates"),"."),(0,r.kt)("h2",{id:"deploying-kubernetes-with-rke"},"Deploying Kubernetes with RKE"),(0,r.kt)("p",null,"After you've created your ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", you can deploy your cluster with a simple command. This command assumes the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," file is in the same directory as where you are running the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rke up\n\nINFO[0000] Building Kubernetes cluster\nINFO[0000] [dialer] Setup tunnel for host [10.0.0.1]\nINFO[0000] [network] Deploying port listener containers\nINFO[0000] [network] Pulling image [alpine:latest] on host [10.0.0.1]\n...\nINFO[0101] Finished building Kubernetes cluster successfully\n")),(0,r.kt)("p",null,"The last line should read ",(0,r.kt)("inlineCode",{parentName:"p"},"Finished building Kubernetes cluster successfully")," to indicate that your cluster is ready to use. As part of the Kubernetes creation process, a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file has been created and written at ",(0,r.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml"),", which can be used to start interacting with your Kubernetes cluster."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you have used a different file name from ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),", then the kube config file will be named ",(0,r.kt)("inlineCode",{parentName:"p"},"kube_config_<FILE_NAME>.yml"),".")),(0,r.kt)("h2",{id:"save-your-files"},"Save Your Files"),(0,r.kt)("admonition",{title:"Important",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The files mentioned below are needed to maintain, troubleshoot and upgrade your cluster.")),(0,r.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster.yml"),": The RKE cluster configuration file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),": The ",(0,r.kt)("a",{parentName:"li",href:"kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cluster.rkestate"),": The ",(0,r.kt)("a",{parentName:"li",href:"#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains credentials for full access to the cluster.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"The Kubernetes Cluster State file is only created when using RKE v0.2.0 or higher."))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.')),(0,r.kt)("h3",{id:"kubernetes-cluster-state"},"Kubernetes Cluster State"),(0,r.kt)("p",null,"The Kubernetes cluster state, which consists of the cluster configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," and components certificates in Kubernetes cluster, is saved by RKE, but depending on your RKE version, the cluster state is saved differently."),(0,r.kt)("p",null,"As of v0.2.0, RKE creates a ",(0,r.kt)("inlineCode",{parentName:"p"},".rkestate")," file in the same directory that has the cluster configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},".rkestate")," file contains the current state of the cluster including the RKE configuration and the certificates. It is required to keep this file in order to update the cluster or perform any operation on it through RKE."),(0,r.kt)("p",null,"Before v0.2.0, RKE saved the Kubernetes cluster state as a secret. When updating the state, RKE pulls the secret, updates/changes the state and saves a new secret."),(0,r.kt)("h2",{id:"interacting-with-your-kubernetes-cluster"},"Interacting with your Kubernetes cluster"),(0,r.kt)("p",null,"After your cluster is up and running, you can start using the ",(0,r.kt)("a",{parentName:"p",href:"/kubeconfig/"},"generated kubeconfig file")," to start interacting with your Kubernetes cluster using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,r.kt)("p",null,"After installation, there are several maintenance items that might arise:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cert-mgmt/"},"Certificate Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/managing-clusters/"},"Adding and Removing Nodes in the cluster"))))}m.isMDXComponent=!0}}]);