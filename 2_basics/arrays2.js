const marvelHeroes = ["Ironman", "spiderman", "thor"]

const dcHeroes = ["batman ", "superman", "flash"]

marvelHeroes.push(dcHeroes);
//console.log(marvelHeroes);
//console.log(marvelHeroes[3][1]);

console.log("***************");
const allHeroes = marvelHeroes.concat(dcHeroes)
console.log(allHeroes);

const allnewHeroes = [ ...marvelHeroes, ...dcHeroes]
 console.log("---------------********-----");

 const realArray = [1,2,3,4, [5,6,7], [1,2,[5, 7]]]
const anotherRealArray = realArray.flat(Infinity)
console.log(anotherRealArray);

let score1 = 100
let score2 = 200
let score3 = 500

console.log(Array.of(score1,score2, score3));
