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
function encodeLine(str ) {
  let arr = str.split('');
  let result =[];
  let count = 0;
  for(let i = 0;i<arr.length;i++){
     console.log(count);
    // i+=count;
    if(arr[i]==arr[i-1]){
      continue;
    
    }else if(arr[i]!=arr[i+1]){
      result.push(arr[i]);
      // continue;
    }else if(arr[i]==arr[i+1]){
      count = 0;
      for(let j = i;j<arr.length;j++){
         if(arr[j]!=arr[i]){
           break;
         }
        console.log(arr[j]+" "+ arr[i]);
        count++;
      }
      if(count ==0){
         result.push(arr[i]);
      }else {
        result.push(`${count}${arr[i]}`);
      }
     
      console.log("count v konce "+count);
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
