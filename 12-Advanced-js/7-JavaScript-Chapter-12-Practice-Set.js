

//Q1
let p1 = (text) =>{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            resolve(text);
        }, 2000);
    });
}

(async()=>{
    let a = await p1("hello");
    let b = await p1("word");
    console.log(a,b);
})()



//Q2
function avg(n1,n2,n3,n4)
{
    return (n1+n2+n3+n4)/4;
}

let a = [10,20,30,40];

console.log("the average : ", avg(...a));

//Q3

let p2 = (text, n=2) =>{
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
            resolve(text);
        }, 1000*n);
    });
}

(async()=>{
    let a = await p2("hello", 3);
    let b = await p2("word", 4);
    console.log(a,b);
})()

//Q4

function simpleInterest(p,r,t)
{
    return (p*r*t)/100;
}

console.log(simpleInterest(1000, 5, 1));