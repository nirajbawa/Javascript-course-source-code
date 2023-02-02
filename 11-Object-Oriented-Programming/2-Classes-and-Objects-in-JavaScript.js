class Railwayform{
    
    submit()
    {
        console.log(this.name,"form sumitted");
    }
    cancel()
    {
        console.log(this.name, "the for cancelled");
    }
    fill(name)
    {
        this.name = name;
    }
}

let obj1 = new Railwayform();
let obj2 = new Railwayform();

obj1.fill("name");
obj1.submit();
obj1.cancel();

obj2.fill("bava");
obj2.submit();
obj2.cancel();

