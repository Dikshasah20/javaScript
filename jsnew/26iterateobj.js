//how to iterate object

let person = {
    nickName: "cherry",
    hobbies: ["playingCricket", "movies"],
    time : 1,
    "person's height" : 5.6// we can use multi word in key using string
}
//obj kpo iterate krne k liye hm two tarika use krte hai
//for in loop
//object.key

for(let key in person){
    console.log(person[key])
}
//4:18