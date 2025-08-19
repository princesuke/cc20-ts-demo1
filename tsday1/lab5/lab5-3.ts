type Product1 = {
    id: number;
    name: string;
    price: number;
    tags: string[];
    note?: string;
}

// type Point = [number, number, string];
// const p: Point = [10, 20, "30"];

const products1: Product1[] = [
  { id: 1, name: "Laptop", price: 25000, tags: ["tech", "office"] },
  { id: 2, name: "Book", price: 500, tags: ["education"], note: "discount" },
];


// products.push({id: 3, name: "Pen", price: "20"})