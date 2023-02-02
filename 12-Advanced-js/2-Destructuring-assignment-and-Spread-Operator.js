//destructuring


let arr = [3,5, 8, 9, 20, 25,30];

// let a = arr[0];
// let b = arr[1];

// let [a, b, c, d, ...rest] = arr;

let [a, , , , b , ...rest] = arr;

console.log(a, b, rest);




let obj = {
    name : "niraj",
    lname : "bava"
};


// make sure both var name is same
let { name, lname } = obj;



// spread operator 

let arr2 = [10,20,30];

let obj2 = {...arr2};

console.log(obj2);


function sum(n1,n2,n3)
{
    return n1+n2+n3;
}

console.log(sum(...arr2));


console.log({...obj, name:"hello", lname:"hii"});