let variable = "Hello! I'm a string variable"

function f(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        // b. a’s scope is limited to the body of f while b’s scope is 
        // limited to the containing if statement’s block.
        return b;
    }

    // Error: 'b' doesn't have access to outer scope
    //return b;
}

try {
    throw "error!";
}
catch (e) {
    console.log("Oh okay.");
}

// Error: 'e' doesn't exist here
//console.log(e);

//a++; // Error: Do not to use 'a' before it's declared;
let a;

function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }

    return x;
}

f(false, 0); // returns '0'
f(true, 0);  // returns '100'

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Florianópolis";
        getCity = function() {
            return city;
        }
    }

    return getCity();
}