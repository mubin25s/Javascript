// Enums and Type Aliases
enum Status {
    Pending,
    Active,
    Completed,
    Failed
}

let currentStatus: Status = Status.Active;
console.log(`Status Index: ${currentStatus}`); // Prints 1
console.log(`Status Name: ${Status[currentStatus]}`); // Prints "Active"

// Type Alias
type Point = {
    x: number;
    y: number;
};

const coord: Point = { x: 10, y: 20 };
console.log(`Coordinates: X=${coord.x}, Y=${coord.y}`);
