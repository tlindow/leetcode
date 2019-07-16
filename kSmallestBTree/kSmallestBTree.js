/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let stack = [];
  let node = root;
  while (node || stack.length) {
      if (node) {
          stack.push(node);
          node = node.left;
      } else {
          node = stack.pop();
          k--;
          if (k === 0) {
              return node.val;
          }
          node = node.right;
      }
  }
  return null;
};
