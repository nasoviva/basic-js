const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  let i = 0;
  while (i < names.length) {
    const name = names[i];
    if (!res.includes(name)) {
      res.push(name);
    }
    else {
      let count = 1;
      let newName = name + "(" + count + ")";
      while (res.includes(newName)) {
        count += 1;
        newName = name + "(" + count + ")";
      }
      res.push(newName);

    }
    i += 1;
  }
  return res;
}

module.exports = {
  renameFiles
};
