const s1 = "()"; // true
const s2 = "()[]{}"; //true
const s3 = "(]"; //false
const s4 = "({[]})"; // true
const s5= "]" // false

const isValid = function (s) {
  if (s && s.length > 0) {
    stack = [];
    s.split("").map((ch) => {
      switch (ch) {
        case "(":
        case "[":
        case "{":
          stack.push(ch);
          break;

        case ")":
          if (stack.length > 0 || stack[stack.length - 1] === "(") {
            stack.pop();
          } else {
            return false;
          }
          break;
        case "]":
          if (stack.length > 0 || stack[stack.length - 1] === "[") {
            stack.pop();
          } else {
            return false;
          }
          break;

        case "}":
          if (stack.length > 0 || stack[stack.length - 1] === "{") {
            stack.pop();
          } else {
            return false;
          }
          break;

        default:
          break;
      }
    });
    return stack.length === 0;
  }

  return false;
};

// console.log(isValid(s1));
// console.log(isValid(s2));
// console.log(isValid(s3));
// console.log(isValid(s4));
console.log(isValid(s5));
