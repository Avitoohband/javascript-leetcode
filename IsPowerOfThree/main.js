const n = 27;
const n2 = 0;
const n3 = -1;
const n4 = 45;
const n5 = 27;
const n6 = 1;

const isPowerOfThree = function (n) {
   
  let temp = 1;

  while (temp <= n) {
        if ((temp === n)) return true;
    temp = temp * 3;
  }
  return false;
};

// console.log(isPowerOfThree(n));
// console.log(isPowerOfThree(n2));
// console.log(isPowerOfThree(n3));
// console.log(isPowerOfThree(n4));
// console.log(isPowerOfThree(n5));
console.log(isPowerOfThree(n6));
