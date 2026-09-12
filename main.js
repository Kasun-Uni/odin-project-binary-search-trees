import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);

console.log("--- Testing includes ---");
console.log(tree.includes(9));   // true
console.log(tree.includes(100)); // false

console.log("--- Testing insert ---");
tree.insert(50);
tree.insert(9); // duplicate, should do nothing
prettyPrint(tree.root);

console.log(tree.includes(50)); // true