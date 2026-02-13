// Functions with Types
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function with type
const multiply = (x: number, y: number): number => x * y;

console.log(`Addition: 5 + 7 = ${add(5, 7)}`);
console.log(`Multiplication: 4 * 3 = ${multiply(4, 3)}`);

// Optional and Default parameters
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

console.log(greet("Mubin"));
console.log(greet("Mubin", "Good Morning"));
