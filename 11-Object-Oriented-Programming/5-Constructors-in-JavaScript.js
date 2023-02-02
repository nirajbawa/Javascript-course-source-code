//method overwriting

class employee{
    login()
    {
        console.log("employee");
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

let p = new programmer()
p.login();
p.requestCoffee(20);
p.requestLeaves(30);
p.logout();