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

    levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }

    if (this.root === null) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const current = queue.shift();
      callback(current.data);

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);
    }
  }

    inOrderForEach(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }

    if (node === null) return;

    this.inOrderForEach(callback, node.left);
    callback(node.data);
    this.inOrderForEach(callback, node.right);
  }

  preOrderForEach(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }

    if (node === null) return;

    callback(node.data);
    this.preOrderForEach(callback, node.left);
    this.preOrderForEach(callback, node.right);
  }

  postOrderForEach(callback, node = this.root) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required");
    }

    if (node === null) return;

    this.postOrderForEach(callback, node.left);
    this.postOrderForEach(callback, node.right);
    callback(node.data);
  }

    height(value, node = this.#find(value, this.root)) {
    if (node === null || node === undefined) return undefined;

    const calculateHeight = (current) => {
      if (current === null) return -1;
      const leftHeight = calculateHeight(current.left);
      const rightHeight = calculateHeight(current.right);
      return Math.max(leftHeight, rightHeight) + 1;
    };

    return calculateHeight(node);
  }

  depth(value, node = this.root, currentDepth = 0) {
    if (node === null) return undefined;

    if (value === node.data) return currentDepth;

    if (value < node.data) {
      return this.depth(value, node.left, currentDepth + 1);
    } else {
      return this.depth(value, node.right, currentDepth + 1);
    }
  }

  #find(value, node) {
    if (node === null) return null;
    if (value === node.data) return node;
    if (value < node.data) return this.#find(value, node.left);
    return this.#find(value, node.right);
  }

    isBalanced(node = this.root) {
    if (node === null) return true;

    const checkHeight = (current) => {
      if (current === null) return 0;

      const leftHeight = checkHeight(current.left);
      if (leftHeight === -1) return -1;

      const rightHeight = checkHeight(current.right);
      if (rightHeight === -1) return -1;

      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      return Math.max(leftHeight, rightHeight) + 1;
    };

    return checkHeight(node) !== -1;
  }

  rebalance() {
    const values = [];
    this.inOrderForEach((value) => values.push(value));
    this.root = this.buildTree(values);
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
