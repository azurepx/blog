"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4033],{9461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var s=t(5893),i=t(1151);const r={title:"2. Add Two Numbers",tags:["Linked List","Math","Recursion"]},d=void 0,o={id:"Leetcode/add-two-numbers/index",title:"2. Add Two Numbers",description:"Problem on Leetcode",source:"@site/docs/Leetcode/2-add-two-numbers/index.md",sourceDirName:"Leetcode/2-add-two-numbers",slug:"/Leetcode/add-two-numbers/",permalink:"/docs/Leetcode/add-two-numbers/",draft:!1,unlisted:!1,tags:[{label:"Linked List",permalink:"/docs/tags/linked-list"},{label:"Math",permalink:"/docs/tags/math"},{label:"Recursion",permalink:"/docs/tags/recursion"}],version:"current",lastUpdatedAt:1711686030,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{title:"2. Add Two Numbers",tags:["Linked List","Math","Recursion"]},sidebar:"tutorialSidebar",previous:{title:"1. Two Sum",permalink:"/docs/Leetcode/two-sum/"},next:{title:"11. Container With Most Water",permalink:"/docs/Leetcode/container-with-most-water/"}},l={},a=[];function c(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/add-two-numbers/",children:(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/Leetcode-FFA116",alt:"Problem on Leetcode"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:"https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg",alt:"medium"}),(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.p,{children:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list."}),"\n",(0,s.jsx)(n.p,{children:"You may assume the two numbers do not contain any leading zero, except the number 0 itself."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"alt text",src:t(1199).Z+"",width:"483",height:"342"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: l1 = [0], l2 = [0]\nOutput: [0]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example 3:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\nOutput: [8,9,9,9,0,0,0,1]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- The number of nodes in each linked list is in the range [1, 100].\n- 0 <= Node.val <= 9\n- It is guaranteed that the list represents a number that does not have leading zeros.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Solutions"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Time complexity: O(n)\n// Space complexity: O(n)\n\n/**\n * Definition for singly-linked list.\n * class ListNode {\n *     val: number\n *     next: ListNode | null\n *     constructor(val?: number, next?: ListNode | null) {\n *         this.val = (val===undefined ? 0 : val)\n *         this.next = (next===undefined ? null : next)\n *     }\n * }\n */\n\nfunction addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {\n  // init\n  let head = new ListNode;\n  let [p, carried] = [head, 0];\n\n  while (l1 || l2 || carried) {\n    // process\n    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carried;\n    carried = sum >= 10 ? 1 : 0;\n    head.next = new ListNode(sum % 10);\n\n    // next node\n    if (l1) l1 = l1.next;\n    if (l2) l2 = l2.next;\n    head = head.next;\n  }\n  \n  return p.next;\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1199:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image-f68d385c154d6b52ae257b9996531980.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>d});var s=t(7294);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);