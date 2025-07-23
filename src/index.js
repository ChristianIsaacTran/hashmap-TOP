import "./style.css";
import hashMap from "./factories/hashmap.js";


const newHashMap = hashMap();


newHashMap.set("Rama", "AWESOME");
newHashMap.set("Rama", "this is a new value");