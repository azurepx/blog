---
title: 242. Valid Anagram
tags: ['array', 'string', 'sorting', 'hash table']
---

[![Problem on Leetcode](https://img.shields.io/badge/leetcode-sign)](https://leetcode.com/problems/valid-anagram/)

![easy](https://img.shields.io/badge/Difficulty-Easy-brightgreen.svg)
<!-- ![medium](https://img.shields.io/badge/Difficulty-Medium-yellow.svg) -->
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-red.svg) -->

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**
```
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**
```
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
```

**Solutions**

```ts
// Method 1: using sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1) if we assume the input string is ASCII 256 characters, otherwise O(n) 
function isAnagram(s: string, t: string): boolean {
  const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
};
```

```ts
// Method 2: using hash table
// Time Complexity: O(n)
// Space Complexity: O(n)
function isAnagram(s: string, t: string): boolean {
  const counter = new Map;
  // count the frequency of each character in s
  for (let c of s) {
    counter.set(c, counter.has(c) ? counter.get(c) + 1: 1);
  } 

  // decrement the frequency of each character in t
  for (let c of t) {
    if (counter.has(c)) {
      counter.set(c, counter.get(c) - 1);
      if (counter.get(c) === 0) counter.delete(c);
    } else {
      return false;
    }
  }

  // if the counter is empty, then t is an anagram of s
  return counter.size === 0;
};
```

```ts
// Method 3: using array
// Time Complexity: O(n)
// Space Complexity: O(1)
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // count the frequency of each character in s and decrement the frequency of each character in t
  const counter = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - 97]++;
    counter[t.charCodeAt(i) - 97]--;
  }

  // if the counter is empty, then t is an anagram of s
  return counter.every(c => c === 0);
};
```

```ts
// Method 4: prime numbers
// Time Complexity: O(n)
// Space Complexity: O(1)
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  const MOD = (Math.pow(2,31) - 1);

  let hashS = 1;
  let hashT = 1;
  for (let i = 0; i < s.length; i++) {
    hashS = hashS * primes[s.charCodeAt(i) - 97] % MOD;
    hashT = hashT * primes[t.charCodeAt(i) - 97] % MOD;
  }

  return hashS === hashT;
};
```