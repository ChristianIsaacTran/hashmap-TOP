/* eslint-disable no-magic-numbers */
export default function hashMap() {
    // a factor to determine when to grow our buckets array
    let loadFactor = 0.75;

    // total buckets we currently have (usually starts with size 16)
    let capacity = 16;

    // note: starting with a capacity of 8 (a number that is in the power of ^2) to ensure that 

    function hello() {
        console.log("hello world!");
    }

    // takes a key input and produces a hash code, and then mods it to produce an index inside our hashmap buckets array
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

    // function set(key, value) {}

    // function get(key) {}

    // function has(key) {}

    // function remove(key) {}

    // function length() {}

    // function clear() {}

    // function keys() {}

    // function values() {}

    // function entries() {}

    return { hello, hash };
}
