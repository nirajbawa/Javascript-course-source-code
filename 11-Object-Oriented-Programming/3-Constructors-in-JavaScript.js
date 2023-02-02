class Railwayform{
    constructor(name)
    {
        this.name = name;
        console.log("\n\nconstructor called\n");
    }
    submit()
    {
        console.log(this.name,"form sumitted\n");
    }
    cancel()
    {
        console.log(this.name, "the for cancelled\n");
    }
    fill(name)
    {
        this.name = name;
    }
}

let obj1 = new Railwayform("niraj");
let obj2 = new Railwayform("bava");

// obj1.fill("name");
obj1.submit();
obj1.cancel();

// obj2.fill("bava");
obj2.submit();
obj2.cancel();

