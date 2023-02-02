let p1 = new Promise((resolve, reject)=>{
    console.log("p1 pandding");
    
    setTimeout(()=>{
        // console.log("p1 complete");
        resolve("p1 complete");
    }, 1000);

})


// Promise Chaining

p1.then((value)=>{

    console.log(value);
    
    let a = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve("promise 2 completed");
        },2000);
    });

    return a;

}).then((value)=>{

    console.log(value);
    return 2;

}).then((value)=>{

    console.log(value);

});