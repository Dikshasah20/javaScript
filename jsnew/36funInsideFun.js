// function inside function
const val=  ()=>{
console.log("inside app")

const menu= ()=>{
    console.log("this is my func function")
}

const addTwoNum = (num1, num2)=>{
return num1 + num2
}

const mulTwoNum = (num3, num4)=>{
    return num3 * num4
}
menu()
console.log(addTwoNum(5,6))//11
console.log(mulTwoNum(5,9))//45
}
val()// inside app