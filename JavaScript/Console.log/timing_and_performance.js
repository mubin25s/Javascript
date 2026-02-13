// Demonstrating performance timing with console.time
console.time("Loop Timer");

let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum += i;
}

console.timeEnd("Loop Timer");

// Demonstrating console.count for tracking occurrences
function trackExecution() {
    console.count("Function executed");
}

trackExecution();
trackExecution();
trackExecution();
