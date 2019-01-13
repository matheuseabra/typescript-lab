//Example 1
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) { //the function's argument implementsa interface
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

//Example 2
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

//Readonly properties
interface Geoposition {
    readonly latitude: number;
    readonly longitude: number;
}

let newYork: Geoposition = {
    latitude: 40.730610,
    longitude: -73.935242
}

let Japan: Geoposition = {
    latitude: 35.652832,
    longitude: 139.839478
}

let Chile: Geoposition = {
    latitude: 33.4489,
    longitude: 70.6693
}