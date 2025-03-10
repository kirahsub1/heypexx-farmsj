import Image from "next/image";

const steps = [
  {
    title: "Step 1: Sign Up",
    description: "Create an account to get started.",
    image: "/images/signup.png",
  },
  {
    title: "Step 2: Choose a Plan",
    description: "Select the best plan that suits your needs.",
    image: "/images/plan.png",
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
