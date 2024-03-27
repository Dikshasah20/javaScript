 const name ="diksha"
 const roll = 65

 //console.log(name + roll + "value")// order form to contatinate
console.log(typeof name) //string
console.log(typeof roll) //number

//// String interpulation is used as moderm which is (single backtick)

console.log(`Hello my name is ${name} and my roll is ${roll}`)

const gameName= new String('diksha')//one more method to add (string using new tag with that data-type) // datatype=object


// string indexing 

console.log(gameName [0]) //d
console.log(gameName.__proto__) //object

console.log(gameName.length)


console.log(gameName.charAt('2'))//k
console.log(gameName[2])//k




// trim  (it is used to remove the useless space )
 let firstName= "   cherry    "
 console.log(firstName.length)//13
 firstName= firstName.trim()

 console.log(firstName)//cherry
 console.log(firstName.length)//6

 // upper case & lower case

let oyeChal= "okayBoss"
oyeChal = oyeChal.toLowerCase()
console.log(oyeChal) //okayboss

console.log(gameName.toUpperCase())//original value is not changed

//slice is used to cut a string name by its indexing
// start index
//end index

let thikHai = "bhai"
thikHai= thikHai.slice(0,2)
console.log(thikHai) //bh



// string concatenation

let strg1 ="Diksha"
let strg2 ="sah"
let fullName = strg1 + " " + strg2
console.log(fullName)

// when to use addition of string in number

let stg1 ="5"
let stg2 ="6"
let sum = +stg1 + +stg2 // to convert it in number and some
console.log(sum) //11
console.log(typeof sum) //number



//string templete

let Name = "Diksha"
let age= 20

let aboutMe= `My name is ${Name} and my age is ${age}`

console.log(aboutMe)


