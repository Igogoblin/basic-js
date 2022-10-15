const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(a) {
  let result="";
  if( !Array.isArray(a)){
    return false;
  }
  for(let i of a){
    if(typeof i!='string'){
      continue;
    }
    if(i[0]==" "){
     for(let j = 0;j<i.length-1;j++){
       if(i[j]!=" "){
        result+=i[j];
         break;
       }
     } 
      continue;
    }else if(typeof i == 'string'){
       console.log(i[0]);
    result+=i[0];
    }
  }

  return result.toUpperCase().split('').sort().join("");
}

module.exports = {
  createDreamTeam
};
