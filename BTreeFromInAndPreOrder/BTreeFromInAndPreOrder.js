/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    

  const build = (preO, inO) => {
      let rootVal;
      if (preO[0] === undefined) {
         return null;
      } else {
         rootVal = preO[0];
      }
      
      let root = new TreeNode(rootVal);
      let idx = inO.indexOf(rootVal);
      let rightTreeInorder = inO.slice(idx + 1);
      let leftTreeInorder = inO.slice(0, idx);
      let leftTreePreorder = preO.slice(1, 1 + leftTreeInorder.length);
      let rightTreePreorder = preO.slice(1 + leftTreeInorder.length, preorder.length);
      if (!preO.length || !inO.length) {
        return;
      }
      root.left = build(leftTreePreorder, leftTreeInorder);
      root.right = build(rightTreePreorder, rightTreeInorder);
      return root;
  }
  
  return build(preorder, inorder);
};
