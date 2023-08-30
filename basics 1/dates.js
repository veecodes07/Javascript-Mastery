let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log(typeof myDate);
//Dates are objects

const createDate = new Date(2023, 0, 23, 5, 3);
console.log(createDate.toLocaleString());

//const createDate = new Date("2023-01-14"); yy mm dd

let myTimeStamp = Date.now();
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate() + 1);
console.log( newDate.getDay());


//we can make an object in the LocaleString Method.
 newDate.toLocaleString('default', {
    weekday: "long",
    
 })
