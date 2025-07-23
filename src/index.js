import "./style.css";
import hashMap from "./factories/hashmap.js";

const newHashMap = hashMap();

newHashMap.set("Carlos", "I am the old value");
newHashMap.set("Carlos", "I am the new value");

console.log(newHashMap.get("Carlos"));

