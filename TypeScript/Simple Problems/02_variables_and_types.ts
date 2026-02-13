// 02 Basic Types
let age: number = 25;
let isStudent: boolean = true;
let firstName: string = "Mubin";
let dynamicData: any = "Could be anything";

console.log(`Name: ${firstName}, Age: ${age}, Student: ${isStudent}`);
console.log(`Any Type: ${dynamicData}`);

// Type casting example
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(`String length using casting: ${strLength}`);
