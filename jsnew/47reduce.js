//reduce method

const arr =[5,6,55,2,8]

//aim : sum of all value

 const sum = arr.reduce((accumulator, currentValue)=> accumulator + currentValue,0) // here 0 is initial val 
console.log(sum)// 76

// accumulator,  cuurrentValue ,  return
// 5                 6               11
//11                  55              66
//66                 2               68
//68                  8              76

const userCart= [
    {productId:1 , productName: "mobile", price:1200},
    {productId:2 , productName: "lapi", price:22200},
    {productId:3 , productName: "tv", price:12000},
    {productId:4 , productName: "machine", price:5000},

]
 const check = userCart.reduce((totalPrice, currentProduct)=> totalPrice + currentProduct.price,0)
 console.log(check)