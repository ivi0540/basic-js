const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function insertElemInArr(arr, numPos) {
    if (numPos === 0) {
      return [-1, ...arr];
    }
    if (numPos === (arr.length - 1)) {
      return [...arr, -1];
    }
    return [...arr.slice(0, numPos), -1, ...arr.slice(numPos)];
  };

  let coptArr = arr;

  let positionOne = [];
  coptArr.map((elem, index) => {
    if (elem === -1) {
      positionOne.push(index);
    }
  });

  coptArr = coptArr.filter((elem) => {
    if (elem !== -1) {
      return true;
    } else {
      return false;
    }
  });

  coptArr = coptArr.sort((second, first) => {
    return second - first;
  });


  positionOne.map((elem) => {
    coptArr = insertElemInArr(coptArr, elem)
  });
  return coptArr;
}

module.exports = {
  sortByHeight
};
