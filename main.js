import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

function generateRandomArray(size = 15, max = 100) {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * max));
  }
  return array;
}

function printAllTraversals(tree) {
  const levelOrder = [];
  tree.levelOrderForEach((value) => levelOrder.push(value));
  console.log("Level order:", levelOrder);

  const preOrder = [];
  tree.preOrderForEach((value) => preOrder.push(value));
  console.log("Pre order:  ", preOrder);

  const postOrder = [];
  tree.postOrderForEach((value) => postOrder.push(value));
  console.log("Post order: ", postOrder);

  const inOrder = [];
  tree.inOrderForEach((value) => inOrder.push(value));
  console.log("In order:   ", inOrder);
}

// 1. Create a BST from an array of random numbers < 100
const randomArray = generateRandomArray();
const tree = new Tree(randomArray);

console.log("=== Initial Tree ===");
prettyPrint(tree.root);

// 2. Confirm the tree is balanced
console.log("\nIs balanced?", tree.isBalanced()); // true

// 3. Print all elements in level, pre, post, and in order
console.log("\n=== Traversals (balanced) ===");
printAllTraversals(tree);

// 4. Unbalance the tree with several numbers > 100
tree.insert(150);
tree.insert(200);
tree.insert(250);
tree.insert(300);
tree.insert(350);

console.log("\n=== Tree After Unbalancing ===");
prettyPrint(tree.root);

// 5. Confirm the tree is now unbalanced
console.log("\nIs balanced?", tree.isBalanced()); // false

// 6. Rebalance the tree
tree.rebalance();

// 7. Confirm the tree is balanced again
console.log("\nIs balanced?", tree.isBalanced()); // true

console.log("\n=== Tree After Rebalancing ===");
prettyPrint(tree.root);

// 8. Print all elements in level, pre, post, and in order
console.log("\n=== Traversals (rebalanced) ===");
printAllTraversals(tree);
