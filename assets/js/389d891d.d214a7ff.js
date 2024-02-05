"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7714],{7569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(5893),s=t(1151);const a={title:"242. Valid Anagram",tags:["array","string","sorting","hash table"]},i=void 0,o={id:"Leetcode/valid-anagram/index",title:"242. Valid Anagram",description:"Problem on Leetcode",source:"@site/docs/Leetcode/242-valid-anagram/index.md",sourceDirName:"Leetcode/242-valid-anagram",slug:"/Leetcode/valid-anagram/",permalink:"/docs/Leetcode/valid-anagram/",draft:!1,unlisted:!1,tags:[{label:"array",permalink:"/docs/tags/array"},{label:"string",permalink:"/docs/tags/string"},{label:"sorting",permalink:"/docs/tags/sorting"},{label:"hash table",permalink:"/docs/tags/hash-table"}],version:"current",lastUpdatedAt:1707124429,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"242. Valid Anagram",tags:["array","string","sorting","hash table"]},sidebar:"tutorialSidebar",previous:{title:"219. Contains Duplicate II",permalink:"/docs/Leetcode/contains-duplicate-II/"}},c={},l=[];function d(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://leetcode.com/problems/valid-anagram/",children:(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Leetcode-FFA116",alt:"Problem on Leetcode"})})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{src:"https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg",alt:"easy"}),(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.p,{children:"Given two strings s and t, return true if t is an anagram of s, and false otherwise."}),"\n",(0,r.jsxs)(n.p,{children:["An ",(0,r.jsx)(n.strong,{children:"Anagram"})," is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: s = "anagram", t = "nagaram"\nOutput: true\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Input: s = "rat", t = "car"\nOutput: false\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"1 <= s.length, t.length <= 5 * 104\ns and t consist of lowercase English letters.\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Solutions"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Method 1: using sorting\n// Time Complexity: O(nlogn)\n// Space Complexity: O(1) if we assume the input string is ASCII 256 characters, otherwise O(n) \nfunction isAnagram(s: string, t: string): boolean {\n  const sortedS = s.split('').sort().join('');\n  const sortedT = t.split('').sort().join('');\n\n  return sortedS === sortedT;\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Method 2: using hash table\n// Time Complexity: O(n)\n// Space Complexity: O(n)\nfunction isAnagram(s: string, t: string): boolean {\n  const counter = new Map;\n  // count the frequency of each character in s\n  for (let c of s) {\n    counter.set(c, counter.has(c) ? counter.get(c) + 1: 1);\n  } \n\n  // decrement the frequency of each character in t\n  for (let c of t) {\n    if (counter.has(c)) {\n      counter.set(c, counter.get(c) - 1);\n      if (counter.get(c) === 0) counter.delete(c);\n    } else {\n      return false;\n    }\n  }\n\n  // if the counter is empty, then t is an anagram of s\n  return counter.size === 0;\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Method 3: using array\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nfunction isAnagram(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n\n  // count the frequency of each character in s and decrement the frequency of each character in t\n  const counter = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    counter[s.charCodeAt(i) - 97]++;\n    counter[t.charCodeAt(i) - 97]--;\n  }\n\n  // if the counter is empty, then t is an anagram of s\n  return counter.every(c => c === 0);\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// Method 4: prime numbers\n// Time Complexity: O(n)\n// Space Complexity: O(1)\nfunction isAnagram(s: string, t: string): boolean {\n  if (s.length !== t.length) return false;\n\n  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];\n  const MOD = (Math.pow(2,31) - 1);\n\n  let hashS = 1;\n  let hashT = 1;\n  for (let i = 0; i < s.length; i++) {\n    hashS = hashS * primes[s.charCodeAt(i) - 97] % MOD;\n    hashT = hashT * primes[t.charCodeAt(i) - 97] % MOD;\n  }\n\n  return hashS === hashT;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);