---
title: Most common sorting algorithms
slug: /algorithms/most-common-sorting-algorithms
---

## Introduction

A sorting algorithm is an algorithm that puts elements of a list in a certain order. The most-used orders are numerical order and lexicographical order. Efficient sorting is important for optimizing the efficiency of other algorithms (such as search and merge algorithms) that require input data to be in sorted lists.


## Most common sorting algorithms

| Algorithm      | Time complexity (average) | Time complexity (best) | Time complexity (worst) | Space complexity | Stable |
| -------------- | :-----------------------: | :--------------------: | :---------------------: | :--------------: | :----: |
| Bubble sort    |          O(n^2)           |          O(n)          |         O(n^2)          |       O(1)       |  Yes   |
| Selection sort |          O(n^2)           |         O(n^2)         |         O(n^2)          |       O(1)       |   No   |
| Insertion sort |          O(n^2)           |          O(n)          |         O(n^2)          |       O(1)       |  Yes   |
| Merge sort     |        O(n log n)         |       O(n log n)       |       O(n log n)        |       O(n)       |  Yes   |
| Quick sort     |        O(n log n)         |       O(n log n)       |         O(n^2)          |     O(log n)     |   No   |
| Heap sort      |        O(n log n)         |       O(n log n)       |       O(n log n)        |       O(1)       |   No   |
| Radix sort     |         O(n * k)          |        O(n * k)        |        O(n * k)         |     O(n + k)     |  Yes   |
| Bucket sort    |         O(n + k)          |        O(n + k)        |         O(n^2)          |     O(n + k)     |  Yes   |
| Counting sort  |         O(n + k)          |        O(n + k)        |        O(n + k)         |     O(n + k)     |  Yes   |


## Types of sorting algorithms

- **Comparison-based sorting algorithms**: These algorithms compare elements of the list to each other to determine their order. The comparison-based sorting algorithms are:
  - Bubble sort
  - Selection sort
  - Insertion sort
  - Merge sort
  - Quick sort
  - Heap sort

- **Non-comparison-based sorting algorithms**: These algorithms do not compare elements of the list to each other to determine their order. The non-comparison-based sorting algorithms are:
  - Counting sort
  - Radix sort
  - Bucket sort

## Characteristics of sorting algorithms

- **Time complexity**: The time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the input. It is commonly expressed using the big O notation.
- **Space complexity**: The space complexity of an algorithm quantifies the amount of memory used by an algorithm to run as a function of the length of the input. It is commonly expressed using the big O notation.
- **Stability**: A sorting algorithm is said to be stable if two objects with equal keys appear in the same order in sorted output as they appear in the input array to be sorted.
