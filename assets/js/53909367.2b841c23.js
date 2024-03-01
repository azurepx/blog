"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6735],{4032:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=t(5893),r=t(1151);const s={title:"73. Set Matrix Zeroes",tags:["array","matrix","set","in-place"]},a=void 0,o={id:"Leetcode/set-matrix-zeroes/index",title:"73. Set Matrix Zeroes",description:"Problem on Leetcode",source:"@site/docs/Leetcode/73-set-matrix-zeroes/index.md",sourceDirName:"Leetcode/73-set-matrix-zeroes",slug:"/Leetcode/set-matrix-zeroes/",permalink:"/docs/Leetcode/set-matrix-zeroes/",draft:!1,unlisted:!1,tags:[{label:"array",permalink:"/docs/tags/array"},{label:"matrix",permalink:"/docs/tags/matrix"},{label:"set",permalink:"/docs/tags/set"},{label:"in-place",permalink:"/docs/tags/in-place"}],version:"current",lastUpdatedAt:1709279375,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{title:"73. Set Matrix Zeroes",tags:["array","matrix","set","in-place"]},sidebar:"tutorialSidebar",previous:{title:"54. Spiral Matrix",permalink:"/docs/Leetcode/spiral-matrix/"},next:{title:"125. Valid Palindrome",permalink:"/docs/Leetcode/valid-palindrome/"}},l={},c=[];function d(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/set-matrix-zeroes/",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Leetcode-FFA116",alt:"Problem on Leetcode"})})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg",alt:"medium"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(n.p,{children:["Given an ",(0,i.jsx)(n.code,{children:"m x n"})," integer matrix matrix, if an element is 0, set its entire row and column to 0's."]}),"\n",(0,i.jsx)(n.p,{children:"You must do it in place."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(9746).Z+"",width:"641",height:"241"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]\nOutput: [[1,0,1],[0,0,0],[1,0,1]]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(7410).Z+"",width:"791",height:"241"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\nOutput: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"m == matrix.length\nn == matrix[0].length\n1 <= m, n <= 200\n-2^31 <= matrix[i][j] <= 2^31 - 1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Follow up:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"A straightforward solution using O(mn) space is probably a bad idea.\nA simple improvement uses O(m + n) space, but still not the best solution.\nCould you devise a constant space solution?\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Solutions"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Method 1: Using extra space\n// Time complexity: O(n^2)\n// Space complexity: O(n)\n\n/**\n * Do not return anything, modify matrix in-place instead.\n */\nfunction setZeroes(matrix: number[][]): void {\n  let rows = new Set<number>();\n  let cols = new Set<number>();\n  for (let i = 0; i < matrix.length; i++) {\n    for (let j = 0; j < matrix[i].length; j++) {\n      if (matrix[i][j] === 0) {\n        rows.add(i);\n        cols.add(j);\n      }\n    }\n  }\n\n  rows.forEach(row => {\n    for (let col in matrix[row]) {\n      matrix[row][col] = 0;\n    }\n  })\n\n  cols.forEach(col => {\n    for (let row in matrix) {\n      matrix[row][col] = 0;\n    }\n  })\n};\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Method 2: Using first row and first column as flags\n// Time complexity: O(n^2)\n// Space complexity: O(1)\n\n/**\n * Do not return anything, modify matrix in-place instead.\n */\nfunction setZeroes(matrix: number[][]): void {\n  let firstRowHasZero = false;\n  let firstColHasZero = false;\n\n  for (let i = 0; i < matrix.length; i++) {\n    for (let j = 0; j < matrix[i].length; j++) {\n      if (matrix[i][j] === 0) {\n        if (i === 0) firstRowHasZero = true;\n        if (j === 0) firstColHasZero = true;\n        matrix[i][0] = 0;\n        matrix[0][j] = 0;\n      }\n    }\n  }\n\n  for (let i = 1; i < matrix.length; i++) {\n    for (let j = 1; j < matrix[i].length; j++) {\n      if (matrix[i][0] === 0 || matrix[0][j] === 0) {\n        matrix[i][j] = 0;\n      }\n    }\n  }\n\n  if (firstRowHasZero) {\n    for (let j = 0; j < matrix[0].length; j++) {\n      matrix[0][j] = 0;\n    }\n  }\n\n  if (firstColHasZero) {\n    for (let i = 0; i < matrix.length; i++) {\n      matrix[i][0] = 0;\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"// Method 3: \n// Time complexity: O(n^2)\n// Space complexity: O(1)\n\n/**\n * Do not return anything, modify matrix in-place instead.\n */\nfunction setZeroes(matrix: number[][]): void {\n  let rows = new Set<number>();\n  let cols = new Set<number>();\n  for (let i = 0; i < matrix.length; i++) {\n    for (let j = 0; j < matrix[i].length; j++) {\n      if (matrix[i][j] === 0) {\n        rows.add(i);\n        cols.add(j);\n      }\n    }\n  }\n\n  for (let i = 0; i < matrix.length; i++) {\n    for (let j = 0; j < matrix[i].length; j++) {\n      if (rows.has(i) || cols.has(j)) {\n        matrix[i][j] = 0;\n      }\n    }\n  }\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7410:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-1-0820bca3ebfaf76ce35a0e0252b367e1.png"},9746:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-1fd400a421abd90a93de6228e9880583.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);