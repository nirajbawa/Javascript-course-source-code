let prompt = require("prompt-sync")({signint:true});

// for loop

console.log("\n\nfor loop : \n\n");

let a = prompt("enter number : ");
a = Number.parseInt(a);

let b = prompt("enter number : ");

b = Number.parseInt(b);

function add(a, b)
{
    let h = avg(a,b);
    return a+b;
    
}

const avg = (a,b) =>{
    console.log("avgrage of a and b : ", (a+b)/2); 
}

console.log("a+b is : " + add(a,b));


console.log("a-b is : " + sub(a,b));


// also work
function sub(a, b)
{
    return a-b;
}



