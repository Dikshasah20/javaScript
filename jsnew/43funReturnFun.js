// function return function


//  function myfun (){
//     return { name: "diksha", roll:65}
//  }
//  const a = myfun()
//  console.log(a)

 function myfun (){
    function print(){
        console.log("hello")
    }
    return print
 }
 const a = myfun()
//  a()

console.log(a())