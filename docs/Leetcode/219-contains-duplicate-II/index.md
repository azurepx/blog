---
title: 219. Contains Duplicate II
tags: ['array', 'hash table', 'sliding window']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/contains-duplicate-ii/)

![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br />
<!-- ![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br /> -->
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.




**Example 1:**

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

**Example 2:**
```
Input: nums = [1,0,1,1], k = 1
Output: true

```

**Example 3:**
```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

**Constraints:**
```
1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
```

**Solutions**

```ts
// Method 1: using hash table
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map;

  for (let i = 0; i < nums.length; i++) {
    const j = map.get(nums[i]);
    if (map.has(nums[i]) && Math.abs(i - j) <= k) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }  

  return false;
};
```

```ts
// Method 2: sliding window
// Time Complexity: O(n)
// Space Complexity: O(k)
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set;

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }

  return false;
};
```

```ts
// Method 3: brute force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// will not be using this method
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j - i < k + 1; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }

  return false;
};
```