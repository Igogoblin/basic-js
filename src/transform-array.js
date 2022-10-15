const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  if(!Array.isArray(arr)){
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  // --discard-next             удалить следующий эл
  // --discard-prev             удалить предыдущий эл
  // --double-next              продублировать следующий
  // --double-prev              продублировать предыдущий
  let ar = [];
for(let i = 0;i<arr.length;i++){
  if(arr[i]=='--discard-next'){
    i++;
    continue;
  }else if(arr[i]=='--discard-prev'){
    if(arr[i-2]=='--discard-next'){
      continue;
    }
    ar.pop();
  }else if(arr[i]=='--double-next'){
    if(arr.length-1<=i){
      continue;
    }
    ar.push(arr[i+1]);
    continue;
  }else if(arr[i]=='--double-prev'){
    if(i<=0){
      continue;
    }else if(arr[i-2]=='--discard-next'){
      continue;
    }
    ar.push(arr[i-1]);
    continue;
  } else {
    ar.push(arr[i]);
  }

}

  return ar;
}

module.exports = {
  transform
};
