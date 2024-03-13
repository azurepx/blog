---
title: 452. Minimum Number of Arrows to Burst Balloons
tags: ['array', 'interval', 'stack', 'greedy']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

<!-- ![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br /> -->
![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br />
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

There are some spherical balloons taped onto a flat wall that represents the `XY-plane`. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact `y-coordinates` of the balloons.

Arrows can be shot up directly vertically (in the positive `y-direction`) from different points along the `x-axis`. A balloon with xstart and xend is burst by an arrow shot at x if `xstart <= x <= xend`. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

**Example 1:**

```
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
```

**Example 2:**

```
Input: points = [[1,2],[3,4],[5,6],[7,8]]
Output: 4
Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
```

**Example 3:**

```
Input: points = [[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: The balloons can be burst by 2 arrows:
- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].
```

**Constraints:**
```
1 <= points.length <= 105
points[i].length == 2
-231 <= xstart < xend <= 231 - 1
```

**Solutions**

```ts
// Method 1: Using stack
// Time Complexity: O(nlogn)
// Space Complexity: O(n);
function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);

  let list = [];
  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      list.push(points[i]);
      continue;
    }

    let top = list[list.length - 1];
    if (top[1] < points[i][0]) {
      list.push(points[i]);
    } else {
      top[0] = Math.max(top[0], points[i][0]);
      top[1] = Math.min(top[1], points[i][1]);
    }
  }
  
  return list.length;
};
```

```ts
// Method 2: greedy
// Time Complexity: O(nlogn)
// Space Complexity: O(1);
function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);

  let count = 1;
  let end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      count++;
      end = points[i][1];
    }
  }
  
  return count;
};
```