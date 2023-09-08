const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.loggedIn = false

//console.log(tinderUser);
const regularUser = {
    email: "vedsu@gmail",
    fullname: {
        userfullname: {
        firstname: "sammy",
        lastname: "vammy"
    }
}
}
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {
3: "a", 4: "b"
}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

//can use {...obj1, ...obj2} as well to spread and merge objects
