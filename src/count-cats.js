const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sumCats = []
  for (let i = 0; i < matrix.length; i++) {     
      sumCats.push(matrix[i].filter(item => item == '^^'));
  }
  return sumCats.flat().length;
};
