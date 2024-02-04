---
title: 202. Happy Number
tags: ['math', 'hash table', 'fast-slow-pointer']
---

[![Problem on Leetcode](https://img.shields.io/badge/leetcode-FFA116)](https://leetcode.com/problems/happy-number/)

![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br />
<!-- ![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br /> -->
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

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
  return n <= 4? n === 1: isHappy(bitSquareSum(n));
};

const bitSquareSum = (n: number): number => {
  let sum = 0;

  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }

  return sum;
}
```

```ts
// Method 2: using hash table
// Time Complexity: O(log n)
// Space Complexity: O(log n)
var isHappy = function(n) {
  const seen = new Set;

  while (n !== 1) {
    seen.add(n);
    n = bitSquareSum(n);
    if (seen.has(n)) return false;
  }

  return true;
};

const bitSquareSum = (n: number): number => {
  let sum = 0;

  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);   
  }

  return sum;
}
```

```ts
// Method 3: using fast-slow pointer
// Time Complexity: O(log n)
// Space Complexity: O(1)
var isHappy = function(n) {
  let slow = n;
  let fast = bitSquareSum(n);

  while (fast !== 1 && slow !== fast) {
    slow = bitSquareSum(slow);
    fast = bitSquareSum(bitSquareSum(fast));
  }

  return fast === 1;
};

const bitSquareSum = (n: number): number => {
  let sum = 0;

  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);   
  }

  return sum;
}
```