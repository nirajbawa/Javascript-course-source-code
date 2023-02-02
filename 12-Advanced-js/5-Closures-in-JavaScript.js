message = "good global";

function hello() {
    let message = "good morning";
    {
        let message = "good Afternoon";
        console.log("hello 1: " + message);
    }
    console.log("hello 2: " + message);

    let c = function hello2() {
        console.log("hello 4: " + message);
    }
    message = "hii";
    return c;
}



c = hello();
c();


console.log("hello 3: " + message);


function returnfunc() {
    const x = () => {
        let a = 1
        console.log(a);
        const y = () => {
            // let a = 2;
            console.log(a);
            const z = () => {
                // let a = 3;
                console.log(a);
            }
            z();
        }
        y();
    }
    return x;
}

let a = returnfunc();
a();