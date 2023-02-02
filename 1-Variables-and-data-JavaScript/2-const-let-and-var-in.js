


console.log("let : \n");

// let is block scope varible means it scope for only that block where it's declare.

// properties of let :

//      1) it is never redeclare in same block.

// ex: 

    let a = 2;
    console.log(a);
    
    // let a = 20; this is not allowed with let

    console.log(a);

//       2) let can update in same block where it is declare

// ex :

    let c = 4;
    console.log(c);
    c = 5;
    console.log(c);

//        3) if let is declare in globle scope so it updatable in its parent block.
    {
        c = 30;
        console.log(c);
    }


//         3) it's possible to declare let in parent block but if is redeclare in parent block so not access before initializaion in parent block
// ex :

    {
        // console.log(c); // this is not allowed
        let c = 20;
        console.log(c);
    }

    {
        console.log(c);
    }
    

//         4) default value of let is undefined

    let h;
    console.log(h);


console.log("\n\nvar \n");


// var is global scope variable means it is declare in child block so it also access able outside that block.
// so it declare any where it can access every where 


//  1) it var we access var before declaration so we get output undifine with let compiler will throw error

// ex : 

console.log(b);  // this will work

var b = 10;

console.log(b);


//   2) it will it will redeclare in same block child block and in child block is access before declaration

var b = 20;
var b = 40;

{
    console.log(b);
    var b = 30;
    console.log(b);
}

// console.log(b);


//   3) default value of var is undefined

var d;
console.log(d);


console.log("\n\nconst : \n");


// const means constant const is use to declare contant variable in javascirpt 
// we can not update constant in same and child block we can not redefine and declare cont in same or child block

const i = 80;

console.log(i);

// i = 80; // this not allowed


console.log(i);

// const i = 20; // this not allowed
 
console.log(i);

{
    // i = 20; // this not allowed
    // console.log(i); 
    // const i = 20; // this not allowed
    console.log(i);
}

console.log(i);

