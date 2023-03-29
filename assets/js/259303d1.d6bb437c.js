"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67929],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},21852:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={slug:"2023-day21",title:"21. GitHub Actions for Power",authors:["kartik","daniel"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","power platform","developer experience","github","30DaysOfLowCode"],image:"https://microsoft.github.io/Low-Code/img/og/30-21.png",description:"Explore the topic of GitHub Actions and show you how can you connect to Power Platform environments with GitHub Actions",tags:["low-code-february","30-days-of-lowcode","power-platform","developer experience","github"]},i=void 0,l={permalink:"/Low-Code/blog/2023-day21",source:"@site/blog/2023-lcf/2023-02-21/index.md",title:"21. GitHub Actions for Power",description:"Explore the topic of GitHub Actions and show you how can you connect to Power Platform environments with GitHub Actions",date:"2023-02-21T00:00:00.000Z",formattedDate:"February 21, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"power-platform",permalink:"/Low-Code/blog/tags/power-platform"},{label:"developer experience",permalink:"/Low-Code/blog/tags/developer-experience"},{label:"github",permalink:"/Low-Code/blog/tags/github"}],readingTime:3.355,hasTruncateMarker:!1,authors:[{name:"Kartik Kanakasabesan",title:"Principal Program Manager",url:"https://github.com/kkanakas",imageURL:"https://github.com/kkanakas.png",key:"kartik"},{name:"Daniel Laskewitz",title:"Senior Cloud Advocate",url:"https://github.com/Laskewitz",imageURL:"https://github.com/Laskewitz.png",key:"daniel"}],frontMatter:{slug:"2023-day21",title:"21. GitHub Actions for Power",authors:["kartik","daniel"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","power platform","developer experience","github","30DaysOfLowCode"],image:"https://microsoft.github.io/Low-Code/img/og/30-21.png",description:"Explore the topic of GitHub Actions and show you how can you connect to Power Platform environments with GitHub Actions",tags:["low-code-february","30-days-of-lowcode","power-platform","developer experience","github"]},prevItem:{title:"22. Power Automate, ACS and OpenAI",permalink:"/Low-Code/blog/2023-day22"},nextItem:{title:"20. ALM For Power Platform",permalink:"/Low-Code/blog/2023-day20"}},s={authorsImageUrls:[void 0,void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Basic GitHub Actions Concepts",id:"basic-github-actions-concepts",level:2},{value:"GitHub Runners",id:"github-runners",level:2},{value:"How to connect to Power Platform environments using GitHub Actions?",id:"how-to-connect-to-power-platform-environments-using-github-actions",level:2},{value:"Use Environment Variables within GitHub workflow scripts when deploying Power Platform applications",id:"use-environment-variables-within-github-workflow-scripts-when-deploying-power-platform-applications",level:2},{value:"Exercise",id:"exercise",level:2},{value:"Resources",id:"resources",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/img/og/30-21.png"}),(0,r.kt)("meta",{name:"twitter:title",content:"GitHub Actions for Power"}),(0,r.kt)("meta",{name:"twitter:description",content:"Explore the topic of GitHub Actions and show you how can you connect to Power Platform environments with GitHub Actions"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-21.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/img/og/30-21.png"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 21")," of #30DaysOfLowCode!"),(0,r.kt)("p",null,"Yesterday we talked about foundamentals of App Lifecycle Managament with Power Platform. Today we'll explore the topic of GitHub Actions and show you how can you connect to Power Platform environments with GitHub Actions."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intro to GitHub Actions"),(0,r.kt)("li",{parentName:"ul"},"GitHub Runners"),(0,r.kt)("li",{parentName:"ul"},"Power Platform and GitHub Actions"),(0,r.kt)("li",{parentName:"ul"},"Exercise: Sign up for your ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/devplan"},(0,r.kt)("strong",{parentName:"a"},"Developer Plan"))),(0,r.kt)("li",{parentName:"ul"},"Resources: Explore the ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/lowcode-february/collection"},(0,r.kt)("strong",{parentName:"a"},"Low Code February Collection")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Empty Banner Placeholder",src:o(86008).Z,width:"1334",height:"560"})),(0,r.kt)("h2",{id:"basic-github-actions-concepts"},"Basic GitHub Actions Concepts"),(0,r.kt)("p",null,"Before we get into details on the Power Platform GitHub actions, we need to understand some key terms of GitHub, that enable GitHub to do Continuous Integration/Continuous Delivery (CI/CD)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GitHub Workflow Concepts",src:o(33052).Z,width:"3173",height:"1168"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub actions are components to enable CI/CD of Power Platform Applications using GitHub Workflows."),(0,r.kt)("li",{parentName:"ul"},"GitHub Run      : GitHub run is a term used when the workflow runs "),(0,r.kt)("li",{parentName:"ul"},"GitHub Workflow : This is the actual CI/CD script that is used by GitHub and it consists of Jobs"),(0,r.kt)("li",{parentName:"ul"},"GitHub Job      : A Job is a composition of a GitHub Runner (container where the CI/CD script is run)"),(0,r.kt)("li",{parentName:"ul"},"GitHub Steps    : Step has a set of actions that accomplish an the overall outcome of the workflow (such as deploying to Power Platform)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/powerplatform-actions"},"The GitHub actions for Power Platform are available at the GitHub market place"),". The GitHub actions, provide the ability to import export solutions, deploying to different environments, provisioning and decommissioning an environments, and validate the solution when it is being imported into a target environment."),(0,r.kt)("h2",{id:"github-runners"},"GitHub Runners"),(0,r.kt)("p",null,"Runners in GitHub are a type of machine where you need to run your GitHub job on. Runners can GitHub hosted or self-hosted.\nGitHub hosted runners are managed by GitHub and all you need to do is to use ",(0,r.kt)("em",{parentName:"p"},"runs-on")," and GitHub will automatically allocate such a resource during the runtime of a CI/CD script. "),(0,r.kt)("p",null,"Self-hosted Runners run on your identified resources such as VMs in the Azure Cloud or On-premises. This runners are configured and controlled based on your needs, as in you have more control on the kind of operating system version, pre-installed software tools that need to install for your CI/CD script to run."),(0,r.kt)("p",null,"Power Platform Actions on GitHub, support Windows and Linux images for both GitHub hosted and self-hosted runners. "),(0,r.kt)("h2",{id:"how-to-connect-to-power-platform-environments-using-github-actions"},"How to connect to Power Platform environments using GitHub Actions?"),(0,r.kt)("p",null,"Power Platform Actions for GitHub have support for the following: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"UserName/Password : Generic connection which uses username and password to authenticate to the Power Platform environments. Please do not enable MFAs this account otherwise your GitHub workflows will break"),(0,r.kt)("li",{parentName:"ul"},"Service Principal and Client secret (Recommended) - This allows your workflow to authenticate to the Power Platform using a service principal identity with a client secret. This is an approach we generally recommend when deploying Power Platform applications at scale.")),(0,r.kt)("h2",{id:"use-environment-variables-within-github-workflow-scripts-when-deploying-power-platform-applications"},"Use Environment Variables within GitHub workflow scripts when deploying Power Platform applications"),(0,r.kt)("p",null,"If you want to use the same workflow to deploy multiple Power Platform solution to either one environment or different environments.\nGitHub Workflows support environment variables.\n",(0,r.kt)("img",{alt:"Example of GitHub environment variables",src:o(74295).Z,width:"1444",height:"1788"})),(0,r.kt)("p",null,"Once you have the environments in place you can then call these environment variables from within the actions\n",(0,r.kt)("img",{alt:"Example of invoking environment variables from the action",src:o(71322).Z,width:"1609",height:"517"})),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try out our Hands on lab for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/powerplatform-actions-lab"},(0,r.kt)("strong",{parentName:"a"},"GitHub actions")))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/powerplatform-actions"},(0,r.kt)("strong",{parentName:"a"},"Get the GitHub actions from the GitHub marketplace"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners"},(0,r.kt)("strong",{parentName:"a"},"Self hosted runner information"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners"},(0,r.kt)("strong",{parentName:"a"},"About GitHub hosted runners"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal?WT.mc_id=javascript-82212-ninarasi"},(0,r.kt)("strong",{parentName:"a"},"Azure AD service principal"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/alm/tutorials/github-actions-start?source=recommendations?WT.mc_id=javascript-82212-ninarasi"},(0,r.kt)("strong",{parentName:"a"},"GitHub Power Platform Actions tutorial"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/powerplatform-actions-lab"},(0,r.kt)("strong",{parentName:"a"},"GitHub Power Platform Actions: Hands on lab")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Campaign Banner",src:o(24849).Z,width:"1334",height:"560"})))}p.isMDXComponent=!0},71322:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Action-env-var-fb10f29682c2484ef95e5dab7b0dfb38.png"},74295:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/GitHub-env-variables-b9f027e2bd864e050b7589362cac1b39.png"},33052:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/Github-concept-45c97d26112a94a664de6e3b57278cdc.png"},86008:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/30-21-52d8fb9432829ef77edba2b7c2281f39.png"},24849:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/30-banner-d9bab2b92d758942447a4cbc50aef715.png"}}]);