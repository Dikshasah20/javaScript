const fruit = ["grapes", "orange", "mango"]
let fruit2 =[]
let i = 0
console.log(fruit.length)

while(i< fruit.length){
    fruit2.push(fruit[i].toUpperCase())
    i++
}
console.log(fruit2)