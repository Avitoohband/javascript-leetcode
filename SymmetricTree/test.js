var isSymmetric = function(root) {
    if (root === undefined || root === null) {
      return true;
    }
  
    function helper(left, right) {
      if (left === null && right === null) {
        return true;
      }
  
      if (left === null || right === null) {
        return false;
      }
  
      if (left.val !== right.val) {
        return false;
      }
  
      return helper(left.left, right.right) && helper(left.right, right.left);
    }
  
    return helper(root.left, root.right);
  };
  