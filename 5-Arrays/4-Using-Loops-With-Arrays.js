let num = [3, 54, 1, 2, 4];

console.log("\n\narray using for loop : \n\n");

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}


console.log("\n\narray array using for each loop : \n\n");

num.forEach((element)=>{
    console.log(element);
})
 

// string

console.log("\n\narray from string  : \n\n");

let name = "niraj";

let array = Array.from(name);

console.log(array);

// for of loop

console.log("\n\narray for of loop  : \n\n");

for(let i of name)
{
    console.log(i);
}


// for in loop

console.log("\n\narray for in loop  : \n\n");

for(let i in name)
{
    console.log(name[i]);
}




