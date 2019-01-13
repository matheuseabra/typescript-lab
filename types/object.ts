declare function create(o: Object | null): void;

create({
    name: 'Matheus',
    cool: true,
    age: 23  
}); // OK

create(undefined); // OK

create(42) // Error
create("string") // Error
create(false) // Error
create(undefined) // Error
