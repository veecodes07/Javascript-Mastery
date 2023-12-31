const promise = new Promise(function(resolve, reject) {

    setTimeout(function(){
        console.log('ASYNC TASK COMPLETED');
        resolve() //this method is very imp in a promise.
    }, 1000)

})

promise.then(function(){ //.then directly realtes to the resolve in above function
    //after execution of first fn then  this is executed
    console.log('promise completed');
})

const promiseTwo = new Promise(function(resolve, reject){
setTimeout(function(){
    resolve({username: "vgod", email: "vgod.com"})
}, 1000)
}
).then(function(user){
    console.log(user)
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "vgod", email: "vgod.com"}
            )
        } else{
            reject('error')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error)
})
