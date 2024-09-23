module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = Object.fromEntries(bracketsConfig);
  
  for ( let char of str) {
    if (bracketsMap[char]) {
      if (char === bracketsMap[char] && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (!stack.length || bracketsMap[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
}