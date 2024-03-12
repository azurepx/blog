---
title: 228. Summary Ranges
tags: ['array', 'two pointers']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/summary-ranges/)

![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br />
<!-- ![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br /> -->
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range `[a,b]` in the list should be output as:

`"a->b"` if `a != b`
`"a"` if `a == b`



 *Example 1:**

```
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

**Example 2:**
```
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```

**Constraints:**
```
0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.
```

**Solutions**

```ts
// Method 1: Using two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
function summaryRanges(nums: number[]): string[] {
  let res = [];
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    if (nums[right + 1] === nums[right] + 1) {
      right++;
    } else {
      if (left === right) {
        res.push(`${nums[left]}`);
      } else {
        res.push(`${nums[left]}->${nums[right]}`);
      }
      left = right + 1;
      right = left;
    }
  }
  return res;
};
```

```ts
// Method 2
// Time Complexity: O(n)
// Space Complexity: O(1)
function summaryRanges(nums: number[]): string[] {
  let res = [];
  let sub = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sub = [nums[i], nums[i]];
      continue;
    }
    if (nums[i - 1] + 1 === nums[i]) {
      sub[1] = nums[i];
    } else {
      res.push(sub);
      sub = [nums[i], nums[i]];
    }
  }

  if (sub.length !== 0) res.push(sub);

  return res.map(([left, right]) => left !== right ? `${left}->${right}`: `${left}`);
};
```