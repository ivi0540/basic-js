const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    function removeLayer(arr) {
      let result = [];
      arr.map((elem) => {
        if (Array.isArray(elem)) {
          elem.map((elemElem) => {
            result.push(elemElem);
          });
        }
      });
      return result;
    }

    function isArrInArr(arr) {
      let result = false;
      arr.map((elem) => {
        if (Array.isArray(elem)) {
          result = true;
        }
      });
      return result;
    }

    let count = 1;
    function countNumberLayers(arr) {
      let copyArr = arr;
      if (isArrInArr(copyArr)) {
        count += 1;
        copyArr = removeLayer(copyArr);
        if (isArrInArr(copyArr)) {
          countNumberLayers(copyArr)
        }
      }
      return count;
    }

    if (!Array.isArray(arr)) {
      return 0;
    } else {
      return countNumberLayers(arr);
    }
  };
}

module.exports = {
  DepthCalculator
};
