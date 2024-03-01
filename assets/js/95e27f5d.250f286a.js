"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3111],{1007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(5893),r=t(1151);const a={title:"289. Game of Life",tags:["array","matrix"]},o=void 0,s={id:"Leetcode/game-of-life/index",title:"289. Game of Life",description:"Problem on Leetcode",source:"@site/docs/Leetcode/289-game-of-life/index.md",sourceDirName:"Leetcode/289-game-of-life",slug:"/Leetcode/game-of-life/",permalink:"/docs/Leetcode/game-of-life/",draft:!1,unlisted:!1,tags:[{label:"array",permalink:"/docs/tags/array"},{label:"matrix",permalink:"/docs/tags/matrix"}],version:"current",lastUpdatedAt:1709279375,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{title:"289. Game of Life",tags:["array","matrix"]},sidebar:"tutorialSidebar",previous:{title:"242. Valid Anagram",permalink:"/docs/Leetcode/valid-anagram/"},next:{title:"392. Is Subsequence",permalink:"/docs/Leetcode/is-subsequence/"}},l={},d=[];function c(e){const n={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://leetcode.com/problems/game-of-life/",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Leetcode-FFA116",alt:"Problem on Leetcode"})})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg",alt:"medium"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:'According to Wikipedia\'s article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."'}),"\n",(0,i.jsxs)(n.p,{children:["The board is made up of an ",(0,i.jsx)(n.code,{children:"m x n"})," grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Any live cell with fewer than two live neighbors dies as if caused by under-population."}),"\n",(0,i.jsx)(n.li,{children:"Any live cell with two or three live neighbors lives on to the next generation."}),"\n",(0,i.jsx)(n.li,{children:"Any live cell with more than three live neighbors dies, as if by over-population."}),"\n",(0,i.jsx)(n.li,{children:"Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(1077).Z+"",width:"562",height:"322"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\nOutput: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 2:"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(759).Z+"",width:"402",height:"162"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Input: board = [[1,1],[1,0]]\nOutput: [[1,1],[1,1]]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Constraints:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"m == board.length\nn == board[i].length\n1 <= m, n <= 25\nboard[i][j] is 0 or 1.\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Follow up:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.\nIn this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Solutions"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/**\n * Method 1: Using extra space\n * Time complexity: O(n^2)\n * Space complexity: O(n^2)\n * \n Do not return anything, modify board in-place instead.\n */\nfunction gameOfLife(board: number[][]): void {\n  const [m, n] = [board.length, board[0].length];\n  let copy = new Array(m).fill(0).map(() => new Array(n).fill(0));\n\n  // update the new states to copy\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      copy[i][j] = newState(i, j, board);\n    }\n  }\n\n  // update the new states from copy to board\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      board[i][j] = copy[i][j];\n    }\n  }\n};\n\ntype State = 0 | 1; // dead or live\nconst newState = (i: number, j: number, board: number[][]): State => {\n  const state = board[i][j];\n  let lives = 0;\n  let [firstI, firstJ, lastI, lastJ] = [i - 1 >= 0? i - 1: i, j - 1 >= 0? j - 1: j, i + 1 < board.length? i + 1: i, j + 1 < board[i].length? j + 1: j];\n\n  for (let k = firstI; k <= lastI; k++) {\n    for (let l = firstJ; l <= lastJ; l++) {\n      if (k === i && l === j) continue;\n      if (board[k][l] === 1) lives++;\n    }\n  }\n\n  const whenLives = (state === 1) && (lives === 2 || lives === 3);\n  const whenDeads = (state === 0) && (lives === 3);\n\n  return whenLives || whenDeads ? 1: 0;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/**\n * Method 2: Avoid using extra space\n * Time complexity: O(n^2)\n * Space complexity: O(1)\n * \n * Do not return anything, modify board in-place instead.\n */\n\nfunction gameOfLife(board: number[][]): void {\n  const [m, n] = [board.length, board[0].length];\n\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      board[i][j] = newState(i, j, board);\n    }\n  }\n\n  for (let i = 0; i < m; i++) {\n    for (let j = 0; j < n; j++) {\n      board[i][j] = board[i][j] % 2;\n    }\n  }\n};\n\n// dead -> dead | live -> live | live -> dead | dead -> live\ntype State = 0 | 1 | 2 | 3; \nconst newState = (i: number, j: number, board: number[][]): State => {\n  const state = board[i][j];\n  let liveNeighbors = 0;\n  let [firstI, firstJ, lastI, lastJ] = [i - 1 >= 0? i - 1: i, j - 1 >= 0? j - 1: j, i + 1 < board.length? i + 1: i, j + 1 < board[i].length? j + 1: j];\n\n  for (let k = firstI; k <= lastI; k++) {\n    for (let l = firstJ; l <= lastJ; l++) {\n      if (k === i && l === j) continue;\n      if (board[k][l] === 1 || board[k][l] === 2) liveNeighbors++;\n    }\n  }\n\n  if (state === 1) {\n    return (liveNeighbors === 2 || liveNeighbors === 3)? 1: 2;\n  }\n  if (state === 0) {\n    return (liveNeighbors === 3) ? 3: 0;\n  }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},759:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-1-9ca2ec9b79ac99b67f5d7016c86cdb69.png"},1077:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-e14006e3d20a25cd60ecdf5334146e64.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);