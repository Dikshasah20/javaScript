// Diffrerance between dot and bracket notation
const key ="email"
let person = {
    nickName: "cherry",
    hobbies: ["playingCricket", "movies"],
    time : 1,
    "person's height" : 5.6// we can use multi word in key using string
}
console.log(person.hobbies)
console.log(person["person's height"])

// how to add key in person 
person.key = "abv@.com"
console.log(person)
// here we want to change the key as email how?

person[key] = "abc@33gmail.com"
console.log(person)

