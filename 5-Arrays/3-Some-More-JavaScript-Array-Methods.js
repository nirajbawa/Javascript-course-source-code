let nums = [10,20,30,40,50,60,70,80,90,100];


console.log("\n\narray delete method : \n\n");

console.log(nums.length);

delete nums[0];

console.log(nums);
console.log(nums.length);


// concate

console.log("\n\narray concate method : \n\n");


let nums2 = [110,120,130,150];

let nums3 = [160,170,180,190];

// those not change existing array

let newarray = nums.concat(nums2, nums3);

console.log(newarray);


console.log("\n\narray sort method : \n\n");


// it sort the elements by alphabetically check numbers first character and arrange accordingly using first character of number

nums.sort();

console.log(nums);


// sort in asc and desc

let compareasc = (a,b) =>{
    return a-b;
}

console.log("\n\narray asc method : \n\n");

nums.sort(compareasc);

console.log(nums);

console.log("\n\narray desc method : \n\n");

let comparedesc = (a,b) =>{
    return b-a;
}

nums.sort(comparedesc);

console.log(nums);


// splice and slice

console.log("\n\narray splice method : \n\n");

console.log(nums);
        // s e    values
let delvalues = nums.splice(2,3,101,102,103); // add values between some indexes
// return deleted values array
console.log("deleted values are : "+delvalues);

console.log(nums);

console.log("\n\narray slice method : \n\n");

            //         s,l-1
let slval = nums.slice(2,4);

// its not create new array

console.log("deleted values are : "+slval);
console.log(nums);
