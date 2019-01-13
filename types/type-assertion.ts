
//Angle Bracket syntax

let Miami: any = "Miami City";

let MiamiLength: number = (<string>Miami).length;

console.log(MiamiLength)

// 'as -' syntax
let Pancakes: any = "Pancake";

let pancakesNumber: number = (Pancakes as string).length;