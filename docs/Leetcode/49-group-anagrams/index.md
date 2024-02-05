---
title: 49. Group Anagrams
tags: ['hash table', 'string', 'sorting']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/group-anagrams/)

<!-- ![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br /> -->
![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br />
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**
```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**
```
Input: strs = ["a"]
Output: [["a"]]
```

**Constraints:**
```
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
```

**Solutions**

```ts
// Method 1: using hash table
// Time Complexity: O(n * klogk)
// Space Complexity: O(n * k)
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map;
  
  for (let str of strs) { // O(n)
    const key = str.split('').sort().join(''); // O(klogk)
    map.set(key, map.has(key) ? map.get(key).concat(str): [str]);
  }   

  return [...map.values()];
};
```

```ts
// Method 2: using array of counters
// Time Complexity: O(n * k)
// Space Complexity: O(n * k)
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map;
  
  for (let str of strs) { // O(n)
    const counter = new Array(26).fill(0);
    for (let s of str) counter[s.charCodeAt(0) - 97]++; // O(k)
    const key = counter.toString();
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(str);
  }   

  return [...map.values()];
};
```
