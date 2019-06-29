/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let depth = 1;
  let max = 1;
  if (root === null) {
      return 0;
  } else {
      const search = (node) => {
          if (depth > max) {
              max = depth;
          }
          if (node.left) {
              depth ++;
              search(node.left)
              depth --;
          }
          if (node.right) {
              depth ++;
              search(node.right);
              depth --;
          }
      }
      search(root);
  }
  return max;
};
