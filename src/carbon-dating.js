const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RADIOACTIVE_DECAY= 0.693 / HALF_LIFE_PERIOD;


module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string" || isNaN(sampleActivity) || +sampleActivity <= 0 || +sampleActivity >= 15 ) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / RADIOACTIVE_DECAY);
};
