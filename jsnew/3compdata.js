console.log( "2" < "0");
console.log( 2===4);
console.log( "5">= "7");

console.log(null > 0);// here null is trated as null only
console.log(null >= 0); // here null is trated as number that why it is true
console.log(null ==0) //false

console.log(undefined> 0);
console.log(undefined==0)
console.log(undefined >= 0)
// all undefined term are comes as false

console.log("2"==2) //true bcs it only check vlu not its type
console.log("2"===2)// false bcs it check data type also


// booleans & comparison operator 

// booleans 
// true, false 

let num1 = 7;
let num2 = "7";
let okay;
console.log(okay)
 console.log(num1<num2);//false

// == vs === 
 console.log(num1 === num2); //false

// != vs !==
console.log( num1 != num2)//false , only by num
 console.log(num1 !== num2); //true, with its types