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
var zigzagLevelOrder = function(root) {
  if (!root) {
      return [];
  }
  
  let queue = [root];
  const values = [];
  let node;
  let currentLevel = 0;
  while(queue.length) {
      let current = [];
      let currentSize = queue.length;
      for (var i = 0; i < currentSize; i++) {
          node = queue.shift();
          current.push(node.val);
          if (node.left) {
              queue.push(node.left);
          }
          if (node.right) {
              queue.push(node.right);
          }
      }
      if (currentLevel % 2 === 0) {
        values.push(current);
      } else {
        values.push(current.reverse());
      }
      currentLevel++;
  }
  return values;
};
