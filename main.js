import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);

console.log("--- In-order (left, node, right) ---");
const inOrder = [];
tree.inOrderForEach((value) => inOrder.push(value));
console.log(inOrder); // should be sorted ascending

console.log("--- Pre-order (node, left, right) ---");
const preOrder = [];
tree.preOrderForEach((value) => preOrder.push(value));
console.log(preOrder);

console.log("--- Post-order (left, right, node) ---");
const postOrder = [];
tree.postOrderForEach((value) => postOrder.push(value));
console.log(postOrder);
