// array is mutable (it can change the size of array)


//push pop operratrion

let fruits = ["apple", "grapes", "orange"]
console.log(fruits)
// fruits.push("banana")
// console.log(fruits)
// console.log(typeof fruits)

// //pop
// let popfruit = fruits.pop()//it always pop from last
// // console.log(fruits.pop())// it also return the value
// console.log( "here is the pop fruits",popfruit)//banana

//it always pop from last
console.log(fruits)

//array unshift and shift
//unshift is used to add at starting
fruits.unshift("banana")
console.log(fruits)

//shift is used to remove data from starting
fruits.shift()
console.log(fruits)

//note: push and pop is fast as compare to shift and unshift, kyuki push pop operation prerformed from last but shift and unshift from start so its difficult to arrage first and delete it
