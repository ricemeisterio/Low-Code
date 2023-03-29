"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62638],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||n;return o?a.createElement(g,i(i({ref:t},p),{},{components:o})):a.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},14033:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(87462),r=(o(67294),o(3905));const n={slug:"2023-day8",title:"8. Serverless Low Code",authors:["matt","daniel"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","onboarding","power platform","connectors","custom connectors","azure logic apps"],image:"https://microsoft.github.io/Low-Code/img/og/30-08.png",description:"Let's explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps.",tags:["low-code-february","30-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform","logic-apps","azure-logic-apps","azure-functions","power-automate"]},i=void 0,s={permalink:"/Low-Code/blog/2023-day8",source:"@site/blog/2023-lcf/2023-02-08/01 - LogicApps.md",title:"8. Serverless Low Code",description:"Let's explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps.",date:"2023-02-08T00:00:00.000Z",formattedDate:"February 8, 2023",tags:[{label:"low-code-february",permalink:"/Low-Code/blog/tags/low-code-february"},{label:"30-days-of-lowcode",permalink:"/Low-Code/blog/tags/30-days-of-lowcode"},{label:"learn-live",permalink:"/Low-Code/blog/tags/learn-live"},{label:"zero-to-hero",permalink:"/Low-Code/blog/tags/zero-to-hero"},{label:"ask-the-expert",permalink:"/Low-Code/blog/tags/ask-the-expert"},{label:"fusion-teams",permalink:"/Low-Code/blog/tags/fusion-teams"},{label:"power-platform",permalink:"/Low-Code/blog/tags/power-platform"},{label:"logic-apps",permalink:"/Low-Code/blog/tags/logic-apps"},{label:"azure-logic-apps",permalink:"/Low-Code/blog/tags/azure-logic-apps"},{label:"azure-functions",permalink:"/Low-Code/blog/tags/azure-functions"},{label:"power-automate",permalink:"/Low-Code/blog/tags/power-automate"}],readingTime:8.49,hasTruncateMarker:!1,authors:[{name:"Matt Soucoup",title:".NET Advocacy Lead",url:"https://github.com/codemillmatt",imageURL:"https://github.com/codemillmatt.png",key:"matt"},{name:"Daniel Laskewitz",title:"Senior Cloud Advocate",url:"https://github.com/Laskewitz",imageURL:"https://github.com/Laskewitz.png",key:"daniel"}],frontMatter:{slug:"2023-day8",title:"8. Serverless Low Code",authors:["matt","daniel"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["low code","developer tools","onboarding","power platform","connectors","custom connectors","azure logic apps"],image:"https://microsoft.github.io/Low-Code/img/og/30-08.png",description:"Let's explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps.",tags:["low-code-february","30-days-of-lowcode","learn-live","zero-to-hero","ask-the-expert","fusion-teams","power-platform","logic-apps","azure-logic-apps","azure-functions","power-automate"]},prevItem:{title:"9a. Build a Custom Connector",permalink:"/Low-Code/blog/2023-day9-build"},nextItem:{title:"7. Dataverse - Do more with Data, for less!",permalink:"/Low-Code/blog/2023-day7"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Serverless and Low Code?",id:"serverless-and-low-code",level:2},{value:"Azure Logic Apps overview",id:"azure-logic-apps-overview",level:2},{value:"Building a Logic App",id:"building-a-logic-app",level:2},{value:"Connecting to other services",id:"connecting-to-other-services",level:3},{value:"Kicking off the logic",id:"kicking-off-the-logic",level:3},{value:"Performing actions",id:"performing-actions",level:3},{value:"Controlling actions",id:"controlling-actions",level:3},{value:"Logic Apps compared to Power Automate",id:"logic-apps-compared-to-power-automate",level:2},{value:"UI",id:"ui",level:3},{value:"Connectors",id:"connectors",level:3},{value:"Logic Apps only connectors",id:"logic-apps-only-connectors",level:4},{value:"Power Automate only connectors",id:"power-automate-only-connectors",level:4},{value:"Licensing",id:"licensing",level:3},{value:"Power Automate",id:"power-automate",level:4},{value:"Logic Apps Consumption &amp; Logic Apps Standard",id:"logic-apps-consumption--logic-apps-standard",level:4},{value:"Built-In VNET",id:"built-in-vnet",level:3},{value:"Resources",id:"resources",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://microsoft.github.io/Low-Code/blog/2023-day8"}),(0,r.kt)("meta",{name:"twitter:title",content:"8. Serverless Low Code"}),(0,r.kt)("meta",{name:"twitter:description",content:"Let's explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps."}),(0,r.kt)("meta",{name:"twitter:image",content:"https://microsoft.github.io/Low-Code/img/og/30-08.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@codemillmatt"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureAdvocates"}),(0,r.kt)("link",{rel:"canonical",href:"https://microsoft.github.io/Low-Code/blog/2023-day8"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Day 8")," of #30DaysOfLowCode!"),(0,r.kt)("p",null,"The theme for this week is Integrations. Yesterday we talked about Low Code + Dataverse. Today we'll explore the topic of serverless low code and piecing together a workflow with Azure Logic Apps."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Serverless and Low Code?"),(0,r.kt)("li",{parentName:"ul"},"Azure Logic Apps overview"),(0,r.kt)("li",{parentName:"ul"},"Let's build a Logic App"),(0,r.kt)("li",{parentName:"ul"},"Logic Apps compared to Power Automate"),(0,r.kt)("li",{parentName:"ul"},"Resources")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Low Code and Serverless",src:o(22215).Z,width:"1001",height:"420"})),(0,r.kt)("h2",{id:"serverless-and-low-code"},"Serverless and Low Code?"),(0,r.kt)("p",null,"Are you sitting down? Because I'm about to tell you that there's something out there that combines the best of serverless computing with low code development. And that's ... Azure Logic Apps."),(0,r.kt)("p",null,"Serverless computing lets you worry less about the underlying infrastructure your code is running on and concentrate more on the code itself."),(0,r.kt)("p",null,"A benefit of serverless computing is that you don't write huge applications, instead you write small functions that do one specific task. For example, respond to an HTTP request. Or process a message from a queue."),(0,r.kt)("p",null,"Then within that function, you write code that deals with the task. Any logic, or connections to other services - that's pretty much on you to write code for."),(0,r.kt)("p",null,"Azure Logic Apps brings the Low Code world to serverless computing. You still solve a problem in a concise of a manner as possible with a Logic App - and the Logic App is started by some sort of event. But instead of writing code, you use a visual designer to piece together a workflow."),(0,r.kt)("h2",{id:"azure-logic-apps-overview"},"Azure Logic Apps overview"),(0,r.kt)("p",null,"At its heart, Azure Logic Apps automates the execution of business processes by using a visual designer to create workflows."),(0,r.kt)("p",null,"But what sets Logic Apps apart, are its pre-made components."),(0,r.kt)("p",null,"When you're creating a Logic App, you arrange pre-made components into a sequence - or a workflow. These components are designed to communicate with external services. So you can specify - all in a visual designer - what event should trigger a workflow to start and then what actions should occur."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A diagram showing the step you&#39;ll take when building a logic app.",src:o(8942).Z,width:"550",height:"125"})),(0,r.kt)("p",null,"As I mentioned, there are literally hundreds of external services (or components) you can connect your Logic App to. And the beauty of it is, the Logic Apps runtime takes care of managing the connections to the services. You don't have to worry about writing code to establish connections or check connectivity - Logic Apps has your back."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A graphic showing various 3rd party services a logic app can connect to.",src:o(52310).Z,width:"348",height:"374"})),(0,r.kt)("p",null,"Building a Logic App is the process of building a workflow using the components to solve your business problem. Each component will have different triggers that will start a workflow, and different actions that it can take when a workflow is running. How you use them is up to you."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A diagram showing an example Logic App workflow that detects the sentiment of a tweet.",src:o(5170).Z,width:"460",height:"258"})),(0,r.kt)("h2",{id:"building-a-logic-app"},"Building a Logic App"),(0,r.kt)("p",null,"We're not going to create a Logic App from front to back, step-by-step, in this article. That's really worth it's own article and we have some ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/logic-apps/quickstart-create-first-logic-app-workflow?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou"},"documentation")," that will take you through that process."),(0,r.kt)("p",null,"Rather I want to concentrate on the major pieces and decision points that you'll make when creating a Logic App."),(0,r.kt)("h3",{id:"connecting-to-other-services"},"Connecting to other services"),(0,r.kt)("p",null,"Now let's pause for a second to talk about all of these services that you can connect your Logic Apps workflow to. A ",(0,r.kt)("em",{parentName:"p"},"connector")," is a component that provides an interface to an external service. For example, the Twitter connector allows you to send and retrieve tweets, while the Office 365 Outlook connector lets you manage your email, calendar, and contacts."),(0,r.kt)("p",null,"There are literally hundreds of connectors from Microsoft and 3rd party vendors that you can use to build your workflows with."),(0,r.kt)("p",null,"A connector uses the external service's REST API to do its work. When you use the connector in your Logic App workflow, the connector calls the service's underlying API for you."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A diagram of how a connector works",src:o(6845).Z,width:"302",height:"151"})),(0,r.kt)("p",null,"If you can't find a connector that suits your needs? You can build one yourself! It's called a custom connector, and this ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/connectors/custom-connectors/?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou"},"series")," of ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/connectors/custom-connectors/create-logic-apps-connector?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou"},"articles")," will show you how to make your REST API into a connector!"),(0,r.kt)("h3",{id:"kicking-off-the-logic"},"Kicking off the logic"),(0,r.kt)("p",null,"The very first decision you'll need to make when creating a Logic App is to decide what type of event, or ",(0,r.kt)("em",{parentName:"p"},"trigger")," will start the workflow running. The trigger specifies the condition to meet before any actions defined in the Logic App execute. Each time the trigger fires, the Logic Apps runtime creates and runs the workflow instance."),(0,r.kt)("p",null,"There are a ton of different triggers you can choose from. A workflow can be started with events as varied as a new email arriving to a new message arriving in an Azure Storage queue."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot showing the 2 different triggers for an Azure Storage Queue",src:o(61317).Z,width:"975",height:"348"})),(0,r.kt)("h3",{id:"performing-actions"},"Performing actions"),(0,r.kt)("p",null,"If a trigger kicks off a workflow, then an action performs a specific task while the workflow is running."),(0,r.kt)("p",null,"A connector can be composed of many actions and triggers. For example, the Dropbox connector has triggers to monitor for when a file is created or modified. And it has actions to create a file, list files in a folder, and so on."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram showing the Dropbox connector triggers and actions",src:o(45667).Z,width:"283",height:"150"})),(0,r.kt)("p",null,"You string together actions, after the triggering event, to perform the business logic of your Logic App. But what if your logic had branches or conditions in it?"),(0,r.kt)("h3",{id:"controlling-actions"},"Controlling actions"),(0,r.kt)("p",null,"A control action routes the execution within a workflow based on conditions."),(0,r.kt)("p",null,"Consider the Azure DevOps connector's Build Complete trigger kicking off a workflow. If the build status is ",(0,r.kt)("em",{parentName:"p"},"failed"),", then a text message could be sent using the Azure Communication Service's connector. Otherwise if the build status is successful, a message could be posted to a chat in Microsoft Teams using its connector."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"if")," statement is a conditional action. There are others controlling actions such as ",(0,r.kt)("em",{parentName:"p"},"switch")," statements, ",(0,r.kt)("em",{parentName:"p"},"for each")," and ",(0,r.kt)("em",{parentName:"p"},"until")," loops."),(0,r.kt)("h2",{id:"logic-apps-compared-to-power-automate"},"Logic Apps compared to Power Automate"),(0,r.kt)("p",null,"Now, you may be thinking to yourself - Logic Apps sound a lot like Power Automate. And you're not wrong, they're both workflow-based services that work with connectors to other services."),(0,r.kt)("p",null,"In fact, Power Automate is built upon Azure Logic Apps!"),(0,r.kt)("h3",{id:"ui"},"UI"),(0,r.kt)("p",null,"They both have a user-friendly design surface to create your workflow on quickly. The difference is that Logic Apps allows you to build a bit more complex integration solutions and utilize advanced development tooling like Visual Studio or VS Code. Logic Apps has a recently refreshed designer, whereas Power Automate still uses the previous designer and is only accessible via the Power Automate portal."),(0,r.kt)("h3",{id:"connectors"},"Connectors"),(0,r.kt)("p",null,"On the connectors level, there are some differences. To make it a bit more clear for you, I have split the connectors section up in two parts:"),(0,r.kt)("h4",{id:"logic-apps-only-connectors"},"Logic Apps only connectors"),(0,r.kt)("p",null,"Logic Apps has the following connectors that are only available for Logic Apps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Azure Functions"),(0,r.kt)("li",{parentName:"ul"},"IBM 3270/MQ Series"),(0,r.kt)("li",{parentName:"ul"},"SAP"),(0,r.kt)("li",{parentName:"ul"},"Data Transformation"),(0,r.kt)("li",{parentName:"ul"},"Inline Code")),(0,r.kt)("p",null,"Logic Apps offers a bunch of rich integrations with enterprise systems like IBM 3270 & MQ. Logic Apps also has a fairly advanced SAP connector which supports RFC, BAPI & IDOC actions. It also receives messages from SAP, which the SAP ERP connector from Power Automate can't. Next to the enterprise system connectors, it also offers extra features like Azure Functions integration, Data Transformation & Inline Code."),(0,r.kt)("h4",{id:"power-automate-only-connectors"},"Power Automate only connectors"),(0,r.kt)("p",null,"Power Automate also has connectors that are only available for Power Automate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AI Builder"),(0,r.kt)("li",{parentName:"ul"},"Approvals"),(0,r.kt)("li",{parentName:"ul"},"Desktop flows"),(0,r.kt)("li",{parentName:"ul"},"Power Apps"),(0,r.kt)("li",{parentName:"ul"},"Power Virtual Agents"),(0,r.kt)("li",{parentName:"ul"},"SAP ERP")),(0,r.kt)("p",null,"Power Automate offers rich integration with Power Platform products like AI Builder, Approvals, Desktop flows (Robotic Process Automation aka RPA), Power Apps & Power Virtual Agents. It also has a SAP ERP connector which supports RFCs and BAPIs. It also has  ",(0,r.kt)("a",{parentName:"p",href:"https://powerautomate.microsoft.com/blog/announcing-deeper-sap-integration-for-the-power-platform/?WT.mc_id=dotnet-82212-masoucou"},"nice templates")," available that they have built since the ",(0,r.kt)("a",{parentName:"p",href:"https://cloudblogs.microsoft.com/powerplatform/2021/10/22/microsoft-acquires-clear-software-to-enhance-connectivity-to-systems-of-record/?WT.mc_id=dotnet-82212-masoucou"},"Clear Software acquisition"),"."),(0,r.kt)("h3",{id:"licensing"},"Licensing"),(0,r.kt)("p",null,"The licensing model is also different, I've listed the characteristics below:"),(0,r.kt)("h4",{id:"power-automate"},"Power Automate"),(0,r.kt)("p",null,"Power Automate is licensed on a per-user, per-flow or Pay-as-you-Go basis."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The per user model is the all you can eat model for Power Automate. You can create & use as much flows as you want, as long as your Dataverse storage is big enough & you haven't reached your ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-platform/admin/api-request-limits-allocations#licensed-user-request-limits?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou"},"service limits"),". It has a version with and without attended Robotic Process Automation (RPA)."),(0,r.kt)("li",{parentName:"ul"},"The per flow model is a model that gives you the possibility to let an unlimited number of people within your organization run a flow."),(0,r.kt)("li",{parentName:"ul"},"The pay-as-you-go model has been introduced not too long ago, and this is where you pay per flow run.")),(0,r.kt)("h4",{id:"logic-apps-consumption--logic-apps-standard"},"Logic Apps Consumption & Logic Apps Standard"),(0,r.kt)("p",null,"There are two types of Logic Apps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logic Apps Consumption"),(0,r.kt)("li",{parentName:"ul"},"Logic Apps Standard")),(0,r.kt)("p",null,"Logic Apps Consumption is the type of Logic App that has been around for a while and it's the type of Logic App that Power Automate is based on. You pay per execution. And on top of that, you can pay a fixed fee for an Integration Services Environment. A Logic App can contain only one workflow."),(0,r.kt)("p",null,"Logic Apps Standard is a different type of Logic App. You pay a static monthly charge instead of per execution. With Logic Apps Standard, you can have multiple stateful and stateless workflows. You can also host Logic Apps Standard yourself, for instance in a Docker container."),(0,r.kt)("h3",{id:"built-in-vnet"},"Built-In VNET"),(0,r.kt)("p",null,"Logic Apps also has built-in Virtual Network (VNET) configuration included. This is something that Power Automate doesn't offer."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Take a ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-logic-apps/?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou"},"self-paced training course")," on Azure Logic Apps!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/logic-apps/?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou"},"Azure Logic Apps documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/power-automate/getting-started?WT.mc_id=dotnet-82212-masoucou&WT.mc_id=dotnet-82522-masoucou"},"Power Automate documentation"))))}u.isMDXComponent=!0},8942:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/1-app-design-process-daffd04c3d64d44da004944e1f2d6187.png"},52310:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/2-external-services-3518a433503d4dac0f573862a24790ae.png"},5170:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/3-service-use-fed0a45f8b260eed0c10644e310711e5.png"},61317:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/5-queue-triggers-c095c63d4c20c23d5c29c9fea5e8d43e.png"},6845:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/6-connector-b8f6a75f1348446f2a386e749fa599eb.png"},45667:(e,t,o)=>{o.d(t,{Z:()=>a});const a="data:image/png;base64,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"},22215:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/30-08-64a7d9f8b3fbde070e36f4f86222aa36.png"}}]);