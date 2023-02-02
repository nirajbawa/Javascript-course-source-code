

// console.log(a);
console.log(b); // var can accsess before declareation but not with value


// greet();

// function greet()
// {
//     console.log("good morning");
// }

// greet();


var b = 20;  // declaration hoisted to the top but initialization is not

// let b = 20; // with let and const can't access before intialization

console.log(b);


// hello();
// hello2();



let hello = () =>{
    console.log("hello");
    hello2();
}

var hello2 = () =>{
    console.log("hii");
}

// function expresstion can't hoisted

hello()


