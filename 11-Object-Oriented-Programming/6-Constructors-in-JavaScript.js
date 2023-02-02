class employee{
    constructor(name)
    {
        this.name = name;
    }
    login()
    {
        console.log("employee "+this.name);
    }
    logout()
    {
        console.log("employee logouted");
    }
    requestLeaves(nofleaves)
    {
        console.log(`employees has requested ${nofleaves} leaves - Auto approved`);
    }
}


class programmer extends employee{
    // constructor(...args)
    // {
    //     super(...args); // constructor is not present in child class so js engine creates this type of constructor automatically
    // }

    constructor(name)
    {
        super(name);
        console.log(`programmers constructor is called ${this.name}`);
    }

    requestCoffee(x)
    {
        console.log(`employee has requested ${x} coffees`);
    }

    requestLeaves(nofleaves)
    {
        super.requestLeaves(nofleaves);
        console.log("one extra is granted");
        // console.log(`employees has requested ${nofleaves+1} leaves - Auto approved {one extra}`);
    }

}

let p = new programmer("niraj");
p.login();
p.requestCoffee(20);
p.requestLeaves(30);
p.logout();