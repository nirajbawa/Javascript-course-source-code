class Animal{
    constructor(name, color)
    {
        this._name = name;
        this.color = color;
    }
    run()
    {
        console.log(this._name+" is running\n");
    }
    shout()
    {
        console.log(this._name+" is shouting\n");
    }
    get name()
    {
        return this._name;
    }
    set name(nname)
    {
        this._name = nname;
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

ani.name = "monkey";
console.log(ani.name);

console.log(ani instanceof Animal);

console.log(m instanceof Animal);
console.log(m instanceof Monkey);

