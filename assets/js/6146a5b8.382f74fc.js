"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5120],{7630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(5893),s=t(1151);const i={title:"56. Merge Intervals",tags:["array","two pointers","stack","interval"]},a=void 0,l={id:"Leetcode/merge-intervals/index",title:"56. Merge Intervals",description:"Problem on Leetcode",source:"@site/docs/Leetcode/56-merge-intervals/index.md",sourceDirName:"Leetcode/56-merge-intervals",slug:"/Leetcode/merge-intervals/",permalink:"/docs/Leetcode/merge-intervals/",draft:!1,unlisted:!1,tags:[{label:"array",permalink:"/docs/tags/array"},{label:"two pointers",permalink:"/docs/tags/two-pointers"},{label:"stack",permalink:"/docs/tags/stack"},{label:"interval",permalink:"/docs/tags/interval"}],version:"current",lastUpdatedAt:1711686728,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{title:"56. Merge Intervals",tags:["array","two pointers","stack","interval"]},sidebar:"tutorialSidebar",previous:{title:"54. Spiral Matrix",permalink:"/docs/Leetcode/spiral-matrix/"},next:{title:"57. Insert Interval",permalink:"/docs/Leetcode/insert-interval/"}},o={},c=[];function d(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/merge-intervals/",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Leetcode-FFA116",alt:"Problem on Leetcode"})})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg",alt:"medium"}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(n.p,{children:["Given an array of intervals where ",(0,r.jsx)(n.code,{children:"intervals[i] = [starti, endi]"}),", merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]\nExplanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Input: intervals = [[1,4],[4,5]]\nOutput: [[1,5]]\nExplanation: Intervals [1,4] and [4,5] are considered overlapping.\n\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"1 <= intervals.length <= 104\nintervals[i].length == 2\n0 <= starti <= endi <= 104\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Solutions"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Method 1: Using two pointers\n// Time Complexity: O(nlogn)\n// Space Complexity: O(1)\nfunction merge(intervals: number[][]): number[][] {\n  intervals.sort((a, b) => a[0] - b[0]);\n\n  let i = 0;\n  for (let j = 1; j < intervals.length; j++) {\n    if (intervals[i][1] >= intervals[j][0]) {\n      intervals[i][1] = Math.max(intervals[i][1], intervals[j][1]);\n    } else {\n      i++;\n      intervals[i] = intervals[j];\n    }\n  }\n\n  return intervals.slice(0, i + 1);\n};\n\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Method 2: Using stack\n// Time Complexity: O(nlogn)\n// Space Complexity: O(n)\n\nfunction merge(intervals: number[][]): number[][] {\n  // O(nlogn)\n  intervals.sort((a, b) => a[0] - b[0]);  \n\n  let res = [];\n\n  // O(n)\n  for (let i = 0; i < intervals.length; i++) {\n    if (i == 0) {\n      res.push(intervals[i]);\n      continue;\n    }\n    const top = res[res.length - 1];\n    if (top[1] < intervals[i][0]) {\n      res.push(intervals[i]);\n    } else {\n      top[1] = Math.max(top[1], intervals[i][1]);\n    }\n  }\n\n  return res;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);