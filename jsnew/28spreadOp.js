//spread operator in array

const arr1=[1,5,7,9]
const arr2=[5,5,56,8]

// const newArray = [...arr1,...arr2, 86,877]
// console.log(newArray)

// we can spread operator as like
const newArray = [..."abc"] // it sepratelly mkaes string "a","b","c"// har ek index pr string ban jayegi
console.log(newArray)


// now spread operator in object

const obj1 = {key1:"value1", key2:"value2"}
const obj2 = {key3:"value3", key4:"value4"}

const newObj= {...obj1,...obj2, key8: "value8"}
const newMth = {...["obj1","obj2"]}
console.log(newObj)
