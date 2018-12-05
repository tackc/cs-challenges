# Quicksort

Another very popular fast sorting algorithm, Quicksort has an interesting way of choosing an arbitrary element, called the `pivot`, and then recursively grouping values less than the pivot to the left and values greater to its right. There are a few rules to this algorithm that make it a little challenging to understand but we will lay them all out very clearly.

Let's start by looking at the key players in this sort:

* **left**: A marker used for finding numbers higher than the pivot. It moves one element at a time from the leftmost position until it finds a value greater than or equal to the pivot value. If it ever reaches the rightmost edge of the array, it stops.

* **right**: A marker used for finding numbers less than the pivot. It moves one element at a time from the rightmost position until it finds a value less than the pivot. If it ever reaches the **left** marker, it stops.

* **pivot**: An initially randomly chosen element in the array. It's value is meant to be the point around which things swap: higher numbers go to the right while lower numbers go to the left. Basically, when the **right** and **left** find their values that are lower or higher than the pivot, respectively, those values are swapped. Though it can be chosen randomly, many basic implementations simply use the rightmost element as the initial pivot.

## Algorithm Analysis

Quicksort is another O(n log(n)) algorithm similar to Merge Sort. Normally, it outperforms similarly efficient sorts like merge sort and heapsort but there are rare cases when it can perform as poorly as a quadratic like bubble sort. Usually this has to do with the data being in the exactly perfect wrong order which causes the algorithm to work to its maximum or beyond. Interestingly, the exact wrong order for Quicksort that causes it to degrade to O(n<sup>2</sup>) is an array that is already sorted!

## Characteristics

* Comparison Sort - compares values and swaps them
* In-place - operates directly on the array argument
* Unstable - does not preserve original ordering of ties

## The Algorithm

Quicksort is a two-parter like merge sort. We have the actual `quicksort` function that someone would call to sort an array that they pass in as an argument. It operates a little like `binarySearch`: The first parameter is the array to be sorted, and the second and third parameters are where to start and where to stop for the sub-portion of the array on which this recursive step is operating. On the first invocation of `quicksort` you can use default values for these. The "left" marker will always start at 0 and the "right" should be set to the array's length - 1 if it isn't specified (if it is set to null).

1. First, we make sure that the "left" or "low" index is less than the "right" or "high" index. If that is true, we call a `partition` function that will return a new pivot index.
2. Then we call `quicksort` on the left half of the array (from "left" to "pivot") and also call `quicksort` on the right half (from "pivot + 1" to "right").
3. The `quicksort` function returns whenever the "left" index ends up greater than or equal to the "right" index. It doesn't need to return any value because the array has been sorted in place.

The `partition` function does the heavy lifting. This partition scheme is called Hoare's Partition Scheme and he is the person who invented quicksort. It takes the same parameters as quicksort: the array, the left index and the right index.

1. Get the value at array index "right" and store this as the pivot value.
2. Set `i` to be "left - 1" and set `j` to be "right + 1".
3. Now inside of an infinite loop, do the following:
    1. Increment `i` by 1 while the value in the array at that index is less than the pivot value.
    2. Decrement `j` by 1 while the value in the array at that index is greater than the pivot value.
    3. If `i` is greater than or equal to `j`, return `j` as the new pivot. (This return is what will end the infinite loop.) Else, swap the values in the array at indices `i` and `j`.

## Implement It!

Note: You can nest one function inside the other for easy exporting. I've set up the structure to do this already.

Make sure you have pulled the latest changes from the class repo so that you have this exercise locally. Make sure to run `npm install` to get the necessary node modules, then open this directory up in your code editor. Use the files provided to write your code. There are a set of tests which you must make pass. Complete the functions with your solutions and then run the tests with this command:

```npm test```

There are 3 tests for the function. They must all pass to fully complete this challenge. You must not use any built-in sorting functions.

### Further Research Resources

* [Quicksort Visualized with Hungarian Dance](https://www.youtube.com/watch?v=ywWBy6J5gz8)
* [Quicksort on Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
