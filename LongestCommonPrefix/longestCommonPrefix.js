const longestCommonPrefix = (strs) => {
    let commonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    for(let j = 0 ; j < strs.length; j++){   
        if(i >= strs[j].length || strs[j][i] != strs[0][i]) return commonPrefix;       
    }
    commonPrefix += strs[0][i];
  }
  return commonPrefix;
};

let strs = ["flower","flow","flight"]
let strs2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));