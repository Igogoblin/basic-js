const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  let obj = {};
  let median = "";
  let stapArr = [];
  let domenWord = '';
  for(let i = 0;i<domains.length;i++){
    stapArr = domains[i].split('.').reverse();
    
    for(let j = 0;j<stapArr.length;j++){
      console.log(obj[stapArr[j]]);
      
      if(j==0){
        domenWord="."+stapArr[j];
        console.log('domenWord '+domenWord);
        if(!obj[domenWord]){
        obj[domenWord]=1;
      }else if(obj[domenWord]){
        obj[domenWord]++;
      } 
        continue;
      }
      domenWord+=`.${stapArr[j]}`;
      if(!obj[domenWord]){
        obj[domenWord]=1;
      }else if(obj[domenWord]){
        obj[domenWord]++;
      } 
    }
    domenWord ="";
  }
  return obj;
}

module.exports = {
  getDNSStats
};
