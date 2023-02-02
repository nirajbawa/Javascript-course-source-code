const prompt=require("prompt-sync")({sigint:true}); 

let a = prompt("enter number : ");
console.log(typeof(a));

let b = 20

// if-elseif-else

if(a<b)
    console.log("a less than b");
else if(a>b)
    console.log("a greater than b");
else
    console.log("a equals to b");


let d = prompt("enter number : ");


// ternary operator ?:
console.log("you can in 18's : ", d>=18? "yes":"no");