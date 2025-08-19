interface Product {
    id: number;
    name: string;
    price: number;
    tags: string[];
}

const products: Product[] = [
 { id: 1, name: "labtop", price: 25000, tags: ["elect", "office"]},
 {id: 2, name: "keybord", price: 1500, tags: ["elec"]},
 {id: 3, name: "mouse", price: 3000, tags:["elect", "office"]}
];

console.log(products);