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
  let count = 0;
  let res = '';
  let i = 0;
  let j = 0;
  while (i < str.length) {
    count = 0;
    j = i;
    while (str[j] === str[i]) {
      count += 1;
      j += 1;
    }
    if (count > 1) {
      res += count + str[i];
    } else {
      res += str[i];
    }
    i += count;
  }
  return res;
}

module.exports = {
  encodeLine
};
