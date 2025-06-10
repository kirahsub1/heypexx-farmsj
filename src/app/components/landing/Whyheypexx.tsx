import React from "react";
import Image from "next/image";
import { Card, CardContent } from "../ui/Card";
import { motion } from "framer-motion";

interface CardData {
  title: string;
  description: string;
  images: string[];
}

const cardsData: CardData[] = [
  {
    title: "Direct Farm-to-Market",
    description:
      "We connect farmers with buyers, cutting out middlemen to ensure fair prices for everyone.",
    images: [
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_12_xqdv4q.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_16_rvrxkr.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_13_c11yd8.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_15_smlxcz.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_17_ivju6c.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_14_uh3uir.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484392/image_19_wi25zh.png",
    ],
  },
  {
    title: "Quality Produce",
    description:
      "Our farm produces high-quality, fresh, and organic vegetables and fruits.",
    images: [
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_23_m8dfxu.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_26_qk4yar.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_29_nmymrq.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_24_tjcqfp.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_27_p0dn6d.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003650/image_30_nkxc49.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_28_bazylp.png",
    ],
  },
  {
    title: "Leasing opportunities",
    description:
      "Discover easy and profitable land leasing opportunities to make the most of your land for farming ventures.",
    images: [
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741005464/Group_37_lrdqsr.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741005464/Group_36_dcopub.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741005464/Group_38_icl7cz.png",
    ],
  },
  {
    title: "Join our supportive community",
    description:
      "Become part of our thriving community where farmers and landowners connect, collaborate, and grow together",
    images: [
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_33_adkvde.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_35_gsafae.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_34_llvu8a.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_31_gj7jki.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_32_mgbow8.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006110/image_37_whqnng.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006110/image_36_njgijf.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006110/image_38_c5cbv9.png",
    ],
  },
  {
    title: "Exportation of farm produce",
    description:
      "Expand your reach by exporting your farm produce globally in bulk chain. Increase sales with our easy export services and grow your business beyond borders.",
    images: [
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_42_csvf12.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_39_fquohg.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_43_z9aucg.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_40_xgp5qd.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_44_xd4zlb.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_41_ckygpi.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_45_rygpfh.png",
      "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_46_wjmb4j.png",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

export default function Whyheypexx() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Heypexx Farms
          </h2>
          <div className="w-20 h-1 bg-[#46A908] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cardsData.map((card, cardIndex) => (
            <motion.div
              key={cardIndex}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="rounded-2xl overflow-hidden bg-white w-full max-w-md h-full transform transition-all duration-300 hover:shadow-2xl">
                {/* Image Section */}
                <div
                  className={`bg-gradient-to-br from-[#C3E4AA] to-[#a8d585] p-6 flex ${
                    cardIndex === 2 ? "flex-col items-center" : "justify-center"
                  }`}
                >
                  <div
                    className={`${
                      cardIndex === 2
                        ? "flex flex-col items-center space-y-4"
                        : "grid grid-cols-3 gap-3"
                    }`}
                  >
                    {card.images.map((img, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        variants={imageVariants}
                        whileHover="hover"
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#46A908] to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                        <Image
                          src={img}
                          alt={`${card.title} image ${imgIndex + 1}`}
                          width={cardIndex === 2 ? 120 : 80}
                          height={cardIndex === 2 ? 180 : 130}
                          className={`rounded-xl shadow-lg relative ${
                            cardIndex === 2
                              ? "border-4 border-[#46A908]/20"
                              : ""
                          } transform transition-all duration-300 group-hover:shadow-xl`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Title & Description */}
                <CardContent className="p-6 text-center bg-white relative">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-semibold text-[#46A908] mb-3"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {card.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




