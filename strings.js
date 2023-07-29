const name = "ved";
const age = 21;

//string interpolation

console.log(`My name is ${name} and my age is ${age}`);// USE ` INSTEAD OF ""

const repoName = new String('js-mastery');
console.log(repoName[3]);
console.log(repoName.__proto__);
console.log(repoName.toLocaleUpperCase());
console.log(repoName.charAt(4));


const newString = repoName.substring(2, 5);
console.log( newString);

const stringTwo = repoName.slice(-5, 0);
console.log(stringTwo);