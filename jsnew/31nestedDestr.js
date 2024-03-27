// nested destructuring => destructure

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

// const [{userId}, {gender}] = users
// console.log(userId)//1
// console.log(gender)//male


// we can also changge th val in const also
const [{userId : Id}, {gender}] = users
console.log(userId)
console.log(gender)