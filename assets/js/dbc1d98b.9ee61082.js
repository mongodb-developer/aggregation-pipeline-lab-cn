"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[54],{2384:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=r(4848),a=r(8453),s=r(9489),t=r(7227);const o={},c="\ud83d\udc50 $match",i={id:"simple-queries/match",title:"\ud83d\udc50 $match",description:"$match \u64cd\u4f5c\u7b26\u4e0e\u805a\u5408\u6846\u67b6\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u8fc7\u6ee4\u96c6\u5408\u4e2d\u7684\u6587\u6863\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u6587\u6863\u4f5c\u4e3a\u8f93\u5165\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u6587\u6863\uff0c\u4ec5\u5305\u542b\u7b26\u5408\u6307\u5b9a\u6761\u4ef6\u7684\u6587\u6863\u3002$match \u64cd\u4f5c\u7b26\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a",source:"@site/docs/30-simple-queries/2-match.mdx",sourceDirName:"30-simple-queries",slug:"/simple-queries/match",permalink:"/aggregation-pipeline-lab-cn/docs/simple-queries/match",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab-cn/blob/main/docs/30-simple-queries/2-match.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 \u7a7a\u805a\u5408\u7ba1\u9053",permalink:"/aggregation-pipeline-lab-cn/docs/simple-queries/empty-aggregation"},next:{title:"\ud83d\udc50 $project",permalink:"/aggregation-pipeline-lab-cn/docs/simple-queries/project"}},d={},u=[{value:"\u8868\u8fbe\u5f0f",id:"\u8868\u8fbe\u5f0f",level:2},{value:"\u5339\u914d\u4e66\u7c4d\u6587\u6863",id:"\u5339\u914d\u4e66\u7c4d\u6587\u6863",level:2},{value:"AND",id:"and",level:2},{value:"\u7b80\u5199 AND",id:"\u7b80\u5199-and",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:r,Screenshot:o}=n;return r||p("Details",!0),o||p("Screenshot",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"-match",children:"\ud83d\udc50 $match"}),"\n",(0,l.jsx)(n.p,{children:"$match \u64cd\u4f5c\u7b26\u4e0e\u805a\u5408\u6846\u67b6\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u8fc7\u6ee4\u96c6\u5408\u4e2d\u7684\u6587\u6863\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u6587\u6863\u4f5c\u4e3a\u8f93\u5165\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u6587\u6863\uff0c\u4ec5\u5305\u542b\u7b26\u5408\u6307\u5b9a\u6761\u4ef6\u7684\u6587\u6863\u3002$match \u64cd\u4f5c\u7b26\u7684\u8bed\u6cd5\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"{ $match: { <expression>: <value> } }\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8868\u8fbe\u5f0f",children:"\u8868\u8fbe\u5f0f"}),"\n",(0,l.jsxs)(n.p,{children:["$match \u64cd\u4f5c\u7b26\u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"<expression>"})," \u90e8\u5206\u53ef\u4ee5\u662f\u4efb\u4f55\u6709\u6548\u7684 MongoDB \u8868\u8fbe\u5f0f\u3002\u8fd9\u5305\u62ec\uff1a"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6bd4\u8f83\u64cd\u4f5c\u7b26\uff1a",(0,l.jsx)(n.code,{children:"eq"}),"\u3001",(0,l.jsx)(n.code,{children:"neq"}),"\u3001",(0,l.jsx)(n.code,{children:"gte"}),"\u3001",(0,l.jsx)(n.code,{children:"lte"}),"\u3001",(0,l.jsx)(n.code,{children:"gt"}),"\u3001",(0,l.jsx)(n.code,{children:"lt"}),"\u3001",(0,l.jsx)(n.code,{children:"in"}),"\u3001",(0,l.jsx)(n.code,{children:"nin"}),"\u3001",(0,l.jsx)(n.code,{children:"exists"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a",(0,l.jsx)(n.code,{children:"regex"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u903b\u8f91\u64cd\u4f5c\u7b26\uff1a",(0,l.jsx)(n.code,{children:"and"}),"\u3001",(0,l.jsx)(n.code,{children:"or"}),"\u3001",(0,l.jsx)(n.code,{children:"not"})]}),"\n",(0,l.jsxs)(n.li,{children:["\u5b50\u6587\u6863\u548c\u6570\u7ec4\uff1a",(0,l.jsx)(n.code,{children:"{ field: <value> }, [ <item>, <item>, ... ]"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5339\u914d\u4e66\u7c4d\u6587\u6863",children:"\u5339\u914d\u4e66\u7c4d\u6587\u6863"}),"\n",(0,l.jsxs)(s.A,{groupId:"aggregations-year",children:[(0,l.jsxs)(t.A,{value:"atlas",label:"Atlas UI",children:[(0,l.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u786e\u4fdd\u5728 Atlas UI \u4e2d\u9009\u62e9 ",(0,l.jsx)(n.code,{children:"books"})," \u96c6\u5408\u3002"]}),(0,l.jsx)(o,{src:"/img/30-simple-queries/select-books-collection.png",url:"http://cloud.mongodb.com/",alt:"Atlas UI \u6570\u636e\u5e93\u90e8\u7f72\uff0c\u7a81\u51fa\u663e\u793a books \u96c6\u5408\u3002"}),(0,l.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5bfc\u822a\u5230 ",(0,l.jsx)(n.code,{children:"Aggregation"})," \u9009\u9879\u5361\u5e76\u70b9\u51fb ",(0,l.jsx)(n.code,{children:"Add Stage"}),"\u3002"]}),(0,l.jsx)(o,{src:"/img/30-simple-queries/new-aggregation.png",url:"http://cloud.mongodb.com/",alt:"Atlas UI \u6570\u636e\u5e93\u90e8\u7f72\uff0c\u7a81\u51fa\u663e\u793a\u805a\u5408\u9009\u9879\u5361\u3002"}),(0,l.jsxs)(n.p,{children:["\u5047\u8bbe\u6211\u4eec\u60f3\u8981\u6240\u6709 2010 \u5e74\u7684\u4e66\u7c4d\u3002\u6211\u4eec\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a ",(0,l.jsx)(n.code,{children:"$match"})," \u9636\u6bb5\u6765\u8fc7\u6ee4 books \u96c6\u5408\u4e2d\u7684\u6587\u6863\uff1a"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"[\n    {\n        $match: { year: 2010 }\n    }\n]\n"})}),(0,l.jsx)(o,{src:"/img/30-simple-queries/match-screenshot.png",url:"http://cloud.mongodb.com/",alt:"Atlas AI $match \u805a\u5408\u3002"})]}),(0,l.jsxs)(t.A,{value:"mongodb-shell",label:"MongoDB Shell",children:[(0,l.jsx)(n.p,{children:"\u5047\u8bbe\u6211\u4eec\u60f3\u8981\u6240\u6709 2010 \u5e74\u7684\u4e66\u7c4d\u3002\u6211\u4eec\u4f1a\u5199\uff1a"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"db.books.aggregate([{$match: {year: 2010}}])\n"})})]})]}),"\n",(0,l.jsxs)(n.p,{children:["\ud83d\udc50 \u8fd4\u56de\u6240\u6709\u6709\u6070\u597d 100 \u9875\u7684 ",(0,l.jsx)(n.code,{children:"books"}),"\u3002"]}),"\n",(0,l.jsxs)(r,{children:[(0,l.jsx)("summary",{children:"\u7b54\u6848"}),(0,l.jsx)("div",{children:(0,l.jsxs)(s.A,{groupId:"aggregations-pages",children:[(0,l.jsx)(t.A,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"[\n    {\n        $match: { pages: 100 }\n    }\n]\n"})})}),(0,l.jsx)(t.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"db.books.aggregate([{$match: {pages: 100}}])\n"})})})]})})]}),"\n",(0,l.jsx)(n.h2,{id:"and",children:"AND"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u9700\u8981\u4f7f\u7528 AND \u6dfb\u52a0\u66f4\u591a\u6761\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"$and"})," \u64cd\u4f5c\u7b26\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u6211\u4eec\u60f3\u8981\u6240\u6709\u6709 100 \u9875\u5e76\u4e14 ",(0,l.jsx)(n.code,{children:"totalInventory"})," \u6070\u597d\u4e3a 2 \u7684\u4e66\u7c4d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"$and"})," \u64cd\u4f5c\u7b26\u3002\u8fd9\u4e2a\u64cd\u4f5c\u7b26\u63a5\u53d7\u4e00\u4e2a\u5305\u542b\u6240\u6709\u6761\u4ef6\u7684\u6587\u6863\u6570\u7ec4\uff0c\u8fd9\u4e9b\u6761\u4ef6\u90fd\u5fc5\u987b\u4e3a\u771f\uff0cAND \u64cd\u4f5c\u624d\u4f1a\u6210\u529f\uff1a"]}),"\n",(0,l.jsxs)(s.A,{groupId:"aggregations-and",children:[(0,l.jsx)(t.A,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { totalInventory: 2 }\n            ]\n        }\n    }\n]\n"})})}),(0,l.jsx)(t.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {totalInventory: 2}]}}])\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"\u4f2a\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"IF pages == 100 AND totalInventory == 2 {\nreturn matching docs\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\ud83d\udc50 \u8fd4\u56de\u6240\u6709 2015 \u5e74\u7684 ",(0,l.jsx)(n.code,{children:"books"}),"\uff0c\u8fd9\u4e9b\u4e66\u7c4d\u6070\u597d\u6709 100 \u9875\u3002"]}),"\n",(0,l.jsxs)(r,{children:[(0,l.jsx)("summary",{children:"\u7b54\u6848"}),(0,l.jsx)("div",{children:(0,l.jsxs)(s.A,{groupId:"aggregations",children:[(0,l.jsx)(t.A,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { year: 2015 }\n            ]\n        }\n    }\n]\n"})})}),(0,l.jsx)(t.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {year: 2015}]}}])\n"})})})]})})]}),"\n",(0,l.jsx)(n.p,{children:"\ud83d\udc50 \u5b83\u4eec\u6709\u591a\u5c11\uff1f"}),"\n",(0,l.jsxs)(r,{children:[(0,l.jsx)("summary",{children:"\u7b54\u6848"}),(0,l.jsx)("div",{children:(0,l.jsxs)(s.A,{groupId:"aggregations",children:[(0,l.jsx)(t.A,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:'[\n    {\n        $match: {\n            $and: [\n                { pages: 100 },\n                { year: 2015 }\n            ]\n        }\n    },\n    {\n        $count: "books_count"\n    }\n]\n'})})}),(0,l.jsx)(t.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {$and: [{pages: 100}, {year: 2015}]}}]).itcount()\n"})})})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"\u7b80\u5199-and",children:"\u7b80\u5199 AND"}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012\u5305\u542b\u6240\u6709\u6761\u4ef6\u7684\u6587\u6863\u6765\u8fdb\u884c\u9690\u5f0f AND\uff08\u800c\u4e0d\u662f\u6587\u6863\u6570\u7ec4\uff09\uff1a"}),"\n",(0,l.jsxs)(s.A,{groupId:"aggregations-shorthand-and",children:[(0,l.jsx)(t.A,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {pages: 100, totalInventory: 2}\n    }\n]\n"})})}),(0,l.jsx)(t.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100, totalInventory: 2}}])\n"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["\ud83d\udc50 \u4f7f\u7528\u7b80\u5355\u7684 $and \u8bed\u6cd5\u8fd4\u56de\u6240\u6709 2015 \u5e74\u7684 ",(0,l.jsx)(n.code,{children:"books"}),"\uff0c\u8fd9\u4e9b\u4e66\u7c4d\u6070\u597d\u6709 100 \u9875"]}),"\n",(0,l.jsxs)(r,{children:[(0,l.jsx)("summary",{children:"\u7b54\u6848"}),(0,l.jsx)("div",{children:(0,l.jsxs)(s.A,{groupId:"aggregations-shorthand-and-exercise",children:[(0,l.jsx)(t.A,{value:"atlas",label:"Atlas UI",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"[\n    {\n        $match: {pages: 100, year: 2015}\n    }\n]\n"})})}),(0,l.jsx)(t.A,{value:"mongodb-shell",label:"MongoDB Shell",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"db.books.aggregate([{$match: {pages: 100, year: 2015}}])\n"})})})]})})]})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7227:(e,n,r)=>{r.d(n,{A:()=>t});r(6540);var l=r(8215);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function t(e){let{children:n,hidden:r,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,t),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>y});var l=r(6540),a=r(8215),s=r(4245),t=r(6347),o=r(6494),c=r(2814),i=r(5167),d=r(1269);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:a}}=e;return{value:n,label:r,attributes:l,default:a}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const a=(0,t.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(s),(0,l.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[t,c]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:s}))),[i,u]=p({queryString:r,groupId:a}),[x,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,l.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),j=(()=>{const e=i??x;return g({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:t,selectValue:(0,l.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=r(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(4848);function v(e){let{className:n,block:r,selectedValue:l,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),a=o[r].value;a!==l&&(i(n),t(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function A(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(f,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,b.jsx)(A,{...e,children:u(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var l=r(6540);const a={},s=l.createContext(a);function t(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);