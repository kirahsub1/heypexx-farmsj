import Image from "next/image";

const steps = [
  {
    title: "Browse Products",
    description:
      "Explore our wide range of fresh farm produce, inputs, and leasing opportunities tailored to your needs",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741621565/image_38_c6cd3t.png",
  },
  {
    title: "Place Your Order",
    description:
      "Select your desired products or services and add them to your cart to purchase.",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741621565/image_39_zps11j.png",
  },
  {
    title: "Secure Payment",
    description: "Checkout using our trusted and secure payment options.",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741621565/image_41_d1xhh3.png",
  },
  {
    title: "Track and Receive",
    description:
      "Stay updated on your order status with real-time tracking until it's delivered to your doorstep.",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741621565/image_42_mef9lx.png",
  },
  {
    title: "Export Opportunities",
    description:
      "For bulk purchases or international buyers, connect with our export services to reach global markets.",
    image:
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741621565/image_44_yikivp.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] md:w-[30%] text-center p-6"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
