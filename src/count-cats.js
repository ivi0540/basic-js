const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const cat = '^^';
  let sum = 0;
  matrix.map((elem) => {
    elem.map((elemElem) => {
      if (elemElem === cat) {
        sum += 1;
      }
    });
  });
  return sum;
}

module.exports = {
  countCats
};
