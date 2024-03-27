//4.50

function singSong(){
    console.log("Haapy birthday to you...")

}
singSong() // function ko call krega

// const singSong= function(){

// }

// function add(){
//     console.log(2+4)
// }
// add()
//OR

function add(){
    return(2+4)
}
console.log(add())//6
// we can store another val

const val = add()
console.log(val)//6


// sum of three num
function addThreeNum ( number1,number2,number3){
    return number1 + number2 + number3
}
console.log(addThreeNum(2,5,9))//16 here, we take input for sum

//WAP to check even odd

// function isEven(elm){
//     if(elm %2 === 0){
//         return true
//     }
//         return false
//     }
   
// console.log(isEven(5))

function isEven(elm){
    return elm %2 === 0
}
   
console.log(isEven(4))

//function
//input:string
//output:firstcharacter

function firstChar (elem){
return elem[1]
}
console.log(firstChar("abn"))//b
//5.06

// function 
// input : array, target (number)
// output: index of target if target present in array 
function get (array, target){
for(i=0; i<array.length;i++){
    if(array[i]===target){
        return i
    }
}return -1
}
const myArr =[2,9,50,45]
let ans =  get(myArr,9)
console.log(ans)