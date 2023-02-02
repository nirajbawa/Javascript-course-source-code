class Animal{
    constructor(name, color)
    {
        this.name = name;
        this.color = color
    }
    run()
    {
        console.log(this.name+" is running\n");
    }
    shout()
    {
        console.log(this.name+" is shouting\n");
    }
}

class Monkey extends Animal{
    eatBanana()
    {
        console.log(this.name, " is eating banana");
    }
}

let ani = new Animal("cat", "black");
let m = new Monkey("monky", "black");

ani.run();
ani.shout();

m.eatBanana();
m.run();
m.shout();

