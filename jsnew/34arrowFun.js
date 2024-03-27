// Arrow function

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }
const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}
singHappyBirthday()

const sumThreeNumbers = (number1, number2, number3)=>{
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans)



// const isEven = (number)=>{
//     return number % 2 === 0;
// }

const isEven = number => number %2 ===0 // if we have single parrameter than we can use without parenthasis


const val = isEven(5)
console.log(val)

const firstChar = (anyString)=>{
    return anyString[0];
}
const ok = firstChar("hello")
console.log(ok)

const findTarget = (array, target)=>{
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArr = [5,6,88,5554,4]
const elm = findTarget(myArr,88)
console.log(elm)