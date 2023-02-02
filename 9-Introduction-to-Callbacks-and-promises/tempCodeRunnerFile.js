setTimeout(()=>{
    console.log("timeout 1");
},2000);


setTimeout(()=>{
    console.log("timeout 2");
},3000);

try{
    setTimeout(()=>{
        
        try{
            console.log("timeout");
            console.log(niraj);
        }
        catch{
            console.log("hello 2");
        }

    },3000);
}
catch(e){
    console.log("hello 1");
}

setTimeout(()=>{
    console.log("timeout 3");
},3000);

