let nums = [10,30,20,30];
console.log(typeof nums);


// array methods


// tostring

console.log("\n\narray tostring\n\n");

let b = nums.toString();
console.log(b);

// join 

console.log("\n\narray join\n\n");

let c = nums.join("-");

console.log(c);

console.log(typeof c);

// pop
console.log("\n\narray pop\n\n");

console.log(nums);
let d = nums.pop();
console.log(d);
console.log(nums);


// push()
console.log("\n\narray push\n\n");
let e = nums.push(85);
console.log(e); // return new array length
console.log(nums);

// shift 
// removes element from start of array 
console.log("\n\narray shift\n\n");
let f = nums.shift();
console.log(f);
console.log(nums);

// unshift
// removes element from end of array 
console.log("\n\narray unshift\n\n");
let g = nums.unshift(80);
console.log(g);
console.log(nums);