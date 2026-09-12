import Node from "./Node.js";

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const sortedUnique = [...new Set(array)].sort((a, b) => a - b);
    return this.#buildTreeFromSorted(sortedUnique, 0, sortedUnique.length - 1);
  }

  #buildTreeFromSorted(array, start, end) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.#buildTreeFromSorted(array, start, mid - 1);
    node.right = this.#buildTreeFromSorted(array, mid + 1, end);

    return node;
  }
}

export default Tree;
