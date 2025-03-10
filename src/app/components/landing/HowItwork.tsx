import Image from "next/image";

const steps = [
  {
    title: "Browse Products",
    description: "Explore our wide range of fresh farm produce, inputs, and leasing opportunities tailored to your needs",
    image: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741621565/image_38_c6cd3t.png",
  },
  {
    title: "Place Your Order",
    description: "Select your desired products or services and add them to your cart to purchase.",
    image: "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741621565/image_39_zps11j.png",
  },
  {
    title: "Step 3: Customize Settings",
    description: "Adjust your preferences and personalize your experience.",
    image: "/images/settings.png",
  },
  {
    title: "Step 4: Start Using",
    description: "Begin using the platform and enjoy the features.",
    image: "/images/start.png",
  },
  {
    title: "Step 5: Get Support",
    description: "Reach out to our support team for assistance anytime.",
    image: "/images/support.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg text-center">
              <Image
                src={step.image}
                alt={step.title}
                width={60}
                height={60}
                className="mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
