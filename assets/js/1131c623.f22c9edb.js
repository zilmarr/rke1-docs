"use strict";(self.webpackChunkrke_docs=self.webpackChunkrke_docs||[]).push([[7100],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5246:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"One-time Snapshots",weight:1},l=void 0,p={unversionedId:"etcd-snapshots/one-time-snapshots/one-time-snapshots",id:"etcd-snapshots/one-time-snapshots/one-time-snapshots",title:"One-time Snapshots",description:"One-time snapshots are handled differently depending on your version of RKE.",source:"@site/docs/etcd-snapshots/one-time-snapshots/one-time-snapshots.md",sourceDirName:"etcd-snapshots/one-time-snapshots",slug:"/etcd-snapshots/one-time-snapshots/",permalink:"/rke1-docs/etcd-snapshots/one-time-snapshots/",draft:!1,editUrl:"https://github.com/rancher/rke1-docs/edit/main/docs/etcd-snapshots/one-time-snapshots/one-time-snapshots.md",tags:[],version:"current",lastUpdatedAt:1665507505,formattedLastUpdatedAt:"10/11/2022",frontMatter:{title:"One-time Snapshots",weight:1},sidebar:"mySidebar",previous:{title:"Backups and Disaster Recovery",permalink:"/rke1-docs/etcd-snapshots/"},next:{title:"Recurring Snapshots",permalink:"/rke1-docs/etcd-snapshots/recurring-snapshots/"}},d={},c=[{value:"Options for <code>rke etcd snapshot-save</code>",id:"options-for-rke-etcd-snapshot-save",level:3},{value:"Using a custom CA certificate for S3",id:"using-a-custom-ca-certificate-for-s3",level:5},{value:"IAM Support for Storing Snapshots in S3",id:"iam-support-for-storing-snapshots-in-s3",level:3},{value:"Options for <code>rke etcd snapshot-save</code>",id:"options-for-rke-etcd-snapshot-save-1",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One-time snapshots are handled differently depending on your version of RKE."),(0,o.kt)("p",null,'{{% tabs %}}\n{{% tab "RKE v0.2.0+" %}}'),(0,o.kt)("p",null,"To save a snapshot of etcd from each etcd node in the cluster config file, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-save")," command."),(0,o.kt)("p",null,"The snapshot is saved in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,o.kt)("p",null,"When running the command, an additional container is created to take the snapshot. When the snapshot is completed, the container is automatically removed."),(0,o.kt)("p",null,"The one-time snapshot can be uploaded to a S3 compatible backend by using the additional options to specify the S3 backend."),(0,o.kt)("p",null,"To create a local one-time snapshot, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-save --config cluster.yml --name snapshot-name   \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The snapshot is saved in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,o.kt)("p",null,"To save a one-time snapshot to S3, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-save \\\n--config cluster.yml \\\n--name snapshot-name \\\n--s3 \\\n--access-key S3_ACCESS_KEY \\\n--secret-key S3_SECRET_KEY \\\n--bucket-name s3-bucket-name \\\n--folder s3-folder-name \\ # Optional - Available as of v0.3.0\n--s3-endpoint s3.amazonaws.com\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The snapshot is saved in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots")," as well as uploaded to the S3 backend."),(0,o.kt)("h3",{id:"options-for-rke-etcd-snapshot-save"},"Options for ",(0,o.kt)("inlineCode",{parentName:"h3"},"rke etcd snapshot-save")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"S3 Specific"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify snapshot name"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify an alternate cluster YAML file (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"cluster.yml"),") ","[$RKE_CONFIG]"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--s3")),(0,o.kt)("td",{parentName:"tr",align:null},"Enabled backup to s3"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--s3-endpoint")," value"),(0,o.kt)("td",{parentName:"tr",align:null},'Specify s3 endpoint url (default: "s3.amazonaws.com")'),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--s3-endpoint-ca")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify a path to a CA cert file to connect to a custom s3 endpoint (optional) ",(0,o.kt)("em",{parentName:"td"},"Available as of v0.2.5")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--access-key")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 accessKey"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--secret-key")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 secretKey"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--bucket-name")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify s3 bucket name"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--folder")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify folder inside  bucket where backup will be stored. This is optional. ",(0,o.kt)("em",{parentName:"td"},"Available as of v0.3.0")),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--region")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the s3 bucket location (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"config-options/#supported-docker-versions"},"Disable Docker version check")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--access-key")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--secret-key")," options are not required if the ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd")," nodes are AWS EC2 instances that have been configured with a suitable IAM instance profile."),(0,o.kt)("h5",{id:"using-a-custom-ca-certificate-for-s3"},"Using a custom CA certificate for S3"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v0.2.0")),(0,o.kt)("p",null,"The backup snapshot can be stored on a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"S3")," backup like ",(0,o.kt)("a",{parentName:"p",href:"https://min.io/"},"minio"),". If the S3 backend uses a self-signed or custom certificate, provide a custom certificate using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--s3-endpoint-ca")," to connect to the S3 backend."),(0,o.kt)("h3",{id:"iam-support-for-storing-snapshots-in-s3"},"IAM Support for Storing Snapshots in S3"),(0,o.kt)("p",null,"In addition to API access keys, RKE supports using IAM roles for S3 authentication. The cluster etcd nodes must be assigned an IAM role that has read/write access to the designated backup bucket on S3. Also, the nodes must have network access to the S3 endpoint specified."),(0,o.kt)("p",null,"Below is an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"example IAM policy")," that would allow nodes to store and retrieve backups from S3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "ListObjectsInBucket",\n            "Effect": "Allow",\n            "Action": ["s3:ListBucket"],\n            "Resource": ["arn:aws:s3:::bucket-name"]\n        },\n        {\n            "Sid": "AllObjectActions",\n            "Effect": "Allow",\n            "Action": "s3:*Object",\n            "Resource": ["arn:aws:s3:::bucket-name/*"]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"For details on giving an application access to S3, refer to the AWS documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html"},"Using an IAM Role to Grant Permissions to Applications Running on Amazon EC2 Instances.")),(0,o.kt)("p",null,'{{% /tab %}}\n{{% tab "RKE before v0.2.0" %}}'),(0,o.kt)("p",null,"To save a snapshot of etcd from each etcd node in the cluster config file, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"rke etcd snapshot-save")," command."),(0,o.kt)("p",null,"When running the command, an additional container is created to take the snapshot. When the snapshot is completed, the container is automatically removed."),(0,o.kt)("p",null,"RKE saves a backup of the certificates, i.e. a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"pki.bundle.tar.gz"),", in the same location. The snapshot and pki bundle file are required for the restore process."),(0,o.kt)("p",null,"To create a local one-time snapshot, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ rke etcd snapshot-save --config cluster.yml --name snapshot-name   \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The snapshot is saved in ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/rke/etcd-snapshots"),"."),(0,o.kt)("h3",{id:"options-for-rke-etcd-snapshot-save-1"},"Options for ",(0,o.kt)("inlineCode",{parentName:"h3"},"rke etcd snapshot-save")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--name")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify snapshot name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--config")," value"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify an alternate cluster YAML file (default: ",(0,o.kt)("inlineCode",{parentName:"td"},"cluster.yml"),") ","[$RKE_CONFIG]")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ssh-agent-auth")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"config-options/#ssh-agent"},"Use SSH Agent Auth defined by SSH_AUTH_SOCK"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ignore-docker-version")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"config-options/#supported-docker-versions"},"Disable Docker version check"))))),(0,o.kt)("p",null,"{{% /tab %}}\n{{% /tabs %}}"))}m.isMDXComponent=!0}}]);