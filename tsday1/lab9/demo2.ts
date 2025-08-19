type Shape1 = "circle" | "square";

function area(shape: Shape1): number {
  switch (shape) {
    case "circle": return 3.14;
    case "square": return 4;
    default:
      // compiler จะบังคับว่า default ต้องเป็น never → ป้องกัน type หาย
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}

console.log(area("circle"));
console.log(area("square"));
// console.log(area("triangle"));

// ---

type A = { id: number };
type B = { id: string };
type Impossible = A & B;


// let a: Impossible = {id}

function doSomething(x: "a" | "b") {
  if (x === "a") return 1;
  if (x === "b") return 2;
  
  // ที่นี่ x กลายเป็น never แล้ว เพราะ case หมดแล้ว
  return x;
}