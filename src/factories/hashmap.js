/* eslint-disable no-magic-numbers */
import linkedList from "./linkedlist.js";

export default function hashMap() {
    let bucketArr = [];

    // a factor to determine when to grow our buckets array
    let loadFactor = 0.75;

    // total buckets we currently have (usually starts with size 16)
    let capacity = 16;

    // note: starting with a capacity of 8 (a number that is in the power of ^2) to ensure that the indexing hash code distributes values as evenly as possible in our array
    // note: strings will be the main datatype of our keys

    /* 
    takes a key input and produces a hash code, and then mods it to produce an index inside our hashmap buckets array
    output: index thats within our array size
    */
    function hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i += 1) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);

            // the odin project says to mod (%) on every iteration to keep it within valid integer range for javascript
            hashCode %= capacity;
        }

        return hashCode;
    }

    /* 
    takes in a key and a value and puts the node in that bucket. If there is a collision, handle the collision as discussed in the previous lesson.
    Also grow the array based on the load factor and the current maximum capacity if needed as the array fills with values (recommended to code this last)
    */
    function set(key, value) {
        // hash the key to get the index
        const index = hash(key);

        // limitation: see if index after hashing is within the bounds of our array length
        if (index < 0 || index >= capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        /*
        check if there is already a node in the bucket at index.
        if there is NO node there, insert this key/value pair into the array at the index from the hashing function

        if there IS a node already there, then check for a collision, or an update.
        update: if the key already exists, then the old value gets updated/overwritten with the new value given.
        collision: if the key is DIFFERENT BUT HASHES THE SAME INDEX/HASHCODE, handle the collision. (linked list)
        */

        // if there is no node in the index bucket:
        if (bucketArr[index] === null || bucketArr[index] === undefined) {
            bucketArr[index] = linkedList();
            bucketArr[index].append(key, value);
            return;
        }

        // if there IS a node in the index bucket, check if key already exists and update the value:
        if (bucketArr[index] !== null || bucketArr[index] !== undefined) {
            // check if the key given already exists at the given bucket index, then update the node's value if it exists
            if (bucketArr[index].contains(key)) {
                console.log(
                    `Same key detected: ${key}, updating existing value...`,
                );
                bucketArr[index].updateExistingNode(key, value);
            } else {
                // if the key given DOESN'T exist in the linked list, then this is considered a collision (different key, but same index location from hashing). Append to the end of the linked list
                console.log(
                    `Collision detected (different key, same index): ${key}, adding collision to end of linked list bucket`,
                );
                bucketArr[index].append(value, key);
            }
        }

        // bucketsArray growth logic will go here later.
    }

    // takes in a key and returns the value that is assigned to this key. If the key is NOT found, then return null
    function get(key) {
        // hash the key to get the index
        const index = hash(key);

        // limitation: see if index after hashing is within the bounds of our array length
        if (index < 0 || index >= capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        // if there is no bucket found at the index from hash function:
        if (bucketArr[index] === null || bucketArr[index] === undefined) {
            return null;
        }

        // if there IS a bucket found at the index from hash function, then check linked list for key:
        if (bucketArr[index] !== null || bucketArr[index] !== undefined) {
            // check if the key is found in the linked list after hashing. If it is, return the node value associated with the key
            if (bucketArr[index].contains(key)) {
                return bucketArr[index].getNodeValue(key);
            }
        }

        // if the key doesn't exist at the index and in the linked list, then return null, key is not found.
        return null;
    }

    // function has(key) {}

    // function remove(key) {}

    // function length() {}

    // function clear() {}

    // function keys() {}

    // function values() {}

    // function entries() {}

    return { hash, set, get };
}
