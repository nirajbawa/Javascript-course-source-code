// const sayHello = name => console.log("hello "+name); console.log("hii");
// const sayHello = (name, greeting) => console.log(greeting + " " + name);

const sayHello = name =>{
    console.log("hello "+name); 
}

sayHello("niraj", "good afternoon");


const x = {
    name: "niraj",
    role: "sde",
    exp: 5,
    show: function () {
        console.log(this);
        // let that = this;
        // setTimeout(function(){
        //     // console.log(this);
        //     console.log(`the name is ${that.name}\nrole is ${that.role}`);
        // }, 2000);
        // we no need to pass this using that when we use arrow function it use laxical this
        setTimeout(()=>{
            console.log(`the name is ${this.name}\nrole is ${this.role}`);
        }, 2000);

    }
}

// console.log(x.name, x.exp);
x.show();

