import Image from "next/image";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C3E4AA]/30 to-white">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-[#46A908] mx-auto rounded-full mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple steps to get started with Heypexx Farms
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] relative group"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#46A908] text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Image with glow effect */}
                <div className="relative mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#46A908] to-emerald-500 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                  <div className="relative bg-white rounded-full p-4 w-24 h-24 mx-auto flex items-center justify-center">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={80}
                      height={80}
                      className="transform transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-semibold text-[#46A908] mb-4"
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {step.description}
                </motion.p>

                {/* Connecting line for desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-12 w-24 h-0.5 bg-gradient-to-r from-[#46A908] to-transparent transform -translate-y-1/2" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
