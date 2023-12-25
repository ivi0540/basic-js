const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function removeArrayElement(arr, numPos) {
    if (
      (typeof numPos !== typeof 10)
      || (numPos > arr.length)
      || (numPos < 0)
    ) {
      return arr;
    }

    return arr.filter((elem, index) => {
      if (index !== numPos) {
        return true;
      } else {
        return false;
      }
    });
  }

  function searchingElementInArray(arr, elem) {
    let result = -1;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === elem) {
        result = i;
        break;
      }
    }
    return Number(result);
  }

  let copyS1 = s1.split('');
  let copyS2 = s2.split('');

  // let newCopyS1 = [];
  // let newCopyS2 = [];
  let count = 0;

  for (let k = 0; k < s1.length; k += 1) {
    for (let i = 0; i < copyS1.length; i += 1) {
      if (searchingElementInArray(copyS2, copyS1[i]) >= 0) {
        copyS2 = removeArrayElement(copyS2, searchingElementInArray(copyS2, copyS1[i]));
        copyS1 = removeArrayElement(copyS1, i);
        count += 1;
        break;
      }
    }
  };

  return count;
}

module.exports = {
  getCommonCharacterCount
};
