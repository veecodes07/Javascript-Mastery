let a = 300;
 //SCOPE WHICH CAN BE USED OUTSIDE THESE CURLY BRACES IS GLOBAL SCOPE. 
if(true) {   //BLOCK SCOPE
    let a = 10;
    const b = 20;
    console.log("INNER: ", a);
}

console.log( a);

//NESTED SCOPE AND CLOSURE
//CLOSURE IS WHEN CHILD FUNCTION CAN ACCESS PARENT FUNCTION VARIABLE  BUT PARENT CANNOT ACCESS CHILD FUNC VARIABLE

function one () {
    const username = "ved"

    function two() {
        website = "youtube"
        console.log(username);
    }
    two()
}
one()

//IF A FUNCTION IS DECLARED ON ITS OWN THEN YOU CAN CONSOLE LOG BEFORE THE FUNCTION.
//BUT IF THE FUNCTION IS HELD IN A VARIABLE AND EXECUTED BEFORE DECLARATION THEN GIVES ERROR
//EXAMPLE -
addTwo(5)
const addTwo = function(num){
    return num + 2;
}
//this will give error


AddOne(5)
function AddOne(num) {
    return num + 2
}
//this will not give error THUIS is HOISTING