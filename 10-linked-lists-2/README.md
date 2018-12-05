# Linked Lists, part 2

Great! With those tests passing, you now have the beginnings of a solid linked list. Now we will add a bit more functionality.

As you probably realize, adding items onto the end of the list is a fairly simple operation. It is when we start changing things in the middle of the list that it gets a little complicated. Imagine a chain. What would we need to do to add a link in the middle of it? It would involve the breaking of certain links, the insertion of a new element, and then a reconnection of links to accomodate the new element.

You will be writing two methods that perform operations such as this.

* `delete(index)`: The delete function takes one parameter: an index of the item to delete. It need not return anything. Since the linked list maintains no collection of indices or any length, you must iterate over the list until you find the node that would be at the index provided. Also realize that each node only has knowledge of the next node, and nothing else in the list. If you delete a node, the reference it had to the next node will be gone. You will need to save that reference in a variable so that the previous node can be reconnected to it, preserving the continuity of the list. If the node to delete is the **head** node, you must reassign the **head** to the current second node. If the index is not in the list, simply return.
* `insert(data, index)`: The insert function takes two parameters: a data parameter and an index of where you want the new node with the new data inserted. It also need not return anything. The index provided should be the final position of the new node, meaning that if the index passed in is 0, the new inserted node will be inserted before the current **head** node, making it the new head node. If passed an index beyond the length of the list, simply add it at the end.

## Pseudocode

Let's walk through the logic for inserting and deleting:

### Deleting an element

1. Save the **next** pointer of the node you are going to delete.
2. If there is a previous node, connect it's **next** pointer to the node after the deleted one.
3. If the node to delete was the **head**, make sure to reassign the **head** property of the list to the node after the deleted one.
4. Set the deleted node's **data** and **next** properties to `null`.

There is no need to explicitly delete an object in JavaScript. The garbage collection system in the engine will reclaim the memory of any variable that has no references to it so removing all the references is all we need to do.

### Inserting an element

1. Find the node currently at the index of insertion and store a reference to it. Make sure to also keep track of the node before it, if present.
2. If there is a previous element, reassign it's **next** property to the node you are inserting.
3. Assign the node currently at the index of insertion to the new node's **next** property.
4. Make sure to update the list's **head** if necessary.

## Implement It!

Make sure you have pulled the latest changes from the class repo so that you have this exercise locally. Make sure to run `npm install` to get the necessary node modules, then open this directory up in your code editor.

Copy your completed `linkedlist.js` and `listnode.js` files from the previous project into this folder. Make sure not to change the file names or class names. Leave everything the same if it passed all the tests and simply add your two new methods to the `LinkedList` class.

There are a set of tests which you must make pass. Once your code is complete, run the tests with this command:

```npm test```

There are 9 total tests for the Linked List, including the tests from the previous challenge. They must all pass to fully complete this challenge.

## Submitting your work

Once the tests pass and you are satisfied with your code, delete your `node_modules` folder, do a `git add`, a `git commit`, and then push your work up to your `origin` and slack us the link to it.

### Further Research Resources

* [List List Data Structure on Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
* [Linked List on Geeks For Geeks](https://www.geeksforgeeks.org/data-structures/linked-list/)
