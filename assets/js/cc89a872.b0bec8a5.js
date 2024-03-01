"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6212],{1310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(5893),r=n(1151);const i={title:"205. Isomorphic Strings",tags:["string","hash table"]},o=void 0,c={id:"Leetcode/isomorphic-strings/index",title:"205. Isomorphic Strings",description:"Problem on Leetcode",source:"@site/docs/Leetcode/205-isomorphic-strings/index.md",sourceDirName:"Leetcode/205-isomorphic-strings",slug:"/Leetcode/isomorphic-strings/",permalink:"/docs/Leetcode/isomorphic-strings/",draft:!1,unlisted:!1,tags:[{label:"string",permalink:"/docs/tags/string"},{label:"hash table",permalink:"/docs/tags/hash-table"}],version:"current",lastUpdatedAt:1709279375,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{title:"205. Isomorphic Strings",tags:["string","hash table"]},sidebar:"tutorialSidebar",previous:{title:"202. Happy Number",permalink:"/docs/Leetcode/happy-number/"},next:{title:"219. Contains Duplicate II",permalink:"/docs/Leetcode/contains-duplicate-II/"}},a={},l=[];function d(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://leetcode.com/problems/isomorphic-strings/",children:(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Leetcode-FFA116",alt:"Problem on Leetcode"})})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{src:"https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg",alt:"easy"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(t.p,{children:"Given two strings s and t, determine if they are isomorphic."}),"\n",(0,s.jsx)(t.p,{children:"Two strings s and t are isomorphic if the characters in s can be replaced to get t."}),"\n",(0,s.jsx)(t.p,{children:"All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Input: s = "egg", t = "add"\nOutput: true\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Input: s = "foo", t = "bar"\nOutput: false\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Input: s = "paper", t = "title"\nOutput: true\n'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Constraints:"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"1 <= s.length <= 5 * 104\nt.length == s.length\ns and t consist of any valid ascii character.\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Solutions"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Method 1: using hash table\nvar isIsomorphic = function(s, t) {\n  const s2t = new Map;\n  const t2s = new Map;\n  for (let i = 0; i < s.length; i++) {\n    const [x, y] = [s[i], t[i]];\n    if ((s2t.has(x) && s2t.get(x) !== y) || (t2s.has(y) && t2s.get(y) !== x)) {\n      return false;\n    }\n    s2t.set(x, y);\n    t2s.set(y, x);\n  }\n  return true;\n};\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// Method 2: using array\nvar isIsomorphic = function(s, t) {\n  const s2t = new Array(256).fill(-1);\n  const t2s = new Array(256).fill(-1);\n  for (let i = 0; i < s.length; i++) {\n    const [x, y] = [s.charCodeAt(i), t.charCodeAt(i)];\n    if (s2t[x] !== t2s[y]) {\n      return false;\n    }\n    s2t[x] = i;\n    t2s[y] = i;\n  }\n  return true;\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(7294);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);