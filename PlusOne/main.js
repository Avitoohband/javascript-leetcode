var nums1 = [1, 2, 3];
var nums2 = [4, 3, 2, 1];
var nums3 = [9];
var nums4 = [8, 9, 9, 9];

var plusOne = function (digits) {
  var i = digits.length - 1;

  while (i >= 0) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }

    digits[i] = 0;
    i--;
  }

  let result = new Array(digits.length + 1);
  result = new Array(digits.length + 1).fill(0);
  result[0] = 1;

  return result;
};

console.log(plusOne(nums1));
console.log(plusOne(nums2));
console.log(plusOne(nums3));
console.log(plusOne(nums4));