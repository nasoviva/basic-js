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
  let str = n.toString();
  let res = 0;
  for (let i = 0; i < str.length; i += 1) {
    const current = parseInt(str.slice(0, i) + str.slice(i + 1));
    if (current > res) {
      res = current;
    }
  }
  return res;
}

module.exports = {
  deleteDigit
};
