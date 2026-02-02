// Demonstrating various console methods for debugging
console.log("This is a standard log message");
console.info("This is an informational message");
console.warn("This is a warning message");
console.error("This is an error message");

// console.table for displaying objects or arrays in a table format
const users = [
    { id: 1, name: "Alice", Role: "Admin" },
    { id: 2, name: "Bob", Role: "Editor" },
    { id: 3, name: "Charlie", Role: "User" }
];
console.table(users);

// console.assert for conditional logging
console.assert(1 === 2, "Assertion failed: 1 is not equal to 2");

// console.clear() // This would clear the console
