// break keywoard
//continue keyword

for( let i =0; i<=10; i++){
    if(i ==4 ){
        break;
    }
    console.log(i)//0123

}


// in continue statement when condition is true is redirected to for condition without printing that number
for( let i =0; i<=10; i++){
    if(i ==4 ){
        continue;
    }
    console.log(i) //012356789

}
