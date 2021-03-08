const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let names = [...members];
  return names.filter(name => typeof(name) === 'string').map(str =>str.trim()[0].toUpperCase()).sort().join('');
 
};
