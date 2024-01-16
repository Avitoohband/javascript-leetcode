const nums1 = [0,1,2,2,4,4,1];
const nums2 = [4,4,4,9,2,4];

var mostFrequentEven = function(nums) {
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};

console.log(mostFrequentEven(nums4));
// console.log(mostFrequentEven(nums2));
// console.log(mostFrequentEven(nums3));
