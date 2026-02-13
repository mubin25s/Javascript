// 06 Interfaces and Objects
interface User {
    readonly id: number; // Cannot be changed after initialization
    username: string;
    email?: string; // Optional property
}

const user1: User = {
    id: 1,
    username: "mubin25",
    email: "test@example.com"
};

const user2: User = {
    id: 2,
    username: "coder101"
};

console.log(`User 1: ${user1.username}, Email: ${user1.email}`);
console.log(`User 2: ${user2.username}, Email: ${user2.email ?? "Not provided"}`);
