var nums = [2,2,1];
var nums2 = [4,1,2,1,2];
var nums3 =  [1];
var nums4 = [1,1,3,2,2]

var singleNumber = function(nums) {   
    let current = 0 ;
    let potentialFraud = 1;
    
    while (potentialFraud < nums.length){
        if(nums[current] === nums[potentialFraud]){
            let temp = nums[current + 1];
            nums[current + 1] = nums[potentialFraud];
            nums[potentialFraud] = temp;
            current += 2;
            potentialFraud = current + 1;
        }else{
            potentialFraud++;
        }
        
    }   
    return nums[current]; 
};

console.log(singleNumber(nums));