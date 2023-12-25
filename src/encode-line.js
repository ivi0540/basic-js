const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  function stringProcessing(str) {
    if (str.length > 1) {
      return `${str.length}${str[0]}`;
    } else {
      return str[0];
    }
  }

  let copyStr = str.split('');
  let arr = [];
  let countStr = 0;
  let result = '';

  if (copyStr.length > 0) {
    arr.push('');
    arr[countStr] += copyStr.shift();

    while (copyStr.length > 0) {
      if (arr[countStr][0] === copyStr[0]) {
        arr[countStr] += copyStr.shift();
      } else {
        countStr += 1;
        arr.push('');
        arr[countStr] += copyStr.shift();
      }
    };
    arr.map((elem) => {
      result += stringProcessing(elem);
    });
  } else {
    return '';
  }
  return result;
}

module.exports = {
  encodeLine
};
