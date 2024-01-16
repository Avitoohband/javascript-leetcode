// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

var isSymmetric = function (root) {
  if (root === undefined || root === null) {
    return true;
  }

  function helper(left, right) {
    if(left === null && right === null){
        return true;
    }
    if(left === null || right === null){
        return false;
    }
    if (left.val !== right.val){
        return false;
    }
    return (right.val === left.val) && (helper(left.)
    // return val = val and childs equas childs
  }
//   return call helper with root childes


    
};


