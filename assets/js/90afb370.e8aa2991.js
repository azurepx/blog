"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[780],{816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=t(5893),r=t(1151);const o={title:"1. Two Sum"},i=void 0,c={id:"Leetcode/two-sum/index",title:"1. Two Sum",description:"easy",source:"@site/docs/Leetcode/1-two-sum/index.md",sourceDirName:"Leetcode/1-two-sum",slug:"/Leetcode/two-sum/",permalink:"/docs/Leetcode/two-sum/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1707033190,formattedLastUpdatedAt:"Feb 4, 2024",frontMatter:{title:"1. Two Sum"},sidebar:"tutorialSidebar",previous:{title:"Leetcode",permalink:"/docs/Leetcode/"}},u={},a=[];function d(e){const n={code:"code",em:"em",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/Difficulty-Easy-brightgreen.svg",alt:"easy"})}),"\n",(0,s.jsxs)(n.p,{children:["Given an array of integers ",(0,s.jsx)(n.code,{children:"nums"})," and an integer ",(0,s.jsx)(n.code,{children:"target"}),", return indices of the two numbers such that they add up to ",(0,s.jsx)(n.code,{children:"target"}),".\nYou may assume that each input would have ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"exactly one solution"})}),", and you may not use the same element twice.\nYou can return the answer in any order."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nExplanation: Because nums[0] + nums[1] == 9, we return [0, 1].\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [3,2,4], target = 6\nOutput: [1,2]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: nums = [3,3], target = 6\nOutput: [0,1]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"2 <= nums.length <= 104\n-109 <= nums[i] <= 109\n-109 <= target <= 109\nOnly one valid answer exists.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solutions"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Method 1: brute force\n// Time Complexity: O(n^2)\n// Space Complexity: O(1)\n// will not be using this method\n\nfunction twoSum(nums: number[], target: number): number[] {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) {\n        return [i, j];\n      }\n    }\n  }\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Method 2: using a map\n// Time Complexity: O(n)\n// Space Complexity: O(n)\nfunction twoSum(nums: number[], target: number): number[] {\n  const map = new Map;\n\n  for (let i = 0; i < nums.length; i++) {\n    if (map.has(nums[i])) {\n      return [map.get(nums[i]), i];\n    } else {\n      map.set(target - nums[i], i);\n    }\n  }\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);