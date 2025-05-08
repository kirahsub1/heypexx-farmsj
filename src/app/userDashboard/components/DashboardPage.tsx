// pages/dashboard.tsx
import DashboardCtaPanel from "./CtaPanel";
import Image from "next/image";

export default function Dashboard() {
  const categories = [
    {
      name: "Fruits",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_8_hgvz2q.png",
    },
    {
      name: "Vegetables",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_8_hgvz2q.png",
    },
    {
      name: "Grains",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_7_lhiwt8.png",
    },
    {
      name: "Dairy",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/Frame_591_jxqdt0.png",
    },
    { name: "Herbs", image: "/categories/herbs.png" },
    {
      name: "Tubers",
      image:
        "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745939076/image_6_r66e3l.png",
    },
    { name: "Legumes", image: "/categories/legumes.png" },
    { name: "Oils", image: "/categories/oils.png" },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* CTA Panel takes more space */}
        <div className="w-full lg:w-2/3">
          <DashboardCtaPanel
            title="Get the Latest Farm Products"
            description="Fresh produce straight from our fields to your table. Limited stock available!"
            imageSrc="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745931388/image_4_wtmnuy.png"
            buttonLink="/shop"
        
          />
        </div>

        {/* Categories Section (smaller width) */}
        <div className="w-full lg:w-1/3 bg-white border rounded-2xl p-4 shadow-md h-fit">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800"> Our Categories</h2>
            <a
              href="/categories"
              className="text-sm text-[#46A908] hover:underline"
            >
              See all
            </a>
          </div>

          {/* Category Circles */}
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <span className="text-xs mt-1 text-gray-700">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
