const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
  for (index in String(n)) {
    arr.push(String(n)[index]);
  }

  let arrArr = [];
  for (index in String(n)) {
    arrArr.push(arr);
  }

  let newElem;
  let newArr = [];
  arrArr.map((elem, index) => {
    newElem = elem.filter((elemElem, indexIndex) => {
      if (indexIndex === index) {
        return false;
      } else {
        return true;
      }
    });
    newArr.push(newElem);
  });
  arrArr = newArr;

  newArr = [];
  arrArr.map((elem, index, arr) => {
    newArr.push(Number(elem.join('')));
  });
  arrArr = newArr;
  // console.log(arrArr);

  return Number(arrArr.reduce((value, elem, index, arr) => {
    if (elem > value) {
      return elem;
    } else {
      return value;
    }
  }, arr[0]));
}

module.exports = {
  deleteDigit
};
