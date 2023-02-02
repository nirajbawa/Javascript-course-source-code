const prompt=require("prompt-sync")({sigint:true}); 

// Q 1)

let age = prompt("enter your age : ");

age = Number.parseInt(age);

if(age>10 && age<20)
{
    console.log("your age is between 10 and 20");
}
else{
    console.log("your age is not between 10 and 20");
}

// Q 2)

switch(age)
{
    case 10:
        console.log("your not able to drive age is between 10");
        break;
    case 20:
        console.log("your able to drive age is than 20");
        break;

    case 30:
        console.log("your able to drive age is than 30");
        break;

    default:
        console.log("your not able to drive");
        break
}


// Q 3)

let num = prompt("enter number : ");

num = Number.parseInt(num);

if(num%2==0 && num%3==0)
{
    console.log("yes your number is divisible by 2 and 3 both");
}
else{
    console.log("yes your number is not divisible by 2 and 3 both");
}

let num2 = prompt("enter number : ");

num = Number.parseInt(num);

if(num2%2==0 || num2%3==0)
{
    console.log("yes your number is divisible by 2 and 3 both");
}
else{
    console.log("yes your number is not divisible by 2 and 3 both");
}

// Q5)

let a = prompt("enter your age : ");

a = Number.parseInt(a);

a>=18?console.log("your age able to drive car") : console.log("your are not able to drive car");

