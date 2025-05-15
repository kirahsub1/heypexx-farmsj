// pages/index.tsx
import ProductList from "./ProductList";
import { Product } from "./types";

const allProducts: Product[] = [
  {
    id: 1,
    title: "Tomatoes",
    description: "Farm fresh full basket.",
    price: 4000,
    rating: 5,
    ratingsCount: 150,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747146466/Group_59_mfib4g.png",
  },
  {
    id: 2,
    title: "Green Pepper",
    description: "Farm fresh full basket",
    price: 2500,
    rating: 4,
    ratingsCount: 124,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747146357/image_17_jpju6w.png",
  },
  {
    id: 3,
    title: "Atarodo",
    description: "Farm fresh full basket",
    price: 1500,
    rating: 4,
    ratingsCount: 80,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747146357/image_18_ptmqsy.png",
  },
  {
    id: 4,
    title: "Onions",
    description: "Farm fresh full basket",
    price: 4000,
    rating: 5,
    ratingsCount: 100,
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1747146357/image_19_afuhzi.png",
  },
 
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-8">Our Fresh Produce</h1>
      <ProductList products={allProducts} />
    </main>
  );
}
