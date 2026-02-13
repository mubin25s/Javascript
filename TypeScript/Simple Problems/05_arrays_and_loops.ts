// 05 Arrays and Loops
let fruits: string[] = ["Apple", "Banana", "Cherry"];
fruits.push("Mango");

console.log("Fruits list using for-of:");
for (let fruit of fruits) {
    console.log(`- ${fruit}`);
}

// Complex Array mapping
let numbers: number[] = [1, 2, 3, 4, 5];
let squares = numbers.map(n => n * n);
console.log(`Squares: ${squares}`);

// Sum using reduce
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of numbers: ${sum}`);
