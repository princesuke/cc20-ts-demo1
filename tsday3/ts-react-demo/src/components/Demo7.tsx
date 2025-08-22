import axios from "axios";

interface Product {
  id: number;
  name: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await axios.get<Product[]>("/api/products");
  return res.data; // Product[]
}
