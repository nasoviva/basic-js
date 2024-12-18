const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  const addition = options.hasOwnProperty('addition') ? options.addition : '';
  const separator = options.hasOwnProperty('separator') ? options.separator : '+';
  const additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';

  for (let i = 0; i < options.repeatTimes - 1; i += 1) {
    res += str;
    for (let j = 0; j < options.additionRepeatTimes - 1; j += 1) {
      res += addition + additionSeparator;
    }
    res += addition;
    res += separator;
  }
  res += str;
  for (let j = 0; j < options.additionRepeatTimes - 1; j += 1) {
    res += addition + additionSeparator;
  }
  res += addition;
  return res;
}

module.exports = {
  repeater
};
