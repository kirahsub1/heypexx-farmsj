import ProductList from "./productlist/ProductList";
import { Product } from "./productlist/types";

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
    <main className=" bg-gray-100 pt-3 pb-1">
      {" "}
      {/* Reduced padding here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex header like "Verified Customer Feedback" */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Recently viewed
          </h2>
          <a href="#" className="text-green-600 font-medium">
            See all
          </a>
        </div>

        <ProductList products={allProducts} />
      </div>
    </main>
  );
}
