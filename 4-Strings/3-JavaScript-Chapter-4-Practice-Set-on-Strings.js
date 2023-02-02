// Q1)

console.log("har\"".length);


// Q2)

let word = "Niraj bava"

console.log(word.includes("bava"));


console.log(word.endsWith("bava"));

console.log(word.startsWith("Niraj"));


// Q3)

console.log(word.toLowerCase());

// Q4)

let str2 = "please give rs 1000";

let amount = str2.slice("please give rs".length+1)

console.log(typeof Number.parseInt(amount));

//Q5)

let firend = "niraj";
firend[3] = "r";  //we can not change the string 
console.log(firend)


// number to string

let num = 32;

console.log(typeof num);
console.log(typeof String(num));