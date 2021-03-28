const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, defaultDepth = 1) {
    let deepth = defaultDepth;

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        let newDepth = this.calculateDepth(item, defaultDepth + 1);
        if (newDepth > deepth)  {
          deepth = newDepth;
        }
      }
    });
    return deepth;
  }

};