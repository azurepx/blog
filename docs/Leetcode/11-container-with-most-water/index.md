---
title: 11. Container With Most Water
tags: ['array', 'two pointers']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/container-with-most-water/)

<!-- ![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br /> -->
![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br />
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

**Example 1:**

![Example 1](./question_11_example1.jpeg)
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

**Example 2:**
```
Input: height = [1,1]
Output: 1
```


**Constraints:**
```
n == height.length
2 <= n <= 105
0 <= height[i] <= 104
```

**Solutions**

```ts
// Method 1: Two pointers
// Time complexity: O(n)
// Space complexity: O(1)
function maxArea(height: number[]): number {
  let max = 0;
  let [left, right] = [0, height.length - 1];

  while(left < right) {
    max = Math.max(max,
      (right - left) * Math.min(height[left], height[right])) ;
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }    

  return max;
};
```