const { NotImplementedError } = require("../extensions/index.js");

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
  let arr = [];
  console.log(options);
  // let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : "+";
  // let addition = options.addition ? options.addition : "";
  const addition = options.hasOwnProperty("addition") ? options.addition : "";
  // let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes
  //   : 1;
  // let additionSeparator = options.additionSeparator ? options.additionSeparator
  //   : "";
  const additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  console.log("separator", separator);

  //   for (let i = 0; i < repeatTimes; i++) {
  //     let txt = "";
  //     if (i === 0) {
  //       arr.push(str + addition);
  //       continue;
  //     }
  //     for (let j = 0; j < additionRepeatTimes; j++) {
  //       txt = addition + additionSeparator;
  //     }
  //     arr.push(
  //       separator + addition + str + txt
  //       // addition+additionSeparator
  //     );
  //   }
  //   return arr.join("");
  str += "";

  let result = "";
  result += str + addition;
  result += addAddition(
    addition,
    options.additionRepeatTimes,
    additionSeparator
  );

  for (let i = 1; i < options.repeatTimes; i++) {
    // result += separator;
    // result += str + addition;
    result +=
      separator +
      str +
      addition +
      addAddition(addition, options.additionRepeatTimes, additionSeparator);
    // ;
    // result += addAddition(
    //   addition,
    //   options.additionRepeatTimes,
    //   additionSeparator
    // );
  }

  return result;
}

function addAddition(addition, times, separator) {
  let result = "";

  for (let i = 1; i < times; i++) {
    // result += separator;
    // result += addition;
    result += separator + addition;
  }

  return result;
}

module.exports = {
  repeater,
};
