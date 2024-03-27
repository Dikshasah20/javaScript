// important array method

//1. for each
//2. map
//3. filter
//4.reduce

// Foreach => yeh return me new array nhi deta

// const array = [5,6,8,7,55]
// function func( number , index){
//     console.log(`index is ${index} , number is ${number}`)
// }
// array.forEach(function(number, index){
//     console.log(`index is ${index}  number is ${number}`)
// });

// array.forEach(function(number){
//     console.log(number*3)
// })

const user = [
    { name:"diksha", _id: 123, age:25 },
    { name:"depa", _id: 123, age:23 },
    { name:"mohit", _id: 123, age:15 },
    { name:"shivani", _id: 12355, age:24 },

]
// user.forEach(function(elm){
//     console.log(elm.name)
// })

user.forEach((elm)=>{
    console.log(elm.name)
})