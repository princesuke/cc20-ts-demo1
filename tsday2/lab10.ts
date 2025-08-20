interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

type ProductSummary = Pick<Product, "id" | "name">

const summary: ProductSummary = {
    id: 101,
    name: "keyboard"
}