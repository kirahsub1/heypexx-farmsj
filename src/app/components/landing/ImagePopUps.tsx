import Image from "next/image";
import { Card, CardContent } from "../ui/Card";

const cardsData = [
  { 
    title: "Direct Farm-to-Market", 
    description: "We connect farmers with buyers, cutting out middlemen to ensure fair prices for everyone.", 
    images: ["https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_12_xqdv4q.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_16_rvrxkr.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_13_c11yd8.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_15_smlxcz.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_17_ivju6c.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484391/image_14_uh3uir.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1740484392/image_19_wi25zh.png"] 
  },
  { 
    title: "Quality Produce", 
    description: "Our farm produces high-quality, fresh, and organic vegetables and fruits.", 
    images: ["https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_23_m8dfxu.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_26_qk4yar.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_29_nmymrq.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_24_tjcqfp.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_27_p0dn6d.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003650/image_30_nkxc49.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741003649/image_28_bazylp.png"] 
  },
  { 
    title: "Leasing opportunities", 
    description: "Discover easy and profitable land leasing opportunities to make the most of your land for farming ventures.", 
    images: ["https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741005464/Group_37_lrdqsr.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741005464/Group_36_dcopub.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741005464/Group_38_icl7cz.png"] 
  },
  { 
    title: "Join our supportive community", 
    description: "Become part of our thriving community where farmers and landowners connect, collaborate, and grow together", 
    images: ["https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_33_adkvde.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_35_gsafae.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_34_llvu8a.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_31_gj7jki.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006109/image_32_mgbow8.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006110/image_37_whqnng.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006110/image_36_njgijf.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741006110/image_38_c5cbv9.png"] 
  },
  { 
    title: "Exportation of farm produce", 
    description: "Expand your reach by exporting your farm produce globally in bulk chain. Increase sales with our easy export services and grow your business beyond borders.", 
    images: ["https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_42_csvf12.png", "https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_39_fquohg.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_43_z9aucg.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_40_xgp5qd.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_44_xd4zlb.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_41_ckygpi.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_45_rygpfh.png","https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_46_wjmb4j.png"] 
  },
];

export default function ImagePopupSection() {
  return (
    <section className="p-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-black mb-6">
        Why Heypexx Farms
      </h2>

      {/* Responsive grid layout with centered content */}
      <div className="grid gap-6 justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden bg-white w-full max-w-md"
          >
            {/* Image Section */}
            <div
              className={`bg-[#C3E4AA] p-4 flex ${
                index === 2 ? "flex-col items-center" : "justify-center"
              }`}
            >
              <div
                className={`${
                  index === 2
                    ? "flex flex-col items-center space-y-4"
                    : "grid grid-cols-3 gap-2"
                }`}
              >
                {card.images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`Image ${idx + 1}`}
                    width={index === 2 ? 120 : 70}
                    height={index === 2 ? 180 : 120}
                    className={`rounded-lg shadow-md ${
                      index === 2 ? "border-4 border-green-700" : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Title & Description */}
            <CardContent className="p-4 text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}




