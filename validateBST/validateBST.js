/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let node = root;
  let stack = [];
  let order = [];
  while (stack.length || node) {
      if (node) {
          stack.push(node);
          node = node.left;
      } else {
          node = stack.pop();
          if (order.length === 0 || order[order.length - 1] < node.val) {
              order.push(node.val);
          } else {
              return false;
          }
          node = node.right;
      }
  }
  return true;
};
