const sqrtRec = (num, exp, memo = {}) => {
  if (exp === 0) return 1;
  else if (exp in memo) return memo[exp];

  memo[exp] = num * sqrtRec(num, --exp, memo);
  return memo[exp];
};

// console.log(sqrtRec(2,2000));

const fibRec = (num, memo = {}) => {
  if (num in memo) return memo[num];
  if (num === 0) return 0;
  if (num <= 2) return 1;

  memo[num] = fibRec(num - 1, memo) + fibRec(num - 2, memo);
  return memo[num];
};

// console.log(fibRec(50));

const longetSubArrayAcending = (nums) => {
  let start = 0;
  let end = 1;
  let max = 0;

  while (end < nums.length) {
    if (nums[end] > nums[end - 1]) {
      end++;
    } else {
      max = Math.max(max, (end - start));
      start = end;
      end++;
    }    
  }
  max = Math.max(max, (end - start));
  return max;
};

// console.log(longetSubArrayAcending([1, 2, 3, 4, 5, 6]));

// console.log(
//   longetSubArrayAcending([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 1, 2, 3, 4,
//     5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
//   ])
// );



