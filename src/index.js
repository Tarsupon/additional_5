 module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
 
  arr = str.split("");
  let bracketsDictionary = {};
  for (let i = 0; i < bracketsConfig.length; i++){
    const key = bracketsConfig[i][0];
    const value = bracketsConfig[i][1];
    bracketsDictionary[key] = value;
  }

  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(bracketsDictionary).find(key => key === arr[i])) {
      stack.push(arr[i]);
      if(arr[i] == '8'){
        stack.pop();
      }
      if (arr[i] == '7'){
        stack.pop();
      }
      if (arr[i] == '|'){
        stack.pop();
      }
    } else {
      const bracket = stack.pop();
      if (bracketsDictionary[bracket] !== arr[i]) {
        return false;
      }
    }
  }

  return true;
}
