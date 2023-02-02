let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise completed");
    }, 1000);
});


console.log("main");


promise.then((value)=>{
    console.log("promise then 1");
});

promise.then((value)=>{
    console.log("promise then 2");
});

