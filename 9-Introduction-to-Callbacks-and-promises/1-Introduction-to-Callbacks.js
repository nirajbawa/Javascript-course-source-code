
// Syncronous programming
// run in secquence
let prompt = require("prompt-sync")({sigint:true});

let a = prompt("enter value of a : ");
let b = prompt("enter value of b : ");
let c = prompt("enter value of c : ");

console.log(`a = ${a} \nb = ${b} \nc = ${c}`);


//Asyncronous programming
// not run in secquence

console.log("start");

setTimeout(() => {
    console.log("setitmeout");
}, 1000);

console.log("end");


