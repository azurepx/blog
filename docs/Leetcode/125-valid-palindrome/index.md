---
title: 125. Valid Palindrome
tags: ['string', 'two pointers', 'regular expression']
---

[![Problem on Leetcode](https://img.shields.io/badge/Leetcode-FFA116)](https://leetcode.com/problems/valid-palindrome/)

![easy](https://img.shields.io/badge/Difficulty-Easy-5BCEFA.svg)<br />
<!-- ![medium](https://img.shields.io/badge/Difficulty-Medium-F5A9B8.svg)<br /> -->
<!-- ![hard](https://img.shields.io/badge/Difficulty-Hard-FFFFFF.svg)<br /> -->

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

 *Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**
```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**
```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints:**
```
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
```

**Solutions**

```ts
// Method 1: string manipulation
// Time complexity: O(n)
// Space complexity: O(n)
function isPalindrome(s: string): boolean {
  const processedString = s.split('')
                         .map(c => c.toLowerCase())
                         .filter(c => isAlphanumberic(c))
                         .join('');
  const reversedString = processedString.split('').reverse().join('');
  return processedString === reversedString;
};

const isAlphanumberic = (c: string): boolean => {
  const charCode = c.charCodeAt(0);
  return charCode >= 97 && charCode <= 122 ||
        charCode >= 48 && charCode <= 57;
}
```

```ts
// Method 2: two pointers
// Time complexity: O(n)
// Space complexity: O(1)
function isPalindrome(s: string): boolean {
  let [left, right] = [0, s.length - 1];
  while (left < right) {
    while (!isAlphanumberic(s[left]) && left < right) left++;
    while (!isAlphanumberic(s[right]) && left < right) right--;

    if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false;
  }

  return true;
};

const isAlphanumberic = (c: string): boolean => {
  const code = c.charCodeAt(0);
  return code >= 97 && code <= 122 || 
          code >= 48 && code <= 57 ||
          code >= 65 && code <= 90;
}
```

```ts
// Method 3: using regular expression
// Time complexity: O(n)
// Space complexity: O(1)
function isPalindrome(s: string): boolean {
  const processedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedString = processedString.split('').reverse().join('');
  return processedString === reversedString;
};
```