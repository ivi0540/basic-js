const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  'data': [],

  getLength() {
    return this.data.length;
  },
  addLink(value) {
    if ((value === undefined) || (value === null)) {
      this.data.push('null');
    } else {
      this.data.push(value);
    }
    return this;
  },
  removeLink(position) {
    if ((position - 1) <= this.getLength()) {
      let copyArr = this.data;
      let newArr = copyArr.filter((elem, index, arr) => {
        if (index === (position - 1)) {
          return false;
        } else {
          return true;
        }
      });
      this.data = newArr;
      return this;
    } else {
      let error = new Error("You can't remove incorrect link!");
      throw error;
      return this;
    }
  },
  reverseChain() {
    this.data.reverse();
    return this;
  },
  finishChain() {
    let copyData = this.data;
    this.data = [];
    return `( ${copyData.join(' )~~( ')} )`;
  }
};

module.exports = {
  chainMaker
};
