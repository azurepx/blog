---
title: 167. Two Sum II - Input array is sorted
tags: ['array', 'hash table', 'two pointers', 'binary search']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

<!-- ![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br /> -->
![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br />
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

**Example 1:**
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

**Example 2:**
```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

**Example 3:**
```
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

**Constraints:**
```
2 <= numbers.length <= 3 * 104
-1000 <= numbers[i] <= 1000
numbers is sorted in non-decreasing order.
-1000 <= target <= 1000
The tests are generated such that there is exactly one solution.
```

**Solutions**

```ts
// Method 1: hash table
// Time complexity: O(n)
// Space complexity: O(n)
function twoSum(numbers: number[], target: number): number[] {
  const map = new Map;
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(numbers[i])) {
      return [map.get(numbers[i]) + 1, i + 1];
    } else {
      map.set(target - numbers[i], i);
    }
  }   
};
```

```ts
// Method 2: two pointers
// Time complexity: O(n)
// Space complexity: O(1)
function twoSum(numbers: number[], target: number): number[] {
  let [left, right] = [0, numbers.length - 1];
  while (left < right) {
    while (numbers[left] + numbers[right] > target) right--;
    while (numbers[left] + numbers[right] < target) left++;
    if (numbers[left] + numbers[right] === target) break;
  }

  return [left + 1, right + 1];
};
```

```ts
// Method 3: binary search
// Time complexity: O(nlogn)
// Space complexity: O(1)
function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    let left = i + 1, right = numbers.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (numbers[mid] === target - numbers[i]) {
        return [i + 1, mid + 1];
      } else if (numbers[mid] < target - numbers[i]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
};
```