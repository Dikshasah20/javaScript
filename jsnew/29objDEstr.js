// object destructuring

const obj1 ={name:"dk",_id:"abc@12",email:"abc@323"}
const obj2 ={name:"chdk",_id:"fdc@12",email:"ac@323"}

const newObj = obj1.name
const NewObj = obj2.name

console.log(newObj,NewObj)


//or

const band = {
    bandName: "led zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
  };
  
  let { bandName, famousSong, ...restProps } = band;
  console.log(bandName);
  console.log(restProps);