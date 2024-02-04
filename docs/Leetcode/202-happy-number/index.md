---
title: 202. Happy Number
tags: ['math', 'hashmap']
---

[![Problem on Leetcode](https://img.shields.io/badge/leetcode-sign)](https://leetcode.com/problems/happy-number/)

![easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen.svg)
<!-- ![medium](https://img.shields.io/badge/Difficulty-Medium-yellow.svg) -->
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-red.svg) -->

Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.



**Example 1:**

```
Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

**Example 2:**
```
Input: n = 2
Output: false
```

**Constraints:**
```
1 <= n <= 231 - 1
```

**Solutions**

```ts
// Method 1: recursive
// Time Complexity: O(log n)
// Space Complexity: O(log n)
function isHappy(n: number): boolean {
  return n <= 4? n === 1: isHappy(sumOfSquaresDigits(n));
};

const sumOfSquaresDigits = (n: number): number => {
  let sum = 0;

  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }

  return sum;
}
```