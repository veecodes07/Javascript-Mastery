// FOR OF LOOP

// const greetings = "hello world"

// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }

// for (const iterator of object) { //IN THIS THE OBJECT IS NOT THE JS OBJECT BUT ANY TYPE OF DATA LIKE STRING, ARR, BOOL
    
// }

//MAPPING 
const map = new Map()
map.set('IN' , "INDIA")
map.set('USA', "AMERICA")
map.set('FR', "FRANCE")

console.log(map);

for (const [key , value] of map) { //HERE THE [key , value] is a way of parsing the array

    console.log(key , " : - " , value);
}

//THIS CANNOT BE DONE ON OBJECTS IT WILL GIVE ERROR NOT ITERABLE