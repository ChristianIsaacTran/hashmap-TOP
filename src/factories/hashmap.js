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
    // function set(key, value) {

    // }

    // function get(key) {}

    // function has(key) {}

    // function remove(key) {}

    // function length() {}

    // function clear() {}

    // function keys() {}

    // function values() {}

    // function entries() {}

    return { hash };
}
