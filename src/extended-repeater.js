const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition === undefined) {
    options.additionRepeatTimes = "";
  }

  let result = "";
  for (let i = 0; i < options.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
        result = result + options.addition;
        if (j + 1 !== options.additionRepeatTimes)  {
          result += options.additionSeparator;
        }
    }
    if (i + 1 !== options.repeatTimes) {
      result+= options.separator;
    }
        
}
return result;
};
  