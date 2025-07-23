/* eslint-disable no-magic-numbers */
import nodes from "./nodes.js";

export default function linkedList() {
    let head = null;

    /*
    note: remember to code for edge cases:
    1. when list is empty
    2. when list has only 1 node in it
    3. when list has 2 or more nodes in it
    */

    // adds new node to the end of the linked list
    function append(inputKey, inputValue) {
        // if the linkedlist is empty, add the node as the head (edge case 1)
        if (head === null) {
            head = nodes(inputValue, null, inputKey);
            return;
        }

        // (edge cases 2 and 3)
        // start at head of the linked list
        let curr = head;

        // traverse the linked list until it reaches the end, and stop on the last node
        while (curr.nextNode !== null) {
            // if the next node after the current one is null, then we know its the end of the list
            curr = curr.nextNode;
        }

        // add given node to the end of the list by making the previous last node point to the new last node
        curr.nextNode = nodes(inputValue, null, inputKey);
    }

    // adds a new node to the start of the linked list
    function prepend(inputKey, inputValue) {
        // if linkedlist is empty, add node as the head (edge case 1)
        if (head === null) {
            head = nodes(inputValue, null, inputKey);
            return;
        }

        // (edge cases 2 and 3)
        /* make two temporary variables, one for the head and one for the new node to insert, then assign the new node to point to the head node, 
        then make the new node the head. */
        const curr = head;
        const temp = nodes(inputValue, curr, inputKey);
        head = temp;
    }

    // return total number of nodes in the linked list
    function size() {
        // if linkedlist is empty (edge case 1), then return 0 nodes.
        if (head === null) {
            return 0;
        }

        // (edge cases 2 and 3)
        // iterate through linked list starting at head node. Increase counter for every non-null node found.
        let nodeCount = 0;
        let curr = head;
        while (curr !== null) {
            nodeCount += 1;
            curr = curr.nextNode;
        }

        return nodeCount;
    }

    // returns the first node in the linked list
    function getHead() {
        // if linkedlist is empty (edge case 1), then return an error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        // (edge case 2 and 3)
        // otherwise, just return the head variable since that contains the first node (start of the list)
        return head;
    }

    // returns the last node in the linked list
    function getTail() {
        // if linkedlist is empty is empty (edge case 1), then return an error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        // iterate to the last node and return the last node object.
        let curr = head;
        // if the current node's (curr) next node is null, we know its the last node
        while (curr.nextNode !== null) {
            curr = curr.nextNode;
        }

        return curr;
    }

    // returns the node at the given index (parameter)
    function at(inputIndex) {
        // assuming the linked list starts at 0 index
        // if linkedlist is empty (edge case 1), return an error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        // check if the index given exceeds 0 or size() - 1 (out of bounds)
        if (inputIndex < 0 || inputIndex > size() - 1) {
            return console.log(
                "Input Index given is out of range of linked list",
            );
        }

        // (edge cases 2 and 3)
        // iterate through linked list until it reaches inputIndex.
        let curr = head;
        for (let i = 0; i < inputIndex; i += 1) {
            curr = curr.nextNode;
        }

        // return node found at stopped index
        return curr;
    }

    // removes the last element from the linked list
    function pop() {
        // if the list is empty (edge case 1), return error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        let curr = head;

        // if there is only one node in the linked list (edge case 2), pop the first node and assign null to head, making linked list empty.
        if (curr.nextNode === null) {
            head = null;
            return;
        }

        // if there is 2 or more nodes in the linked list (edge case 3), iterate until last node, then remove the last node from the 2nd to last node's nextNode pointer
        while (curr.nextNode.nextNode !== null) {
            curr = curr.nextNode;
        }

        // make 2nd to last node the new "last node" and assign next node to null
        curr.nextNode = null;
    }

    // returns a boolean value depending on if the inputValue is in the list or not
    function contains(inputValue) {
        // if the linkedlist is empty (edge case 1), then return an error message/false
        if (head === null) {
            console.log(
                "Head = null, linked list is empty. Returning False, value not found.",
            );
            return false;
        }

        // (edge case 2 and 3)
        // iterate through the linkedlist from the head and check if the current node's value matches the input value, or until we reach the end of the linkedlist
        let curr = head;
        while (curr !== null) {
            if (curr.nodeKey === inputValue) {
                return true;
            }
            curr = curr.nextNode;
        }

        // return false if we went through the entire linked list and have not found a matching value
        return false;
    }

    // returns the index of the node containing the value, or null if the node is not found
    function find(inputValue) {
        // if the linkedlist is empty (edge case 1), then return an error message/null
        if (head === null) {
            console.log(
                "Head = null, linked list is empty. Returning NULL, value not found.",
            );
            return null;
        }

        // (edge case 2 and 3)
        // iterate through the linkedlist from the head and check if the current node's value matches the input value, or until we reach the end of the linkedlist
        let curr = head;

        // return index of found node (assuming 0 index)
        let indexCount = 0;
        while (curr !== null) {
            if (curr.nodeKey === inputValue) {
                return indexCount;
            }
            curr = curr.nextNode;
            indexCount += 1;
        }

        // return null if we went through the entire linked list and have not found a matching value
        return null;
    }

    function toString() {
        if (head === null) {
            console.log("No items in linked list found.");
            return;
        }

        let curr = head;

        while (curr !== null) {
            console.log(`( ${curr.nodeKey} ) ->`);
            curr = curr.nextNode;
        }

        if (curr === null) {
            console.log("null");
        }
    }

    // extra credit functions:

    // inserts a node with the value at the given index
    function insertAt(inputKey, inputValue, givenIndex) {
        // if the linkedlist is empty AND the given index is not 0 (edge case 1), then return error message
        if (head === null && givenIndex !== 0) {
            return console.log(
                "Head = null, linkedlist is empty and given index is NOT 0, exiting...",
            );
        }

        // check if givenIndex is out of range of linkedList
        if (givenIndex < 0 || givenIndex > size() - 1) {
            return console.log("Given index is out of range");
        }

        // check if givenIndex is 0. If it is, then just insert this node as the head/start of the list (prepend)
        if (givenIndex === 0) {
            prepend(inputKey, inputValue);
            return;
        }

        // check if givenIndex is size() -1, if it is then append it to the end of the list (append)
        if (givenIndex === size() - 1) {
            append(inputKey, inputValue);
            return;
        }

        // (edge cases 2 and 3)
        // if index passes all cases above, then iterate through list until we get to the desired index and make new node point to next node and previous node point to new node
        let curr = head;
        let prevNode;
        for (let i = 0; i < givenIndex; i += 1) {
            prevNode = curr;
            curr = curr.nextNode;
        }

        // new node inserted at the current node's index will point to the current node, and the previous node will point to the new created node.
        const newNode = nodes(inputValue, curr, inputKey);
        prevNode.nextNode = newNode;

        /*
        note: when inserting, the current node does not actually change, but we need to store it 
        in a temporary variable so that when we make a new node, we can pass it as the new node's next node.
        We also need to re-wire the previous node to now point to the new node instead of the current node:

        before (insering at index 1): 
        0           1           2
        previous    current
        (node 1) -> (node 2) -> (node 3) -> null

        after (inserting at index 1):
        0           1              2          3
        previous                  current
        (node 1) -> (new node) -> (node 2) -> (node 3) -> null
        */
    }

    // removes the node at the given index
    function removeAt(givenIndex) {
        // if the linkedlist is empty (edge case 1), return error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        // check if givenIndex is out of range of linkedList
        if (givenIndex < 0 || givenIndex > size() - 1) {
            return console.log("Given index is out of range");
        }

        // check if index given is size()-1, end of the list (pop())
        if (givenIndex === size() - 1) {
            pop();
            return;
        }

        let curr = head;

        // if index given is the first element, check if theres only 1 element (edge case 2)
        if (givenIndex === 0 && curr.nextNode === null) {
            head = null;
            return;
        } else if (givenIndex === 0 && curr.nextNode !== null) {
            head = curr.nextNode;
            return;
        }

        // (edge case 3)
        // iterate through linked list until at given index, and re-wire previous node to point at the .nextNode.nextNode
        let prevNode;
        for (let i = 0; i < givenIndex; i += 1) {
            prevNode = curr;
            curr = curr.nextNode;
        }

        // make the previous node point to the node that comes after the current node getting removed.
        prevNode.nextNode = curr.nextNode;
    }

    // finds and updates the existing node's value to the new value
    function updateExistingNode(key, newValue) {
        // if the linkedlist is empty (edge case 1), return error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        const existingNodeIndex = find(key);

        // start at head node, and iterate until we get to the index
        let curr = head;

        for (let i = 0; i < existingNodeIndex; i += 1) {
            curr = curr.nextNode;
        }

        curr.nodeValue = newValue;

    }

    // gets the node value of the node with the key property, and returns the value
    function getNodeValue(key) {
        // if the linkedlist is empty (edge case 1), return error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        const existingNodeIndex = find(key);

        let curr = head;

        for (let i = 0; i < existingNodeIndex; i += 1) {
            curr = curr.nextNode;
        }

        return curr.nodeValue;
    }

    // iterates through the entire linked list and adds each key found into the given array
    function addKeysToArr(givenArr) {
        const tempArr = givenArr;

        // if the linkedlist is empty (edge case 1), return error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        let curr = head;

        while (curr !== null) {
            tempArr.push(curr.nodeKey);
            curr = curr.nextNode;
        }

        return tempArr;
    }

    // iterates through the entire linked list and adds each value found into the given array
    function addValuesToArr(givenArr) {
        const tempArr = givenArr;

        // if the linkedlist is empty (edge case 1), return error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        let curr = head;

        while (curr !== null) {
            tempArr.push(curr.nodeValue);
            curr = curr.nextNode;
        }

        return tempArr;
    }

    // iterates throught he entire linked list and adds both key value pairs into given array
    function addEntriesToArr(givenArr) {
        const tempArr = givenArr;

        // if the linkedlist is empty (edge case 1), return error message
        if (head === null) {
            return console.log("Head = null, linked list is empty");
        }

        let curr = head;

        while (curr !== null) {
            tempArr.push([curr.nodeKey, curr.nodeValue]);
            curr = curr.nextNode;
        }

        return tempArr;
    }

    return {
        append,
        toString,
        size,
        prepend,
        getHead,
        getTail,
        at,
        pop,
        contains,
        find,
        insertAt,
        removeAt,
        updateExistingNode,
        getNodeValue,
        addKeysToArr,
        addValuesToArr,
        addEntriesToArr
    };
}
