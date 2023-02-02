// for(let i = 0; i < 1000; i++)
// {
//     console.log(i);
// }

let prompt = require("prompt-sync")({signint:true});

// for loop

console.log("\n\nfor loop : \n\n");

let num = prompt("enter number : ");
num = Number.parseInt(num);


console.log("prime numbers :");

for(let i = 1; i<=num; i++)
{
    let flag = 0;
    for(let j = 2; j<i; j++)
    {
        if((i%j)==0)
        {
            flag = 1;
            break;
        }
        
    }

    if(flag==0)
    {
            console.log(i);
    }
}


// for in loop

console.log("\n\nfor in loop with object: \n\n");

let obj = {
    niraj : 80,
    rahul : 30,
    suraj : 60
}

for(let a in obj)
{
    console.log("marks of "+a+" is : "+obj[a]);
}

console.log("\n\nfor in loop with array: \n\n");

let arr = [20,30,50];

for(let a in arr)
{
    console.log("marks of "+a+" is : "+arr[a]);
}

console.log("\n\nfor in loop of array (only work on array and string): \n\n");


for(let a of arr)
{
    console.log("marks of is : "+a);
}


