const user = {
    name: "vgod",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.name}, welcome to website`);
        console.log(this);

    }

}
//user.welcomeMessage()
//user.name = "sam"
//user.welcomeMessage()

console.log(this);

//----------------this was THIS KEYWORD STUDY---------------------

//---------ARROW FUNCTION-----------------------

//EXPLICIT RETURN IS WHEN YOU USE RETURN KEYWORD .
//RETURN KEYWORD MUST BE USED IN BRACES
//NEED NOT USE RETURN KEYWORD IN PARANTHESIS

//EXAMPLE = 

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4));//here it is an arrow function which is explicit

//INPLICIT ARROW FUNCTION

const AddOne = (num1, num2) => (num1 + num2)

console.log(AddOne(3, 4));