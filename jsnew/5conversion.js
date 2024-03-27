let score = "33abbb"
//const {score}= req.body // sometime it can't be understand what's the data-type is

//console.log(typeof score); // this two method used to check type of data
//console.log((typeof(score)));

let valueInNumber = Number(score) // now score is change into number
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // investigation it gives NaN (not a number)  
// not totally relay on number in javascript

// what if number with letter
// in case of null value in place of 33abb it gives 0
// in case of UNDEFINED => NaN
// in case of boolean => true=1/ false=0

/*
"33 => NaN"
"33abbb" => NaN
true=> 1
*/
let isLoggedIn =""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // investigation for checking its value  1=> true
// for empty string it gives value false // "diksha" it give true

let someNumber =55

let stringNumber = String(someNumber)
console.log( stringNumber);//55
console.log(typeof stringNumber); //string

//OR
let age = 66
age = age + "" // trick num-> string
console.log(age) //66
console.log(typeof age)//string


// strinh->num

let newStrg = +"66"
console.log(typeof newStrg) // number