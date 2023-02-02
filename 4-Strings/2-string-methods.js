let name = "niraj\\";

// length

console.log("\n\nstring length method\n\n");
console.log(name.length);
console.log(name);

// lower and upper

console.log("\n\nstring lower and upper method\n\n");
console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.toLocaleLowerCase());
console.log(name.toLocaleUpperCase());


// slice

console.log("\n\nstring slice method\n\n");

// start, last - 1 ex niraj 0,1,2,3,4, slice(1,3) output : ir  
console.log(name.slice(1,3));

// start to last index show 
console.log(name.slice(1)); // output : iraj

//  replace

console.log("\n\nstring replace method\n\n");

let name2 = "niraj bhai";

console.log(name2.replace("bhai", "bhau"));

console.log(name2);

// concate

console.log("\n\nstring concate method\n\n");

let lname = "bava";
let fname = "niraj";
let fullname = "" ;

console.log(fullname.concat(fname, " ", lname, " sde"));

// trim

console.log("\n\nstring trim method\n\n");

let name3 = "     niraj   ";
console.log(name3.trim());



// print strinbg using for loop

console.log("\n\nprint strinbg using for loop\n\n");

let name4 = "niraj"+"bava";

console.log(name4.length);

// name4[0] = "2" this not valid
for(let i = 0; i<name4.length; i++)
{
    console.log(name4[i]);
}
