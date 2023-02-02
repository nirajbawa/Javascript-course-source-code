class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name);
    }
    walk() {
        console.log(`Animal ${this.name} is walking`);
    }
    static capitalize(name) {
        return name[0].toUpperCase() + name.slice(1);
    }
}


let j = new Animal("cat");
let c = Animal.capitalize("cat");
//  j.capitalize("cat"); this not allowed static function  only called using class name not object 
console.log(c);
j.walk();

