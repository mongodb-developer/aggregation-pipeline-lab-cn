"use strict";(self.webpackChunkaggregation_pipeline_workshop=self.webpackChunkaggregation_pipeline_workshop||[]).push([[882],{3941:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=o(4848),i=o(8453);const s={},r="\ud83e\uddb8 \u4fdd\u5b58\u5230\u96c6\u5408",c={id:"exporting-data/saving-to-collection",title:"\ud83e\uddb8 \u4fdd\u5b58\u5230\u96c6\u5408",description:"\u4f60\u53ef\u4ee5\u5c06\u805a\u5408\u7ba1\u9053\u7684\u7ed3\u679c\u5bfc\u51fa\u5230\u4e0d\u540c\u7684\u6570\u636e\u5e93/\u96c6\u5408\u3002\u4e3a\u6b64\uff0c\u53ea\u9700\u5728\u7ba1\u9053\u7684\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a\u805a\u5408\u9636\u6bb5\uff1a",source:"@site/docs/90-exporting-data/saving-to-collection.mdx",sourceDirName:"90-exporting-data",slug:"/exporting-data/saving-to-collection",permalink:"/aggregation-pipeline-lab-cn/docs/exporting-data/saving-to-collection",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/aggregation-pipeline-lab-cn/blob/main/docs/90-exporting-data/saving-to-collection.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5bfc\u51fa\u6570\u636e",permalink:"/aggregation-pipeline-lab-cn/docs/category/\u5bfc\u51fa\u6570\u636e"},next:{title:"\ud83d\udcd8 \u8bb2\u5ea7\u6750\u6599",permalink:"/aggregation-pipeline-lab-cn/docs/lecture-material"}},a={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-\u4fdd\u5b58\u5230\u96c6\u5408",children:"\ud83e\uddb8 \u4fdd\u5b58\u5230\u96c6\u5408"}),"\n",(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5c06\u805a\u5408\u7ba1\u9053\u7684\u7ed3\u679c\u5bfc\u51fa\u5230\u4e0d\u540c\u7684\u6570\u636e\u5e93/\u96c6\u5408\u3002\u4e3a\u6b64\uff0c\u53ea\u9700\u5728\u7ba1\u9053\u7684\u6700\u540e\u6dfb\u52a0\u4e00\u4e2a\u805a\u5408\u9636\u6bb5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{ $out: { db: "<output-db>", coll: "<output-collection>" } }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u7701\u7565",(0,t.jsx)(n.code,{children:"db"}),"\u5c5e\u6027\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\u65b0\u96c6\u5408\u5c06\u521b\u5efa\u5728\u5f53\u524d\u6570\u636e\u5e93\u4e2d\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'{ $out: "<output-collection>" }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\ud83d\udc50 \u521b\u5efa\u4e00\u672c\u6b63\u597d\u6709100\u9875\u7684\u4e66\u7684\u526f\u672c\uff0c\u5e76\u8f93\u51fa\u4e3a\u4e00\u4e2a\u540d\u4e3a",(0,t.jsx)(n.code,{children:"OneHundredPagesBooks"}),"\u7684\u65b0\u96c6\u5408\u3002"]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"\u7b54\u6848"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let oneHundredPagesBooks = {$match: {pages: 100}};\nlet saveToNewCollection = {$out: "OneHundredPagesBooks"}\n\ndb.books.aggregate([\n    oneHundredPagesBooks,\n    saveToNewCollection\n]);\n'})}),(0,t.jsx)(n.p,{children:"\u8fd0\u884c\u6b64\u4ee3\u7801\u540e\uff0c\u6211\u4eec\u5e94\u8be5\u770b\u5230\u4e00\u4e2a\u65b0\u96c6\u5408\uff1a"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"show collections\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(6540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);