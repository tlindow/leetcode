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
var postorderTraversal = function(root) {
  let numbers = [];
  let stack = [root];
  let node = root;
  
  while (stack.length && node) {
      node = stack.pop();
      numbers.unshift(node.val);
      if (node.left) {
          stack.push(node.left);
      } 
      if (node.right) {
          stack.push(node.right);
      }
  }
  return numbers;
};