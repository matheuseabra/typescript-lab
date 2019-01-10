// Types

// Boolean
let isDone: boolean = false;
let isActive: boolean = true;

// Number
let age: number = 37;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hello, my name is ${ fullName }`;

//Array
let list: number[] = [1, 2, 3];
let arrNum: Array<number> = [4, 5, 6];
let arrString: string[] = ['Alice', 'Bob', 'John'];

//Tuple

// Declare a tuple type
let x: [string, number];
// Initialize it
let y = ["hello", 10]; // OK
// Initialize it incorrectly
let z = [10, "hello"]; // Error