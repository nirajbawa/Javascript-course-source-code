
let a = {
    name : "niraj",
    lastname : "bava",
    run : ()=>{
        console.log("hii");
    }
}


console.log(a);

let p = {
    name : "niraj",
    run : ()=>{
        console.log("hello");
    }
}


// p.run();
a.__proto__ = p;
a.run();
console.log(p);

p.__proto__ = {
    a:"this"
}


console.log(a.a);
