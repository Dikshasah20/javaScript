"use strict"; // treat all js code as newer version

// alert(5+5) // error due to we are using node js not browser

//console.log( 5+5 ) console.log("hello") // error due to not having semicolon
console.log( 5+5 ); console.log("hello") // low codereadabilty
/* use mdn for documentation
*/

let name ="diksha" // string
let ok =51512
let isLoggedIn = true


// number=> 2 to power 53
// bigint (use in stockmarket )
//string => ""
//boolean=> true/false
//null=> standalone value (khali hai)
//undefined=>
// symbol=> unique

//object
console.log(typeof ok) // it is used to check  type of datatype
console.log(typeof null); //object
console.log(typeof undefined); // undefined
console.log(typeof number);//number
console.log(typeof string);//string
console.log(typeof boolean);//bolean
console.log(typeof bigInt);//un

/////////////////////////////////////////////////////////////////////////!DOUBT?????????????


//PRIMITIVE
// 7 types:
// string, number,boolean,null,undefined,symbol,bigint

//NON PRIMITIVE DATA Type
/*
ARRAY
OBJECT
 FUNCTION
 all are having data type as object except function

*/




// undefined 
// null

 let firstName;
 console.log(typeof firstName);// undefined
 firstName = "Harshit";
 console.log(typeof firstName, firstName); //  string,Harshit

 let myVariable = null;
console.log(myVariable); //null
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
 console.log(typeof null);// object
// bug , error 

// BigInt
 let myNumber = BigInt(12);
 let sameMyNumber = 123n;
 console.log(myNumber); //12n
 // console.log(Number.MAX_SAFE_INTEGER);
 console.log(myNumber+ sameMyNumber);//135n



