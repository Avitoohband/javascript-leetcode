const s = "III"; //3
const s2 = "LVIII"; //58
const s3 = "MCMXCIV"; //1994

const romanToInt = function (s) {
  const m = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };


  let result = m[s[s.length-1]]; 
  let i = 0;

  while(i < s.length - 1){
    if(m[s[i]] < m[s[i+1]]){
        result -= m[s[i]]
    }else{
        result += m[s[i]]
    }
    i++;
  }
  return result;
};


console.log(romanToInt(s));
console.log(romanToInt(s2));
console.log(romanToInt(s3));