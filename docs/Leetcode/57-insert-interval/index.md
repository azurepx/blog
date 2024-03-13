---
title: 57. Insert Interval
tags: ['array', 'two pointers', 'stack', 'interval']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/merge-intervals/)

<!-- ![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br /> -->
![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br />
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

**Example 1:**

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

**Constraints:**
```
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
```

**Solutions**

```ts
// Method 1: Using stack
// Time Complexity: O(n)
// Space Complexity: O(1)
function insert(intervals: number[][], newInterval: number[]): number[][] {
  let p = 0;
  let length = intervals.length;
  while (p < length) {
    if (newInterval[0] <= intervals[p][0]) {
      let i = intervals.length;
      while (p < i) {
        intervals[i] = intervals[i - 1];
        i--;
      }
      intervals[p] = newInterval;
      break;
    }
    p++;
  }

  if (length === intervals.length) intervals.push(newInterval);

  return merge(intervals);
};

const merge = (intervals: number[][]): number[][] => {
  let res = [];

  for (let i = 0; i < intervals.length; i++) {
    if (i === 0) {
      res.push(intervals[i]);
      continue;
    }

    let top = res[res.length - 1];
    if (top[1] < intervals[i][0]) {
      res.push(intervals[i]);
    } else {
      top[1] = Math.max(top[1], intervals[i][1]);
    }
  }

  return res;
}
```

```ts
// Method 2: Using two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let res = [];
  let i = 0;
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  res.push(newInterval);

  while (i < intervals.length) {
    res.push(intervals[i]);
    i++;
  }

  return res;
};
```