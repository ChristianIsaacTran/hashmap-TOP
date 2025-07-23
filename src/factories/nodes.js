
// represnts a function factory that returns a new node object with the value, and the nextNode pointer
export default function nodes(inputValue, inputNextNode, inputKey) {
    const nodeKey = inputKey
    const nodeValue = inputValue; 
    const nextNode = inputNextNode;
    return { nodeValue, nextNode, nodeKey }
}