import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

console.log("--- Before deletion ---");
prettyPrint(tree.root);

tree.deleteItem(8); // deleting the root, which has two children
console.log("--- After deleting root (8) ---");
prettyPrint(tree.root);

console.log(tree.includes(8)); // false
console.log(tree.includes(9)); // true (should still exist)

tree.deleteItem(999); // doesn't exist, should do nothing
console.log("--- After attempting to delete non-existent value ---");
prettyPrint(tree.root);