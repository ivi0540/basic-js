const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180] 4444
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrWithOne = arr.map((elem) => {
    if (elem === -1) {
      return elem;
    } else {
      return null;
    }
  });

  let arrWithNum = arr.filter((elem) => {
    if (elem !== -1) {
      return elem;
    }
  });

  arrWithNum = arrWithNum.sort((second, first) => {
    return second - first;
  });

  let result = arrWithOne.map((elem) => {
    if (elem) {
      return elem;
    } else {
      return arrWithNum.shift();
    }
  });
  return result;
}

module.exports = {
  sortByHeight
};
