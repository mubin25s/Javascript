// Generics Basics
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log(`String Output: ${output1}`);
console.log(`Number Output: ${output2}`);

// Generic Interface
interface Box<T> {
    content: T;
}

let box: Box<number> = { content: 50 };
console.log(`Box Content: ${box.content}`);

// Generic Class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, addFn: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = addFn;
    }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);

console.log(`Generic Addition: ${myGenericNumber.add(10, 20)}`);
