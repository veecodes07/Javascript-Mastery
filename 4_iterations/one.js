// ///FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element ==5) {
//         console.log("5 is best");
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value is ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(i + "*" + j + ' = ' + i*j);
        
//     }
    
// }


// let array = ["flash", "batman", "hero"]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
    
// }


//break and continue keyword

for (let index = 0; ; index++) {
    if( index ==5 ) {
        console.log(`detected 5`);
        break // use continue keyword instead so it doesmt break the loop but continues
    }

    console.log( `value of i os ${index}`);
    
}

