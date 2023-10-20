//IMMEDIATELY INVOKED FUNCTION EXXPRESSIONS(IIFE)

//FUNCTION WHICH IS IMMEDIATELY EXECUTED.
// TO PREVENT THE POLLUTION CAUSED BY THE GLOBAL SCOPES , IIFE IS USED.

//example =
(function chai (){
    console.log(`db connected`);
})();

//() for the main function
//() second for execution


//ARROW FUNC EXAMPLE
( (name) => {
    console.log(`db connected to ${name}`);
})("vgod")