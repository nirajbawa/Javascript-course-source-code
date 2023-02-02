let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise 1 completed");
    },10000);
});

let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("promise 2 failed"));
        // resolve("promise 1 completed");
    },2000);
});

let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise 3 completed");
    },3000);
});


//let promise_all = Promise.all([p1,p2,p3]);

//promise_all.then((value)=>{
    // console.log(value);
//}); // all resolve require


// let promise_all = Promise.allSettled([p1,p2,p3]);

// promise_all.then((value)=>{
//     console.log(value);
// }); //not all resolve requires


// let promise_all = Promise.race([p1,p2,p3]);

// promise_all.then((value)=>{
//     console.log(value);
// }); //return resolve first // all resolve


// let promise_all = Promise.any([p1,p2,p3]);

// promise_all.then((value)=>{
//     console.log(value);
// }); //return resolve first // not all resolve requires


// let promise_all = Promise.resolve(p1);

// promise_all.then((value)=>{
//     console.log(value);
// }); // return resolve promise


let promise_all = Promise.reject(p2);

promise_all.then((value)=>{
    console.log(value);
}); // return rejected promise


