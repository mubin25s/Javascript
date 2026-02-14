// Error Handling in TypeScript

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    console.log("Division Result:", divide(10, 2));
    console.log("This will fail:");
    console.log(divide(10, 0));
} catch (e) {
    if (e instanceof Error) {
        console.error("Caught an error:", e.message);
    } else {
        console.error("Caught an unknown error");
    }
} finally {
    console.log("Cleanup or final operations here.");
}

// Custom Error Class
class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateAge(age: number) {
    if (age < 0) {
        throw new ValidationError("Age cannot be negative");
    }
    console.log(`Age ${age} is valid.`);
}

try {
    validateAge(-5);
} catch (e) {
    console.log(`Error type: ${e instanceof ValidationError ? "Validation" : "Unknown"}`);
}
