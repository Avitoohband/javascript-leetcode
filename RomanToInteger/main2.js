const romanToInt = (str) => {
  let res = 0;
  const obj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
  for (let i = 0; i < str.length - 1; i++) {
    if (obj[str.charAt(i)] < obj[str.charAt(i + 1)]) res -= obj[str.charAt(i)];
    else res += obj[str.charAt(i)];
  }
  return res + obj[str.charAt(str.length - 1)];
};
console.log(romanToInt("LVIII"));
