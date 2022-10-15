

// function dateSample(sampleActivity){
//     const MODERN_ACTIVITY = 15;
// const HALF_LIFE_PERIOD = 5730;
//     if(typeof sampleActivity != 'string'||sampleActivity>15|| sampleActivity<=0 ){
//         return false;
//     }
//     return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) * HALF_LIFE_PERIOD / Math.LN2);
// }

function dateSample(sampleActivity) {
    let MODERN_ACTIVITY = 15;
    let HALF_LIFE_PERIOD = 5730;
    if (sampleActivity > 0 && typeof sampleActivity == 'string' && sampleActivity <= MODERN_ACTIVITY) {
        return Math.ceil ( Math.log ( MODERN_ACTIVITY / +sampleActivity ) * HALF_LIFE_PERIOD / Math.LN2);
    }
    return false;
}



module.exports = {
    dateSample
};


// ||typeof +s!=="number"||typeof +s<=0