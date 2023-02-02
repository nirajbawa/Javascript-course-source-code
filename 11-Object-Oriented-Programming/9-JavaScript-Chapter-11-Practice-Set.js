class complex{

    // Q1
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    
    // Q2
    add(num)
    {
        this.real =  this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
}


let a = new complex(2,4);
let b = new complex(6,2);

a.add(b);

console.log(`${a.real}+${a.imaginary}i`);

//Q3

class Human{
    constructor(name, favfood)
    {
        this.name = name
        this.favfood = favfood;
    }
    walk()
    {
        console.log(`\n${this.name} is walk\n`);
    }
    work()
    {
        console.log(`\n${this.name} go to office\n`);
    }
    eat()
    {
        console.log(`\n${this.name} is eating ${this.favfood}\n`);
    }
}

class student extends Human{
    work(){
        console.log(`\n${this.name} is studing\n`);
    }  
}

let stud = new student("niraj", "dosa");

stud.walk();
stud.work();
stud.eat();

//Q4

console.log(stud instanceof Human);


// Q5 

class complex2{
    get real()
    {
        return this._real = Nreal;
    }

    set real(Nreal)
    {
        this._real = Nreal;
    }

    get real()
    {
        return this._imaginary;
    }

    set imaginary(Nimaginary)
    {
        this._imaginary = Nimaginary;
    }
}


console.log("\n\nQ5");

let c = new complex2();

c._real = 1;
c._imaginary = 2;

console.log(`\n\n${c._real}+${c._imaginary}i`);