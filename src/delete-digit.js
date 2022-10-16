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
function deleteDigit( n ) {
  let arr = n.toString().split('');
  let array = [];
  let count = n.toString().split('');
  for(let i=0;i<arr.length;i++){
    
    delete count[i];
   console.log('count '+count)
    array.push(+count.join(''));
    count[i]=arr[i];
  }
  return Math.max(...array);
}

module.exports = {
  deleteDigit
};
