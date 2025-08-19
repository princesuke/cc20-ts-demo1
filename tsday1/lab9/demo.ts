function logMessage(msg: string): void {
  console.log("Message:", msg);
}

const x = logMessage("mes");

console.log("x=> ", x);



function throwError(message: string): never {
  throw new Error(message);
}

