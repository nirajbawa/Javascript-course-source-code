
console.log("before promise");

let promise = new Promise(function(resolve, reject)
{
    console.log("in promise");
    resolve(56);
    console.log("end promise");
});


setTimeout(()=>{
    console.log("in seTimeout");
},1000);

console.log("after promise");
console.log("promise resolve : ", promise);
