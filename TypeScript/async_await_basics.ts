// Async / Await and Promises
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function simulateDatabaseCall(id: number): Promise<{ id: number, name: string }> {
    console.log(`Fetching data for ID: ${id}...`);
    await delay(1000); // Wait for 1 second
    return { id, name: "Sample User" };
}

async function start() {
    try {
        const user = await simulateDatabaseCall(101);
        console.log("Data Received:", user);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

console.log("Program started...");
start();
