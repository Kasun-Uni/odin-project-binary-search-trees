import Tree from "./Tree.js";
import prettyPrint from "./prettyPrint.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
prettyPrint(tree.root);

console.log("--- Level order traversal ---");
const levelOrderValues = [];
tree.levelOrderForEach((value) => levelOrderValues.push(value));
console.log(levelOrderValues);

// Test error case
try {
  tree.levelOrderForEach();
} catch (error) {
  console.log(error.message); // "A callback function is required"
}