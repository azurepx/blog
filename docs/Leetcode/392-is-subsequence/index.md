---
title: 392. Is Subsequence
tags: ['string', 'two pointers']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/is-subsequence/)

![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br />
<!-- ![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br /> -->
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

**Example 1:**
```
Input: s = "abc", t = "ahbgdc"
Output: true
```

**Example 2:**
```
Input: s = "axc", t = "ahbgdc"
Output: false
```

**Constraints:**
```
0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
```

**Solutions**

```ts
// Method 1: using two pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
function isSubsequence(s: string, t: string): boolean {
  let p = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[p] === t[i]) p++;
  }   

  return p === s.length;
};
```