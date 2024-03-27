// object referance type

// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index
//object me jo key hota hai vo string me hi hota hai

// how to create objects 

const first = {age:20, name:"Diksha"}//object are created in curlly braces // also here 2 key value is store
console.log(typeof first)//object

// How to access data from an object
console.log(first.name)

// We can also make array inside object

let person = {
    nickName: "cherry",
    hobbies: ["playingCricket", "movies"],
    time : 1
}
console.log(person.hobbies)

// How to add new key value pair to object

person.gender = "female"
console.log(person)
//4.03hr

// we can also access the object data using brackets[] instead of dot

console.log(person["nickName"])

// also for adding new key val

person["sport"] = "cricket"
console.log(person)