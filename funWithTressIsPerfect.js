// https://www.codewars.com/kata/57dd79bff6df9b103b00010f
class TreeNode {

    constructor(left = null, right = null) {
      this.left = left;
      this.right = right;
    }
  
    static isPerfect(root) {
      if (!root) return true;
      if (TreeNode.countChildren(root.left) !== TreeNode.countChildren(root.right)) return false;
      return TreeNode.isPerfect(root.left) && TreeNode.isPerfect(root.right);
    }
    
    static countChildren(root) {
      if (!root) return 0;
      return 1 + TreeNode.countChildren(root.left) + TreeNode.countChildren(root.right);
    }
    
    static leaf() {
      return new TreeNode();
    }
    
    static join(left, right) {
      return new TreeNode().withChildren(left, right);
    }
    
    withLeft(left) {
      this.left = left;
      return this;
    }
  
    withRight(right) {
      this.right = right;
      return this;
    }
  
    withChildren(left, right) {
      this.left = left;
      this.right = right;
      return this;
    }
  
    withLeftLeaf() {
      return this.withLeft(TreeNode.leaf());
    }
  
    withRightLeaf() {
      return this.withRight(TreeNode.leaf());
    }
  
    withLeaves() {
      return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
    }
    
}