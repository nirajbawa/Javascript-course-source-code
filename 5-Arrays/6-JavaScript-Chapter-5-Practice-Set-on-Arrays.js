let prompt = require("prompt-sync")({sigint:true});


// Q1)

console.log("\n\nQ1 : \n\n");

let a = [10,20,30,40,50];

console.log(a);

let input = Number.parseInt(prompt("enter number : "));

a.push(input);

console.log(a);

// Q2 :

console.log("\n\nQ2 : \n\n");

while(true)
{
    let ind = Number.parseInt(prompt("enter number : "));

    if(ind==0)
    {
        a.push(ind)
        break;
    }
    a.push(ind);
}


console.log(a);


// Q3

console.log("\n\nQ3 : \n\n");

console.log(a);

let fillarray = a.filter((value)=>{
    return (value%10) == 0;
})

console.log(`filtered array : ${fillarray}`);

// Q4

console.log("\n\nQ4 : \n\n");

console.log(a);


let sqarr = a.map((value)=>{
    return value*value;
})

console.log(`square array : ${sqarr}`);

// Q5

console.log("\n\nQ5 : \n\n");

let c = [1,2,3,4];

console.log(c);

let fact = c.reduce((v1, v2)=>{
    return v1*v2;
})


console.log(`factorial is : ${fact}`);