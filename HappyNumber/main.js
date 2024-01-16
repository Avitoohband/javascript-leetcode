var isHappy = function (n) {
  var first = n;
  var second = n;

  do {
    first = isHappyHelper(first);
    second = isHappyHelper(isHappyHelper(second)); 
  } while (first != second);

  return first === 1; 
};

var isHappyHelper = function (n) {
  var sum = 0;
  while (n > 0) {
    sum += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }

  return sum;
};
