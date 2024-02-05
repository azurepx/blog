---
title: 128. Longest Consecutive Sequence
tags: ['array', 'hash table', 'sorting']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/longest-consecutive-sequence/)

<!-- ![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br /> -->
![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br />
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 *Example 1:**

```
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

**Example 2:**
```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
```

**Constraints:**
```
0 <= nums.length <= 105
-109 <= nums[i] <= 109
```

**Solutions**

```ts
// Method 1: 
// Time complexity: O(nlogn)
// Space complexity: O(1) 

function longestConsecutive(nums: number[]): number {
  if (nums.length <= 1) return nums.length;

  nums.sort((a, b) => a - b); // O(nlogn)

  let longestSeq = 1;
  let seq = 1; 
  for (let i = 1; i < nums.length; i++) { // O(n)
    if (nums[i] === nums[i - 1]) continue;
    if (nums[i] === nums[i - 1] + 1) {
      seq++;
      longestSeq = Math.max(longestSeq, seq);
    } else {
      seq = 1;
    }
  }

  return longestSeq;
};
```

```ts
// Method 2: using hash table
// Time complexity: O(n)
// Space complexity: O(n)
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let max = 0;
  [...set].forEach(num => {
    // find the start of the sequence
    if (!set.has(num - 1)) {
      let start = num;
      let counter = 1;

      // find the end of the sequence
      while(set.has(++start)) counter++;

      max = Math.max(max, counter);
    }
  }) 

  return max;
};
```

```ts
// Method 3: another hash table
// Time complexity: O(n)
// Space complexity: O(n)
function longestConsecutive(nums: number[]): number {
  const map = new Map;
  let max = 0;

  for (let num of nums) {
    if (!map.has(num)) {
      const left = map.get(num - 1) || 0;
      const right = map.get(num + 1) || 0;
      const sum = left + right + 1;
      map.set(num, sum);
      max = Math.max(max, sum);
      map.set(num - left, sum);
      map.set(num + right, sum);
    }
  }

  return max;
};
```