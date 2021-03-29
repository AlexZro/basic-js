const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error;
  if(arr.length === 0) return [];
  let finalArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '--double-next':
        if (arr.length - 1 > i)  finalArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i > 0) finalArr.push(arr[i - 1]);
        break;
      case '--discard-next':
        arr[i + 2] === '--double-prev' || arr[i + 2] === '--discard-prev' 
        ? i += 2
        : i++;
        break;    
      case '--discard-prev':
        if (i > 0) finalArr.pop();
        break;
      default:
        finalArr.push(arr[i]);
        break;
    }
  }

  return finalArr;
};
