async function func() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p1 completed");
        }, 2000);
    });

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("p2 completed");
        }, 5000);
    });

    let a = await p1;
    let b = await p2;

    return [a, b];
}


async function sum(a, b) {
    return a + b;
}



// let f = func();
// let g = sum(1,3);
// console.log("after promise");

// f.then((value)=>{
//     console.log(value);
// })


// console.log(g);


let main1 = async () => {

    let f = await func();
    let g = await sum(1,3);

    console.log("after promise");


    console.log(f);

    console.log(g);

}

main1();