---
title: 56. Merge Intervals
tags: ['array', 'two pointers', 'stack']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/merge-intervals/)

<!-- ![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br /> -->
![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br />
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

Given an array of intervals where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



 *Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**
```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

```

**Constraints:**
```
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
```

**Solutions**

```ts
// Method 1: Using two pointers
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  for (let j = 1; j < intervals.length; j++) {
    if (intervals[i][1] >= intervals[j][0]) {
      intervals[i][1] = Math.max(intervals[i][1], intervals[j][1]);
    } else {
      i++;
      intervals[i] = intervals[j];
    }
  }

  return intervals.slice(0, i + 1);
};

```

```ts
// Method 2: Using stack
// Time Complexity: O(nlogn)
// Space Complexity: O(n)

function merge(intervals: number[][]): number[][] {
  // O(nlogn)
  intervals.sort((a, b) => a[0] - b[0]);  

  let res = [];

  // O(n)
  for (let i = 0; i < intervals.length; i++) {
    if (i == 0) {
      res.push(intervals[i]);
      continue;
    }
    const top = res[res.length - 1];
    if (top[1] < intervals[i][0]) {
      res.push(intervals[i]);
    } else {
      top[1] = Math.max(top[1], intervals[i][1]);
    }
  }

  return res;
};
```