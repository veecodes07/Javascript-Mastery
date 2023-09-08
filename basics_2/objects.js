//study object singleton and object literals


const mySym = Symbol("key1")

const JsUser = {
    name: "ved",
    "full name": "vgod ",
    [mySym]: "mykey1",
    age: 21,
    location: "mumbai",
    email: "vgod@gmail.com"
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "vedsu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "vedsu@microsoft.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello js user");

}

JsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}`);

}


console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo);
console.log(JsUser.greetingTwo());