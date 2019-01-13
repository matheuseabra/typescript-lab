interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let me = { firstName: "Matheus", lastName: "Seabra" };
let bruna = { firstName: "Bruna", lastName: "Soeiro" };
let rob = { firstName: "Rob", lastName: "Johnson" };

greeter(me);
greeter(bruna);
greeter(rob);
