// STACK (primitive), HEAP (non-primitive)

// stack me agar hm data lete hai  toh vo copy ho jta hai vice-versa delete bhi (copy)
// heap me direct original value change hta hai (change in original, referance)

//STACK

let college = "oriental"
college = "lnct"
 let anotherName = college;
 anotherName =  "okay"
 console.log(college) //lnct
 console.log(anotherName) //okay

 //heap

 let userOne = {
    email: "abc@gmail.com"

 }
let userTwo = userOne
userTwo.email = "yyh@gmail.com"

console.log(userTwo.email)// yyh@gmail.com
console.log(userOne.email)//yyh@gmail.com
