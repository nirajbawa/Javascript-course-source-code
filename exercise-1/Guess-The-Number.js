// Guess The Number

let prompt = require("prompt-sync")({sigint:true});


let randno = Math.floor(Math.random() * 100) + 1;

console.log("\n\nguess number between 1 to 100\n\n");

let i = 1;

while(true)
{
    let number = prompt("\n\enter number : ");
    if(number<randno)
    {
        console.log("\nyour entered number is less than random number \n try again...! \n"); 
    }
    else if(number>randno)
    {
        console.log("\nyour entered number is greater than random number \n try again...! \n"); 
    }
    else{
        console.log("\nyour entered number is equal to random number : "+randno+"\n\n"); 
        break;
    }

    i++;
}

console.log("you guess the number in "+i+" chances");