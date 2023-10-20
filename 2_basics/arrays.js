const array = [0, 1, 2, 3, 4]
const myHero = ["batman", "spiderman"]

const array2 = new Array(1, 2, 3, 4)
console.log(array[1]);

//ARRAY METHODD

 array.push(6)
 array.pop()
 array.unshift(7)
 array.shift()

 console.log(array);

 console.log(array.includes(3));
 console.log(array.indexOf(3));

 const newArray = array.join()

 console.log(array);
 console.log( typeof newArray);

 //splice $ slice deep study
const wow =  array.splice(1, 3);
const bow = array.slice(1,3);
console.log("A",  wow);
console.log("B", bow);
