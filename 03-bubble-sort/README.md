# Introduction to Sorting Algorithms

## Objectives

* Describe the difference between a stable and unstable sort
* Describe the difference between a comparison sort and a distribution sort
* Describe what an in-place sort is 
* Name a few common sorting algorithms and...
    * Describe the time complexity
    * Describe the space complexity
    * Tell whether it is a stable sort or not
    * Describe what kind of mechanism the algorithm uses to perform the sort (i.e., comparison, distribution, or hybrid)

## What is a sorting algorithm?

A sorting algorithm takes an unordered collection and gives you an ordered collection. Most commonly, this means numerical order or alphabetical order.

## How many sorting algorithms could there really be?

You'd be surprised. Even a quick glance at the [Big O cheatsheet](http://bigocheatsheet.com/) tells you about bubble sort, merge sort, quick sort, heap sort, radix sort, cube sort, bucket sort, shell sort, tree sort, insertion sort, selection sort, and counting sort. And those are just the more common ones! Check [wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm) for even more sorts.

## Can't you just tell me which one is the best and teach me that one?

Well, yes and no. While there are a few choice sorts you should get very familiar with, there isn't just one answer for which one is the "best" because different sorts are good at different things. Based on your needs for a specific situation, you may want to consider time complexity, space complexity, whether the sort is stable or not, and what kind of mechanism that the algorithm uses to sort.

## Sorting Types

The two basic types of sorts are comparison sorts and distribution sorts. 

A *comparison sort* is a sort that compares values to determine what their place is in the final list. An example of a comparison sort would be bubble sort, which compares two items and swaps them depending on the outcome of the comparison. Usually this comparison will be numerical or alphabetical order, but as you may have noted, you can define the comparison however you'd like.

`"A comparison sort is a type of sorting algorithm that only reads the list elements through a single abstract comparison operation (often a "less than or equal to" operator or a three-way comparison) that determines which of two elements should occur first in the final sorted list."`

- [Wikipedia](https://en.wikipedia.org/wiki/Comparison_sort)

A *distribution sort* is a sort that groups together certain items based on their properties. Examples of this include bucket sort or radix sort.

`"Distribution sort refers to any sorting algorithm where data are distributed from their input to multiple intermediate structures which are then gathered and placed on the output."`

- [Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm#Distribution_sort)

A combination of both of these methods may be used, and this would be known as a *hybrid sort*. An example would be Timsort, which combines merge sort, insertion sort, and other logic (including binary search).

## Stable vs. Non-Stable

![Stability](https://infogalactic.com/w/images/thumb/8/82/Sorting_stability_playing_cards.svg/300px-Sorting_stability_playing_cards.svg.png)

A stable sort preserves the ordering of "ties", meaning that if we started out with say a 5&hearts; in position 1 and a 5&spades; in position 3 (as above), then the 5&hearts; would be first and the 5&spades; would be second in our final result. Unstable sorts can mix up that ordering, such as in the bottom example where the 5&hearts; comes before the 5&spades; before the sort and comes after it in the sorted result.

## Time Complexity

People care a lot about the time complexity of sorting, to the point that they study the best, worst, and average time complexity of each algorithm. The important thing to consider is how many times the important operations are being run. We will learn a little bit about algorithm analysis and "Big-O" notation throughout the next challenges but suffice it to say (for now) that the fewer comparisons an algorithm makes, the more efficient it is. You can refer to the [Big O cheatsheet](http://bigocheatsheet.com/) for specifically how efficient each popular sorting algorithm is in different cases.

## Space Complexity

You may have heard people describe some sorts as "in-place" sorts. This means that instead of creating a whole new array to store our data, we can sort simply by moving things around in the existing array. Just like time complexity, we care about how much space our algorithm needs to operate, especially when working with huge datasets

## Okay, where's the cheatsheet?

| Sort | Best Case | Worst Case | Space | Stable | Mechanism | Notes |
| -----|-----------|------------|-------|--------|-----------|-------|
| Bubble Sort | Ω(n) | O(n<sup>2</sup>) | O(1) | Yes | Comparison | Easiest to understand; uses swaps |
| Selection Sort | Ω(n<sup>2</sup>) | O(n<sup>2</sup>) | O(1) | Yes | Comparison | - |
| Insertion Sort | Ω(n<sup>2</sup>) | O(n<sup>2</sup>) | O(n)* | Yes | Comparison | In-place version exists; Uses insertions |
| Bucket Sort | Ω(n+k) | O(n<sup>2</sup>) | O(n+k) | Yes | Distribution | - |
| Radix Sort | Ω(nk) | O(nk) | O(n+k) | Yes | Distribution | Variation of bucket sort; in place versions exist but are not stable | 
| Merge Sort | Ω(n log(n)) | O(n log(n)) | O(n)* | Yes | Comparison | Divide and conquer, uses merges, *in-place version exists |
| Quick Sort | Ω(n log(n)) | O(n log(n)) | O(log(n)) | No | Comparison | Stable versions exist; uses partitioning |
| Heap Sort | Ω(n log(n)) | O(n log(n)) | O(1) | No | Comparison | In-place, but not stable. Like improved selection sort |

#### Notes about table
* Many sorts such as merge sort or insertion sort have an in-place version of the algorithm, however, these solutions may be more complex to implement or have different time complexities than the basic algorithm
* Quick sort has stable implementations available, however the time and space complexity of this alteration of the algorithm is different.
* Quick sort performs worst on data sets with few unique values. An implementation called [Quick3](https://www.toptal.com/developers/sorting-algorithms/quick-sort-3-way) (because it has 3-way partitions instead of 2-way) solves this issue.

## Learning Sorts by Learning Bubble Sort

You may have heard of bubble sort. It has a bit of a reputation as one of the least efficient sorting algorithms. While not quite as bad as [Bogosort](https://en.wikipedia.org/wiki/Bogosort) and other similarly humorous algorithms, you'd never want to use it in real life. However, it is very nice for teaching sorting algorithms as it is very easy to understand.

## Characteristics

* Comparison Sort - compares values and swaps them
* In-place - makes swaps directly in the array that was passed in
* Stable - preserves original ordering of ties

### The Algorithm

You'll be writing this in JavaScript but like all of these algorithms, you could use any language and it would work the same. Though you could write it recursively, it is simple enough to write using nested loops. Here is how Bubble Sort works:

1. Get the length of the array
2. Iterate from 0 through the length of the array
3. On each outer iteration...
    1. Iterate through every element from 0 through the length minus the value of the outer iterator. The idea here is that every time the outer loop iterator increases, we have moved one element to its final sorted position. As such, we can shorten our inner loop by one each time the outer loop iterates.
    2. On each inner iteration...
        1. Compare the current element with the next element.
        2. Swap them if the current element is greater than the next element (you need a temporary variable to do this.)
4. Return the array in its new sorted state.

### Why is it so bad?

It's the nested loops that are the problem. Because of that structure, we end up with exponentially more comparisons than actual data. Specifically, the Big-O formula for bubble sort is O(n&sup2;) which means that if we give it 10 elements to sort, it will take 100 comparisons to get sorted. With 25 elements, it needs 625 comparisons. Not very efficient. We will see some better choices in the next challenges.

## Implement It!

Make sure you have pulled the latest changes from the class repo so that you have this exercise locally. Make sure to run `npm install` to get the necessary node modules, then open this directory up in your code editor. Use the files provided to write your code. There are a set of tests which you must make pass. Complete the functions with your solutions and then run the tests with this command:

```npm test```

There are 3 tests for the function. They must all pass to fully complete this challenge. You must not use any built-in sorting functions.

### Further Research Resources

You can find dozens of implementations of bubble sort on the internet. Make sure if you read through them that you are learning and not copying.

* [Bubble Sort illustrated with Hungarian Dance](https://www.youtube.com/watch?v=lyZQPjUT5B4)
* [Geeks For Geeks - Bubble Sort](https://www.geeksforgeeks.org/bubble-sort/)
