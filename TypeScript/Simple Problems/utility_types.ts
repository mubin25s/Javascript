// Common Utility Types

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Partial - makes all properties optional
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
    completed: false,
};

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});

console.log("Updated Todo:", todo2);

// Readonly - prevents reassignment
const myTodo: Readonly<Todo> = {
    title: "Delete inactive users",
    description: "...",
    completed: false,
};

// myTodo.completed = true; // Error: Cannot assign to 'completed' because it is a read-only property.

// Pick - select a set of properties
type TodoPreview = Pick<Todo, "title" | "completed">;

const todoPreview: TodoPreview = {
    title: "Clean room",
    completed: false,
};

console.log("Todo Preview:", todoPreview);
