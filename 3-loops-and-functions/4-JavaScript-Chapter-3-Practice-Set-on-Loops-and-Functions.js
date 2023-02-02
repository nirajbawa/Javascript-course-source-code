

// Q 1)

let obj = {harry : 98, rohan : 70, aakash : 7};


for(let i = 0; i<Object.keys(obj).length; i++)
{
    console.log("the marks of "+Object.keys(obj)[i]+" is " + obj[Object.keys(obj)[i]]);
}



// Q 2)

for(let a in obj)
{
    console.log("marks of "+a+" is : "+obj[a]);
}


// Q3

let prompt = require("prompt-sync")({sigint:true});


while(true)
{
    let contact_number = prompt("enter contact number : ");
    if(contact_number!="")
    {
        break;
    }
    console.log("\ntry again\n");
}


// Q 4)


let mean = (a,b,c,d,e) =>{
    console.log("the mean is : "+((a+b+c+d+e)/5));
}

let min = (n1,n2,n3,n4,n5) =>
{
    if(n1<n2 && n1<n3 && n1<n4 && n1<n5)
    {
        console.log("\n\nn1 "+n1+" is less than all\n\n");
    }
    else if(n2<n3 && n2<n4 && n2<n5)
    {
        console.log("\n\nn2 "+n2+" is less than all\n\n");
    }
    else if(n3<n4 && n3<n5){
        console.log("\n\nn3 "+n3+" is less than all\n\n");
    }
    else if(n4<n5){
        console.log("\n\nn4 "+n4+" is less than all\n\n");
    }
    else{  
        console.log("\n\nn5 "+n5+" is less than all\n\n");
    }

}


let n1 = prompt("\n\nenter num 1 : ");
let n2 = prompt("\n\nenter num 2 : ");
let n3 = prompt("\n\nenter num 3 : ");
let n4 = prompt("\n\nenter num 4 : ");
let n5 = prompt("\n\nenter num 5 : ");


min(n1, n2, n3, n4,n5);
mean(Number.parseInt(n1), Number.parseInt(n2), Number.parseInt(n3), Number.parseInt(n4), Number.parseInt(n5));