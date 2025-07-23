# Hashmap odin project
This is a project that is dedicated to implementing the hash map data structure. 

# What is a hashmap? 
To my understanding, a hashmap is a datastructure that uses an array (most data structures 
use arrays, I don't remember one that doesn't so far) to store nodes (objects) that 
contain a key/value pair, but instead of indexing the array with numbers, we index them with 
those keys as the indexes. 

# But how do we convert a "key" into an index? 
The "hash" part of the hashmap data structure is how we convert our "key" (usually a string) 
into a numerical value. The act of hashing is taking in an input and peforming an opertaion
that converts that input (our key in this case) into a numerical number called a "hash code". 
We can do that in many ways, but the main way to do it is with a dedicated hash function. 
There are many different designs for a hash function but we are going to use the hash function 
that the odin project gave us to convert the keys into numerical values. 

# well, we have the hash code. now what? 
Usually, the hash code is too big to serve as our index, but with the modulo operator we 
can force it to convert our hash code into a valid index number thats within the bounds 
of the current array by modding the hash number by the length of the array. Now we have a 
usable index to assign into our array.

# if we are inserting a node into our array, what happens?
1. (if the array location is empty) We make a linked list and insert our new node into the 
linked list by appending it. 

2. (if there is already a linked list at the array location, and the key exists in the bucket) 
Check if the linked list contains the same key. If there is a node that DOES contain the same exact key, 
then update it's node value to the new node value in the function call. 

3. (if there is already a linked list at the array location, and its a different key, but same array location)
Check if the linked list contains the same key. If it doesn't contain the key, that means that the hash function 
produced a hash code index in the same location as the existing node, but with a different key. We append this 
key to the end of the existing linked list. 