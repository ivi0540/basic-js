const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  function deleteElemInArr(arr, num) {
    return arr.filter((elem, index) => {
      if (index !== num) {
        return true;
      } else {
        return false
      }
    });
  }

  function insertElemInArr(arr, num, newElem) {
    arr[num] = newElem;
    return arr;
  }

  function doubleNext(arr, numCom) {
    if (arr.at(numCom + 1)) {
      return insertElemInArr(arr, numCom, arr[numCom + 1]);
    } else {
      arr = deleteElemInArr(arr, numCom);
      return arr;
    };
  }

  function doublePrev(arr, numCom) {
    if ((arr[numCom] === '--double-prev') && (arr[numCom - 2] === '--discard-next')) {
      arr = deleteElemInArr(arr, numCom - 2);
      arr = deleteElemInArr(arr, numCom - 2);
      arr = deleteElemInArr(arr, numCom - 2);
      return arr;
    }

    if (numCom !== 0) {
      return insertElemInArr(arr, numCom, arr[numCom - 1]);
    } else {
      arr = deleteElemInArr(arr, numCom);
      return arr;
    };
  }

  function discardNext(arr, numCom) {
    if (arr.at(numCom + 1)) {
      arr = deleteElemInArr(arr, numCom);
      arr = deleteElemInArr(arr, numCom);
      return arr;
    } else {
      arr = deleteElemInArr(arr, numCom);
      return arr;
    }
  }

  function discardPrev(arr, numCom) {
    if ((arr[numCom] === '--discard-prev') && (arr[numCom - 2] === '--discard-next')) {
      arr = deleteElemInArr(arr, numCom - 2);
      arr = deleteElemInArr(arr, numCom - 2);
      arr = deleteElemInArr(arr, numCom - 2);
      return arr;
    }
    if (numCom !== 0) {
      arr = deleteElemInArr(arr, numCom - 1);
      arr = deleteElemInArr(arr, numCom - 1);
      return arr;
    } else {
      arr = deleteElemInArr(arr, numCom);
      return arr;
    };
  }

  let result = arr;
  if (!Array.isArray(arr)) {
    result = "'arr' parameter must be an instance of the Array!";
  } else {
    arr.map((elem, index, arr) => {
      if ((elem === '--double-next')) {
        result = doubleNext(arr, index);
      }
      if ((elem === '--double-prev')) {
        result = doublePrev(arr, index);
      }
      if ((elem === '--discard-next')) {
        result = discardNext(arr, index);
      }
      if ((elem === '--discard-prev')) {
        result = discardPrev(arr, index);
      }
    });
  }
  return result;
}

module.exports = {
  transform
};
