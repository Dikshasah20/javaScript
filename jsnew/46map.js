//map method
// map hamesha new array deta hai return me

const arr = [ 2,9,5,6,7]

// const squareNum = arr.map(function (elm){
//     return elm *elm
// })
// console.log(squareNum)

// const suareNum = arr.map((elm , index) => `index: ${index}, ${elm *elm}` )
// console.log(suareNum)

const user = [
    { name:"diksha", _id: 123, age:25 },
    { name:"depa", _id: 123, age:23 },
    { name:"mohit", _id: 123, age:15 },
    { name:"shivani", _id: 12355, age:24 },

]

//  const firstName = user.map(function(elm){
//     console.log(elm.name)
// })
// console.log(firstName)

const firstName = user.map((elm)=> elm.name )
console.log(firstName)

