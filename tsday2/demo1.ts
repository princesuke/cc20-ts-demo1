interface Box<Item> {
  value: Item;
}

let stringBox: Box<string> = { value: "Hello" };
let numberBox: Box<number> = { value: 42 };

interface Car {
  brand: string;
  year: number;
}

type CarKeys = keyof Car;
// 👉 "brand" | "year"

let key: CarKeys;
key = "brand"; // ✅
key = "year";  // ✅
// key = "" // ❌ Error
