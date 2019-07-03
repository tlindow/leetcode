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
var isSymmetric = function(root) {
  let node = root;
  
  if(!node) {
      return true;
  }
    
  let nodeLeft = node.left;
  let nodeRight = node.right;
    
  let queueLeft = [nodeLeft];
  let queueRight = [nodeRight];
    
  if (!nodeLeft && nodeRight) {
    return false;
  }
    
  while (queueLeft.length && queueRight.length) {
      nodeLeft = queueLeft.shift();
      nodeRight = queueRight.pop();
      if (!nodeLeft && !nodeRight) {
          continue;
      }
      
      if ((!nodeLeft && nodeRight) || (nodeLeft && !nodeRight)) {
        return false;
      }
      
      if ((nodeLeft && nodeRight) && nodeLeft.val !== nodeRight.val) {
          return false;
      }
      
      queueLeft.push(nodeLeft.left);
      queueLeft.push(nodeLeft.right);
      queueRight.unshift(nodeRight.right);
      queueRight.unshift(nodeRight.left);
  }
  return true;
};
