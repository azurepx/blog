"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2904],{8104:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(5893),s=r(1151);const i={title:"125. Valid Palindrome",tags:["string","two pointers","regular expression"]},a=void 0,o={id:"Leetcode/valid-palindrome/index",title:"125. Valid Palindrome",description:"Problem on Leetcode",source:"@site/docs/Leetcode/125-valid-palindrome/index.md",sourceDirName:"Leetcode/125-valid-palindrome",slug:"/Leetcode/valid-palindrome/",permalink:"/docs/Leetcode/valid-palindrome/",draft:!1,unlisted:!1,tags:[{label:"string",permalink:"/docs/tags/string"},{label:"two pointers",permalink:"/docs/tags/two-pointers"},{label:"regular expression",permalink:"/docs/tags/regular-expression"}],version:"current",lastUpdatedAt:1709279375,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{title:"125. Valid Palindrome",tags:["string","two pointers","regular expression"]},sidebar:"tutorialSidebar",previous:{title:"73. Set Matrix Zeroes",permalink:"/docs/Leetcode/set-matrix-zeroes/"},next:{title:"128. Longest Consecutive Sequence",permalink:"/docs/Leetcode/longest-consecutive-sequence/"}},c={},l=[];function d(e){const n={a:"a",code:"code",em:"em",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://leetcode.com/problems/valid-palindrome/",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Leetcode-FFA116",alt:"Problem on Leetcode"})})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg",alt:"easy"}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.p,{children:"A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Example 1:"}),"*"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "A man, a plan, a canal: Panama"\nOutput: true\nExplanation: "amanaplanacanalpanama" is a palindrome.\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = "race a car"\nOutput: false\nExplanation: "raceacar" is not a palindrome.\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Input: s = " "\nOutput: true\nExplanation: s is an empty string "" after removing non-alphanumeric characters.\nSince an empty string reads the same forward and backward, it is a palindrome.\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1 <= s.length <= 2 * 105\ns consists only of printable ASCII characters.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Solutions"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Method 1: string manipulation\n// Time complexity: O(n)\n// Space complexity: O(n)\nfunction isPalindrome(s: string): boolean {\n  const processedString = s.split('')\n                         .map(c => c.toLowerCase())\n                         .filter(c => isAlphanumberic(c))\n                         .join('');\n  const reversedString = processedString.split('').reverse().join('');\n  return processedString === reversedString;\n};\n\nconst isAlphanumberic = (c: string): boolean => {\n  const charCode = c.charCodeAt(0);\n  return charCode >= 97 && charCode <= 122 ||\n        charCode >= 48 && charCode <= 57;\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Method 2: two pointers\n// Time complexity: O(n)\n// Space complexity: O(1)\nfunction isPalindrome(s: string): boolean {\n  let [left, right] = [0, s.length - 1];\n  while (left < right) {\n    while (!isAlphanumberic(s[left]) && left < right) left++;\n    while (!isAlphanumberic(s[right]) && left < right) right--;\n\n    if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false;\n  }\n\n  return true;\n};\n\nconst isAlphanumberic = (c: string): boolean => {\n  const code = c.charCodeAt(0);\n  return code >= 97 && code <= 122 || \n          code >= 48 && code <= 57 ||\n          code >= 65 && code <= 90;\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// Method 3: using regular expression\n// Time complexity: O(n)\n// Space complexity: O(1)\nfunction isPalindrome(s: string): boolean {\n  const processedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  const reversedString = processedString.split('').reverse().join('');\n  return processedString === reversedString;\n};\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var t=r(7294);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);