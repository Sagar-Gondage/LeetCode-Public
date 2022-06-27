function method1(s) {
  let stack = [];
  let obj = { "(": ")", "[": "]", "{": "}" };
  for (let chr of s) {
    if (obj[chr]) {
      stack.push(obj[chr]);
    } else if (stack.length > 0 && stack[stack.length - 1] === chr) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(method1("()[]{}"));
console.log(method1("(]"));
console.log(method1("({)}"));
console.log(method1("{[()]}"));

////  if else part optimised
function method2(s) {
  let obj = { "(": ")", "[": "]", "{": "}" };

  let stack = [];

  for (let chr of s) {
    if (obj[chr]) {
      stack.push(obj[chr]);
    } else {
      if (stack.pop() !== chr) return false;
    }
  }
  return stack.length === 0;
}

console.log(method2("()[]{}"));
console.log(method2("(]"));
console.log(method2("({)}"));
console.log(method2("{[()]}"));
