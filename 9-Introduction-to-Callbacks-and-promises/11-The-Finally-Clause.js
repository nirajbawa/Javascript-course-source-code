// try{
//     console.log(program);
//     console.log("program can't run sunccessfully");
// }
// catch(e)
// {
//     console.log("this is an error");
//     console.log(program);
//     console.log(e.name);
// }
// finally{
//     console.log("finally execute");
// }

let sum = (a,b) => {
    try{
        console.log("program can't run sunccessfully");
        return a+b;
    }
    catch(e)
    {
        console.log("this is an error");
        console.log(e.name);
    }
    finally{
        console.log("finally execute");
    }
}

let sub = (a,b) => {
    return a-b;
}

console.log("start");

console.log(sum(1,2));
console.log(sub(1,2));

console.log("end");

