// using const in array is safe; here we can perform its operation without creating new array
// jb bhi referance type use karna hoga tb mainly const datatype use karege

// use const for creating array

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11
fruits.push("banana");
console.log(fruits);