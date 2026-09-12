import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);

console.log("--- isBalanced (should be true, built with buildTree) ---");
console.log(tree.isBalanced());

console.log("--- Unbalancing the tree ---");
tree.insert(200);
tree.insert(300);
tree.insert(400);
tree.insert(500);
prettyPrint(tree.root);

console.log("--- isBalanced (should now be false) ---");
console.log(tree.isBalanced());

console.log("--- Rebalancing ---");
tree.rebalance();
prettyPrint(tree.root);

console.log("--- isBalanced (should be true again) ---");
console.log(tree.isBalanced());
