// Decorators Example (Requires "experimentalDecorators": true in tsconfig.json)

function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments:`, args);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

class UserService {
    @LogAction
    updateUser(id: number, name: string) {
        console.log(`Updating user ${id} to ${name}...`);
        return { success: true };
    }
}

// Note: To run this, you'd usually compile with --experimentalDecorators
const service = new UserService();
// service.updateUser(1, "Alice");
console.log("Decorator example defined.");
