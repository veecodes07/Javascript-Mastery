// const coding = ["js", "ruby", "java", "python"]
//FOREACH DOES NOT RETURN ITEM , GIVES UNDEFINED OUTPUT

// const value = coding.forEach((item) => {
//     return item

// })
// console.log(value); //this will give undefined because foreach doesnot return value in array


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNum = nums.filter((num)=> {
    return num > 4 //when in scope, curly braces YOU HAVE TO USE RETURN KEYWORD
})

console.log(newNum);