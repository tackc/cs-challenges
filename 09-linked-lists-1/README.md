# Linked Lists

You've done great with the data structures so far. Now it's time to take it up a notch. So far we've been building our data structures using arrays for data storage. Now we will be building one from scratch, making our own classes for the data elements as well as the overarching data structure.

The Linked List is an array-like data structure in which each data element is linked to the next:

```
  HEAD
    |
    V
--------    --------    --------    --------
| data |    | data |    | data |    | data |
|______|    |______|    |______|    |______|
| next |--->| next |--->| next |--->| next |---> null
|______|    |______|    |______|    |______|
```

Each element in the list is called a **ListNode** or just a **Node**. Every node contains two things:

* A data payload. Each element in your linked list will be stored in a node's data payload.
* A reference to the **next** node.

There are a few styles of linked lists but the most basic usually only maintains a reference or pointer to the first node, called the **head**. Some lists also maintain a **tail** pointer but in many cases the end of the list is found simply by iterating over each node until you find a **next** reference that points at `null`.

## Use Cases

Linked lists are widely used in computer science. Because they are dynamic data structures in which each element is newly instantiated in memory, they are great in native languages where memory management is more important than in web development. They are also used internally in other data structures such as hash maps. In JavaScript, the `Array` already has much of this functionality but, as computer scientists, we must understand how these data structures are created and how they function. They are also very common topics for interview questions.

## Implementation

In this first part of the lesson, you will be building the necessary classes and some basic functionality. You will expand it in the second part to add some more advanced functionality.

You will need two classes. A file has been provided for each.

* **ListNode**: This is the class for the node elements. It needs a **data** member variable and a **next** member variable. When an object is instantiated from this class, you should initially set the **next** pointer to `null` and the **data** variable to whatever value is passed into the constructor.
* **LinkedList**: This is the class for the list itself. It only needs one data member: a member variable named **head** that will initially point at `null` when the list is first created but will be set to the first node when one is added to the list.

In addition to the **head** property, the LinkedList class will need the following methods:

* `add()`: This function should take one parameter which is the data to add to the **end** of the list. It doesn't need to return anything. It should construct a new **node** with the data provided and add this node to the appropriate place in the list. If the **head** is `null` then you should set the **head** to point to the new node. If **head** is not `null` then you must iterate over the list until you find a **node** with its **next** property pointing at `null` and add the node there. It will always add the new **node** at the very end of the list.
* `print()`: This function should **return a string** of the values of the linked list separated by dashes. For example, if your list contains the values 5, 10, and 15, your `print()` function would return the string `5-10-15`. If your list is empty, have it return the string `empty`.

> NOTE: Printing values in this way is not a convention of linked lists. It is only to get a consistent format on which we can run automated tests.

Make sure you have pulled the latest changes from the class repo so that you have this exercise locally. Make sure to run `npm install` to get the necessary node modules, then open this directory up in your code editor. Use the files provided to write your code. There are a set of tests which you must make pass. Once your code is complete, run the tests with this command:

```npm test```

There are 5 tests for the Linked List. They must all pass to fully complete this challenge.

## Submitting your work

Once the tests pass and you are satisfied with your code, delete your `node_modules` folder, do a `git add`, a `git commit`, and then push your work up to your `origin` and slack us the link to it.

### Further Research Resources

* [List List Data Structure on Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
* [Linked List on Geeks For Geeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
