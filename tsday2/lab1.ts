function printId(id: string | number) {
  if(typeof id === "number") {
    console.log(`Id number: ${id}`);
  } else {
    console.log(`ID string: ${id}`);
  }
}

printId(101);
printId("abc");