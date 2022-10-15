const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(treirArr) {
        var depthArr = 0;
        if (Array.isArray(treirArr)) {
            depthArr += 1 + Math.max(0, ...treirArr.map(element => this.calculateDepth(element)));
        }
        return depthArr;

        // var s1 = JSON.stringify(treirArr);
        // var m1 = [...s1];
        // var m2 = m1.filter(i=>(i=="[" || i=="]"));
        // var s2 = m2.join("");
        // counter=-1;
        // for(s="[[[[]]][[[]]]]"; s.length != 0; counter++){
        //    s = s.replace(/\[\]/g, "");
        // }


  }
//   if(arr.filter(i => i.constructor.name === "Array").length != 0){
//     return 1 + calculateDepth([].concat(...treirArr.filter(i => i.constructor.name === "Array")));
//  } else {
//     return 0;
//  }
// ----------------------------------------------------------------------
// return x <= treirArr.filter(i => i.constructor.name === "Array").length != 0 ? 1 + calculateDepth([].concat(...treirArr.filter(i => i.constructor.name === "Array"))) : 0;


}

module.exports = {
  DepthCalculator
};
