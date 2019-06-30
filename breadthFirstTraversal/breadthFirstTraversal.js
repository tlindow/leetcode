/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let queue = [root];
  let numbers = [];
  while (queue.length && root) {
      let currentSet = [];
      let size = queue.length;
      for (var i = 0; i < size; i++) {
          let node = queue.shift();
          currentSet.push(node.val);
          if (node.left) {
              queue.push(node.left);
          }
          if (node.right) {
              queue.push(node.right);
          }  
      }
      numbers.push(currentSet);
  }
  return numbers;
};
