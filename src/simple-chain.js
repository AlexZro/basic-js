const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;    
  },
  addLink(value) {
    value = (value !== undefined) ? `( ${value} )` : '( )';
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(this.arr[position]) {
      this.arr.splice(position - 1, 1);
    } else {
      this.arr = [];
      throw Error;
      }

    return this; 
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let finishStr = this.arr.join('~~');
    this.arr = [];
    return finishStr;
  }
};

module.exports = chainMaker;
