import ProductList from "./ProductList";
import { Product } from "./types";

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Organic Carrots",
    price: 3.5,
    image: "https://via.placeholder.com/300x200?text=Carrots",
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    price: 2.8,
    image: "https://via.placeholder.com/300x200?text=Tomatoes",
  },
  {
    id: 3,
    name: "Green Lettuce",
    price: 1.9,
    image: "https://via.placeholder.com/300x200?text=Lettuce",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-8">Product List</h1>
      <ProductList products={mockProducts} />
    </main>
  );
}
