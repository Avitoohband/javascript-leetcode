var nums = [2,2,1];
var nums2 = [4,1,2,1,2];
var nums3 =  [1];
var nums4 = [1,1,3,2,2]

var singleNumber = function(nums) {
    let xor = 0;
    for(let num of nums){
        xor ^= num;
    }
    return xor;
}  

