const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(a) {
  if (!a) {
    return "Unable to determine the time of year!";
  }
  
  if (Object.keys(a).length > 0) {
    throw new Error("Invalid date!");
  }
 // spring,13035600000
  // summer, 20984400000
  // autumn (fall),28846800000
  // winter.  5086800000
//   let ear = 31525200000;
//   let intermediate = Date.parse(a)%ear;
//   let message = (intermediate<5086800000)? 'winter':
//                 (intermediate<13035600000)? 'spring':  
//                 (intermediate<28846800000)? 'autumn':
//                 'winter';
//   // Invalid date!
//  let string ='Unable to determine the time of year!';

try {
  a.getMonth()
} catch {
  throw new Error("Invalid date!");
} finally {

}
const intermediate = a.getMonth();
if(intermediate<2||intermediate>10){
message = 'winter';
}else if(intermediate<5){
message = 'spring';
}else if(intermediate<8){
message = 'summer';
}else if(intermediate<11){
message = 'autumn';
}
return message;
}

module.exports = {
  getSeason
};
