
// represnts a function factory that returns a new node object with the value, and the nextNode pointer
export default function nodes(inputValue, inputNextNode) {
    const value = inputValue; 
    const nextNode = inputNextNode;
    return {value, nextNode}
}