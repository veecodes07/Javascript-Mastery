const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

//CHECK WHETHER THE ASSIGNED VALUES ARE TRUE OR FALSE IN CONST VAL = 100;
//FALSY VALUES : false, 0, -0, Bignint, 0n, "", null, undefined, NaN
//TRUTHY VALUES : "0", 'FALSE', " ", [], {}, FUNCTION(){}

// Nullish Coalescing OPerator(??): null undefined
// let val1 ;
// val1 = 5 ?? 10
// val1= null ?? 5
// val1 = 10 ?? 5
// val1 = undefined ?? 5

// console.log(" val1");

// terniary operator

// condition ? true : false

// const coffee = 100
// coffee >= 100 ? console.log("less than "): console.log("more than");