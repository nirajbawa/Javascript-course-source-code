let array = [45, 23, 21];

// map create new array

// in map method it may also return new array after processing but in for each it not return any array

console.log("\n\narray map method : \n\n");

let a = array.map((value, index, array)=>{
    console.log("index is : "+index+" : "+value + " array : "+array);
    return value+1;
})

console.log(a);

// filter is return new array by passing tests


console.log("\n\narray filter method : \n\n");

let b = array.filter((value, index, array)=>{
    console.log("index is : "+index+" : "+value + " array : "+array);
    return value<30; //if we try this doing in map it will return only true and false in map method in new array
});

console.log(b);


// reduce

console.log("\n\narray reduce method : \n\n");

console.log(array);

let c = array.reduce((n1, n2)=>
{
    return n1+n2;
});

console.log(c);
