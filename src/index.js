import "./style.css";
import hashMap from "./factories/hashmap.js";

const newHashMap = hashMap();

// set() test
newHashMap.set("Carlos", "I am the old value");
newHashMap.set("Carlos", "I am the new value");

// get() test
console.log(newHashMap.get("Carlos"));

// has() test
console.log(newHashMap.has("Carlos"));
console.log(newHashMap.has("carlos"));

// length() test
console.log(newHashMap.length());

// remove() test
console.log(newHashMap.remove("carlos"));
console.log(newHashMap.remove("Carlos"));
