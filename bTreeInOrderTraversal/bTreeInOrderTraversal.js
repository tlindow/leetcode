/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let numbers = [];
  let stack = [];
  let node = root;
  while (node || stack.length) {
      if (node) {
          stack.push(node);
          node = node.left;
      } else {
          node = stack.pop();
          numbers.push(node.val);
          node = node.right;
      }
  }
  return numbers;
};
