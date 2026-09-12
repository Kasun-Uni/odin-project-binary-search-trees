import Node from "./Node.js";

class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    const sortedUnique = [...new Set(array)].sort((a, b) => a - b);
    return this.#buildTreeFromSorted(sortedUnique, 0, sortedUnique.length - 1);
  }

    insert(value, node = this.root) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    if (value === node.data) {
      return; // no duplicates
    }

    if (value < node.data) {
      if (node.left === null) {
        node.left = new Node(value);
        return;
      }
      return this.insert(value, node.left);
    } else {
      if (node.right === null) {
        node.right = new Node(value);
        return;
      }
      return this.insert(value, node.right);
    }
  }

  includes(value, node = this.root) {
    if (node === null) return false;

    if (value === node.data) return true;

    if (value < node.data) {
      return this.includes(value, node.left);
    } else {
      return this.includes(value, node.right);
    }
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
