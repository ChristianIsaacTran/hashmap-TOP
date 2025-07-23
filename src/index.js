import "./style.css";
import hashMap from "./factories/hashmap.js";

const newHashMap = hashMap();

// // set() test
// newHashMap.set("Carlos", "I am the old value");
// newHashMap.set("Carlos", "I am the new value");

// // get() test
// console.log(newHashMap.get("Carlos"));

// // has() test
// console.log(newHashMap.has("Carlos"));
// console.log(newHashMap.has("carlos"));

// // length() test
// console.log(newHashMap.length());

// // remove() test
// console.log(newHashMap.remove("carlos"));
// console.log(newHashMap.remove("Carlos"));

newHashMap.set("apple", "red");
newHashMap.set("banana", "yellow");
newHashMap.set("carrot", "orange");
newHashMap.set("dog", "brown");
newHashMap.set("elephant", "gray");
newHashMap.set("frog", "green");
newHashMap.set("grape", "purple");
newHashMap.set("hat", "black");
newHashMap.set("ice cream", "white");
newHashMap.set("jacket", "blue");
newHashMap.set("kite", "pink");
newHashMap.set("lion", "golden");
 

console.log(newHashMap.keys());
console.log(newHashMap.values());