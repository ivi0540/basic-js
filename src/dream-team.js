const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let resultArr = [];
  function arrayProcessing(arr) {
    for (elem of arr) {
      if (typeof elem === typeof '111') {
        resultArr.push(elem);
      }
    }
    return resultArr;
  }
  if (Array.isArray(members) && members.length > 0) {
    let newMembers = arrayProcessing(members);
    if (newMembers.length === 0) {
      return '';
    }

    if (typeof newMembers === typeof '111') {
      return newMembers.trim().toUpperCase()[0];
    }

    for (let i = 0; i <= newMembers.length - 1; i += 1) {
      newMembers[i] = newMembers[i].trim().toUpperCase();
    }

    let result = '';

    for (let i = 0; i <= newMembers.length - 1; i += 1) {
      newMembers[i] = newMembers[i][0];
    }
    newMembers.sort();

    return newMembers.join('');
  } else {
    return '';
  }
}

module.exports = {
  createDreamTeam
};
