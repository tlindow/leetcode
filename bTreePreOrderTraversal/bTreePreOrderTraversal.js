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
var preorderTraversal = function(root) {
  let numbers = [];
  let stack = [root];
  while (stack.length && root) {
      let node = stack.pop();
      numbers.push(node.val);
      if (node.right) {
          stack.push(node.right);
      }
      if (node.left) {
          stack.push(node.left);
      }
  }
  return numbers;
};
