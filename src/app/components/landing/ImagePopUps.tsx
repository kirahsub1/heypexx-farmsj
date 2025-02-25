import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/Card";
import { Button } from "../ui/Button";
import { X } from "lucide-react";

const images = Array.from({ length: 12 }, (_, i) => `/images/img${i + 1}.jpg`);

export default function ImagePopupSection() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openPopup = (imageUrls: string[]) => {
    setSelectedImages(imageUrls);
  };

  const closePopup = () => {
    setSelectedImages([]);
  };

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Why Heypexx Farms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Card key={index} className="relative p-4 shadow-lg bg-white">
            {index === 2 && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                3
              </div>
            )}
            <CardContent className="flex flex-col items-center">
              <p className="mb-2">Card {index + 1}</p>
              <Button onClick={() => openPopup(index === 2 ? images.slice(0, 3) : images.slice(index * 2, (index + 1) * 2))}>
                Show Images
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button className="absolute top-2 right-2" onClick={closePopup}>
              <X size={24} />
            </button>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedImages.map((img, idx) => (
                <Image key={idx} src={img} alt={`Popup ${idx + 1}`} width={100} height={100} className="rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
