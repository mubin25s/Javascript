// Advanced TypeScript Types

// 1. Conditional Types
type IsString<T> = T extends string ? "Yes" : "No";
type T1 = IsString<string>;  // "Yes"
type T2 = IsString<number>;  // "No"

// 2. Mapped Types
type CustomReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

interface User {
    id: number;
    name: string;
}

type ReadOnlyUser = CustomReadOnly<User>;

// 3. Template Literal Types
type World = "world";
type Greeting = `hello ${World}`;

const msg: Greeting = "hello world";

// 4. Keyof and Typeof
const COLORS = {
    red: "#ff0000",
    blue: "#0000ff"
};

type ColorKeys = keyof typeof COLORS; // "red" | "blue"

console.log("Advanced types logic ready.");
