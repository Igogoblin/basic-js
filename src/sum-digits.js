const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  let res = n.toString().split('');
  let result=0;
  // console.log(res);
do{
  for(let i=0;i<res.length;i++){
    result+=+res[i];
  }
   console.log(  result+' result ');
  
  // result = res;
  
  // console.log('result ' +result)
  if(result < 10){
    return +result;
  }
}
  while (+result<10){
    res= result.toString().split('');
    result = 0;
    console.log('res '+res);
    for(let i=0;i<res.length;i++){
    result+=+res[i];
  }
    console.log('posl result '+ result);
    res=result;
}
  return result;
}

module.exports = {
  getSumOfDigits
};
