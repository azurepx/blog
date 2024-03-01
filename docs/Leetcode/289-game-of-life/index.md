---
title: 289. Game of Life
tags: ['array', 'matrix']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/game-of-life/)

<!-- ![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br /> -->
![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br />
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an `m x n` grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

1. Any live cell with fewer than two live neighbors dies as if caused by under-population.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by over-population.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

**Example 1:**

![alt text](image.png)
```
Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
```

**Example 2:**

![alt text](image-1.png)
```
Input: board = [[1,1],[1,0]]
Output: [[1,1],[1,1]]
```

**Constraints:**
```
m == board.length
n == board[i].length
1 <= m, n <= 25
board[i][j] is 0 or 1.
```

**Follow up:**

```
Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?
```

**Solutions**

```ts
/**
 * Method 1: Using extra space
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 * 
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const [m, n] = [board.length, board[0].length];
  let copy = new Array(m).fill(0).map(() => new Array(n).fill(0));

  // update the new states to copy
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      copy[i][j] = newState(i, j, board);
    }
  }

  // update the new states from copy to board
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = copy[i][j];
    }
  }
};

type State = 0 | 1; // dead or live
const newState = (i: number, j: number, board: number[][]): State => {
  const state = board[i][j];
  let lives = 0;
  let [firstI, firstJ, lastI, lastJ] = [i - 1 >= 0? i - 1: i, j - 1 >= 0? j - 1: j, i + 1 < board.length? i + 1: i, j + 1 < board[i].length? j + 1: j];

  for (let k = firstI; k <= lastI; k++) {
    for (let l = firstJ; l <= lastJ; l++) {
      if (k === i && l === j) continue;
      if (board[k][l] === 1) lives++;
    }
  }

  const whenLives = (state === 1) && (lives === 2 || lives === 3);
  const whenDeads = (state === 0) && (lives === 3);

  return whenLives || whenDeads ? 1: 0;
}
```

```ts
/**
 * Method 2: Avoid using extra space
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * 
 * Do not return anything, modify board in-place instead.
 */

function gameOfLife(board: number[][]): void {
  const [m, n] = [board.length, board[0].length];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = newState(i, j, board);
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = board[i][j] % 2;
    }
  }
};

// dead -> dead | live -> live | live -> dead | dead -> live
type State = 0 | 1 | 2 | 3; 
const newState = (i: number, j: number, board: number[][]): State => {
  const state = board[i][j];
  let liveNeighbors = 0;
  let [firstI, firstJ, lastI, lastJ] = [i - 1 >= 0? i - 1: i, j - 1 >= 0? j - 1: j, i + 1 < board.length? i + 1: i, j + 1 < board[i].length? j + 1: j];

  for (let k = firstI; k <= lastI; k++) {
    for (let l = firstJ; l <= lastJ; l++) {
      if (k === i && l === j) continue;
      if (board[k][l] === 1 || board[k][l] === 2) liveNeighbors++;
    }
  }

  if (state === 1) {
    return (liveNeighbors === 2 || liveNeighbors === 3)? 1: 2;
  }
  if (state === 0) {
    return (liveNeighbors === 3) ? 3: 0;
  }
}
```