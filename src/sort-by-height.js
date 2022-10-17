const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let result = [];
  function isT(value){
    return value!=-1;
  }
  let inter = arr.filter(isT).sort(function (a,b){return a-b});
  console.log(inter)
  for(let i = 0;i<arr.length;i++){
    if(arr[i]==-1){
      result.push(arr[i]);
    }else {
      result.push(inter.shift());
    }
//     if(arr[i]==-1&&i==0){
//       result.push(arr[i]);
//      continue;
//     }else if(arr[i]!=-1){
//       inter.push(arr[i]);
      
//     }
//     if(arr[i]==-1 &&inter.length>0
//               ||i==arr.length-1
//             ){
//       result = result.concat(inter.sort(function (a,b){return a-b}));
//       console.log('result '+ result)
//       inter=[];
//       console.log('inter '+inter)
//     }
//     if(arr[i]==-1){
//      result.push(arr[i]);
//     }
 
  }
  return result;
}
module.exports = {
  sortByHeight
};
