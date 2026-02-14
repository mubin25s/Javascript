// Advanced TypeScript Types

// 1. Conditional Types
type IsString<T> = T extends string ? "Yes" : "No";
type T1 = IsString<string>;  // "Yes"
type T2 = IsString<number>;  // "No"

// Usage example
const checkString: T1 = "Yes";
const checkNumber: T2 = "No";
console.log(`Is string a string? ${checkString}`);
console.log(`Is number a string? ${checkNumber}`);

// 2. Mapped Types
type CustomReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

interface Employee {
    id: number;
    department: string;
}

type ReadOnlyEmployee = CustomReadOnly<Employee>;

// Usage example
const employee: ReadOnlyEmployee = {
    id: 1,
    department: "Engineering"
};
// employee.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
console.log(`Employee ID: ${employee.id}, Department: ${employee.department}`);

// 3. Template Literal Types
type World = "world";
type Greeting = `hello ${World}`;

const msg: Greeting = "hello world";
console.log(`Greeting: ${msg}`);

// 4. Keyof and Typeof
const COLORS = {
    red: "#ff0000",
    blue: "#0000ff"
} as const;

type ColorKeys = keyof typeof COLORS; // "red" | "blue"

// Usage example
const myColor: ColorKeys = "red";
console.log(`Selected color: ${myColor} = ${COLORS[myColor]}`);

console.log("Advanced types logic ready.");
