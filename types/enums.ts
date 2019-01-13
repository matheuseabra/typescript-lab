// Enums

enum Pets { CAT, DOG, FISH }

let dog: Pets = Pets.DOG
let cat: Pets = Pets.CAT 
let fish: Pets = Pets.FISH 

enum Status { IDLE, ACTIVE, LOADING, ERROR }

let idle: Status.IDLE
let active: Status.ACTIVE
let loading: Status.LOADING
let error: Status.ERROR

enum Positions { FIRST = 1, SECOND, THIRD }

let winner: Positions.FIRST
let second: Positions.SECOND
let third: Positions.THIRD