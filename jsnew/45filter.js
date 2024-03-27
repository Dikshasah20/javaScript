// filter method => it always return as boolean num true/false
const num = [56,6,7,1,6,8]

//num.filter() => it take input as call back function

 const isEven= num.filter((elm)=>elm %2===0)
 console.log(isEven)