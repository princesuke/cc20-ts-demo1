function crash(message: string): never {
    throw new Error("App crashed: " + message);
}



crash("Something went wrong 555");
console.log("ทำงานไหม?");



