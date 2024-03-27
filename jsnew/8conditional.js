let age = 14
if(age>=18){
    console.log("can play ddlc")
}
else{
    console.log("can play mario")
}


// to check even or odd
let value =66
if(value%2===0){
    console.log("even")
}
else{
    console.log("odd")
}


// falsy values 


// false
// ""
// null 
// undefined
// 0

// truthy 
// "abc"
// 1, -1

 let firstName= 0; // "",null, false, undefined,0

 if(firstName){
     console.log(firstName);
 }else{
    console.log("firstName is kinda empty");//print
 }


 // ternary operator / conditional operator 

 let val = 3;
 let drink = val >= 5 ? "coffee" : "milk";
 console.log(drink);//milk


 //AND and OR operator
 

 let Names = "diksha"
 let ages = 25

 /*
 if(Names[0]==="d"){
    console.log("it start with d")
 }
 else(
    console.log("not")
 )
 */

 //And

 if(Names[0]==="d" && ages>="18" ){  // dono sahi hona chahiye in case of AND
    console.log("okay")
 }
 else(
    console.log("not okay")
 )

 //OR

 if(Names[2]==="k"|| ages<=18){  // OR me ek bhi sahi hoga toh chalega
    console.log('hello')
 }
 else(
    console.log('ohh')
 )








 // nested if else

// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number"); //string-> num

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }



// if 
// else if 
// else if 
// else if 
// else 

 let tempInDegree = 50;


if(tempInDegree < 0){
    console.log("extremely cold outside");
}else if(tempInDegree < 16){
    console.log("It is cold outside");
}else if(tempInDegree < 25){
    console.log("wheather is okay ");
}else if(tempInDegree < 35){
    console.log("lets go for swim");
}else if(tempInDegree < 45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}

console.log("hello");