const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  let count = 0;
  let suor = s2.split('');
  for(let i = 0;i<s1.split("").length;i++){
    // console.log("s1[i] "+s1[i]);
    for(let j = 0;j<suor.length;j++){
      console.log('s1[j] suor[j] '+ s1[i] +" : " + suor[j]);
      if(s1[i]==suor[j]){
        count++;
        delete suor[j];
        console.log(suor);
        break;
      }
    }
    
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
