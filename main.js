import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);

console.log("--- Height ---");
console.log(tree.height(8));   // height of the root
console.log(tree.height(9));   // height of some inner node
console.log(tree.height(3));   // height of a leaf -> should be 0
console.log(tree.height(999)); // doesn't exist -> undefined

console.log("--- Depth ---");
console.log(tree.depth(8));    // root -> should be 0
console.log(tree.depth(9));    // some inner node
console.log(tree.depth(3));    // deeper leaf
console.log(tree.depth(999));  // doesn't exist -> undefined
