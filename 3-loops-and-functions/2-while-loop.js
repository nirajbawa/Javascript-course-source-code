let prompt = require("prompt-sync")({signint:true});

// while loop

console.log("\n\nwhile loop : \n\n");

let num = prompt("enter number : ");
num = Number.parseInt(num);


let i = 0;

while(i<num)
{
    console.log(i);
    i++;
} 


console.log("\n\ndo while loop : \n\n");

let size = 0;
let count = 0;

do{
    console.log(count);
    count++;
}while(count<size);