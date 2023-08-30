//STACK MEMORY VS HEAP MEMORY
/*
STACK MEMORY IS USED IN PRIMITIVE DATA TYPES

HEAP MEMORY IS USED IN NON PRIMITIVE DATA TYPES
*/
//PRIMITIVE DATA TYPES GIVES A DUPLICATE OF THE ORIGINAL VALUE

let vedsu = "user";

let babdi = vedsu;

babdi = "pillu";

console.log(vedsu);
console.log(babdi);

// orginal value is not changed

// HEAP MEMORY GIVES THE REFERENCE TO ORIGINAL DATA VALUE.

let object = {
    email : "vedsu@gmail.com",
    upi : "vedu@okaxis"
}


let objectTwo = object

objectTwo.email = "bedsu@gmail.com";

console.log(object.email);
console.log(objectTwo.email);







