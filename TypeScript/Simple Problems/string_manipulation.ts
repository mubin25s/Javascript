// String Operations
let text: string = "TypeScript is Awesome";

console.log(`Length: ${text.length}`);
console.log(`Uppercase: ${text.toUpperCase()}`);
console.log(`Lowercase: ${text.toLowerCase()}`);
console.log(`Includes 'Awesome': ${text.includes("Awesome")}`);
console.log(`Replace: ${text.replace("Awesome", "Powerful")}`);

// Problem: Reverse a string
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

let original = "Hello";
console.log(`Original: ${original}, Reversed: ${reverseString(original)}`);
