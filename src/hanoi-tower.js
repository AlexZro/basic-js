const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let Honoi = {};
  const SECONDS_IN_HOUR = 3600;
  Honoi.turns = Math.pow(2, disksNumber) - 1;
  Honoi.seconds = Math.floor((Honoi.turns * SECONDS_IN_HOUR) / turnsSpeed);
  return Honoi;
};
