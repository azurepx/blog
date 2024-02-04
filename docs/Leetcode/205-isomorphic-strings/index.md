---
title: 205. Isomorphic Strings
tags: ['string', 'hash table']
---

[![Problem on Leetcode](https://img.shields.io/badge/leetcode-sign)](https://leetcode.com/problems/isomorphic-strings/)

![easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen.svg)
<!-- ![medium](https://img.shields.io/badge/Difficulty-Medium-yellow.svg) -->
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-red.svg) -->

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



**Example 1:**

```
Input: s = "egg", t = "add"
Output: true
```

**Example 2:**
```
Input: s = "foo", t = "bar"
Output: false
```

**Example 3:**
```
Input: s = "paper", t = "title"
Output: true
```

**Constraints:**
```
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
```

**Solutions**

```js
// Method 1: using hash table
var isIsomorphic = function(s, t) {
  const s2t = new Map;
  const t2s = new Map;
  for (let i = 0; i < s.length; i++) {
    const [x, y] = [s[i], t[i]];
    if ((s2t.has(x) && s2t.get(x) !== y) || (t2s.has(y) && t2s.get(y) !== x)) {
      return false;
    }
    s2t.set(x, y);
    t2s.set(y, x);
  }
  return true;
};
```

```js
// Method 2: using array
var isIsomorphic = function(s, t) {
  const s2t = new Array(256).fill(-1);
  const t2s = new Array(256).fill(-1);
  for (let i = 0; i < s.length; i++) {
    const [x, y] = [s.charCodeAt(i), t.charCodeAt(i)];
    if (s2t[x] !== t2s[y]) {
      return false;
    }
    s2t[x] = i;
    t2s[y] = i;
  }
  return true;
};
```