let p1 = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(1);
        }, 5000);
    })
}



(async () =>{
    let a = await p1();
    console.log(a);
})()