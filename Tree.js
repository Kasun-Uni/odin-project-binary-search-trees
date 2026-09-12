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

      deleteItem(value) {
    this.root = this.#deleteNode(value, this.root);
  }

  #deleteNode(value, node) {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this.#deleteNode(value, node.left);
      return node;
    } else if (value > node.data) {
      node.right = this.#deleteNode(value, node.right);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let successor = node.right;
      while (successor.left !== null) {
        successor = successor.left;
      }

      node.data = successor.data;
      node.right = this.#deleteNode(successor.data, node.right);
      return node;
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
