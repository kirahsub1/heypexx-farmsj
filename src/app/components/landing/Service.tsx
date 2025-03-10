'use client';

import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'Selling fresh farm produce.',
    description: 'Enjoy a variety of fresh, high-quality farm produce carefully sourced to meet your needs.',
    images: [
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_46_wjmb4j.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088509/image_47_ljib9t.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088482/image_48_vhu6kb.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088509/image_49_mkxunm.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088509/image_51_ljeaxr.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088509/image_50_x7nkks.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088510/image_53_kgthnl.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088510/image_54_znno56.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088510/image_52_b7ucko.png'
    ],
    link: '/dashboard/web-development',
  },
  {
    title: 'Land leasing',
    description: 'We provide flexible land leasing options for your agricultural and business needs.',
    images: [
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_55_cimti4.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_58_jkrd4b.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_56_qwzcu3.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_57_otnd9k.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_59_l1fjjk.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_60_aeqfv6.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099202/image_62_mjswyn.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099202/image_61_aw1fug.png'
    ],
    link: '/dashboard/ui-ux-design',
  },
  {
    title: 'Farm Produce Export',
    description: 'Expand your reach with seamless export services, connecting your farm produce to international markets efficiently.',
    images: [
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_39_fquohg.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_43_z9aucg.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_40_xgp5qd.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_41_ckygpi.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_42_csvf12.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_44_xd4zlb.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_45_rygpfh.png',
      'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_46_wjmb4j.png'
    ],
    link: '/dashboard/seo-optimization',
  },
];

const Services = () => {
  return (
    <section className="p-6 bg-gradient-to-b from-[#c3e4aa] to-white">
      <h2 className="text-3xl font-bold text-center text-black mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="rounded-2xl shadow-lg overflow-hidden bg-white">
            <div className="bg-gradient-to-b from-[#C3E4AA] to-white p-4 flex justify-center">
              <div className="grid grid-cols-3 gap-2">
                {service.images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`Service Image ${idx + 1}`}
                    width={70}
                    height={80}
                    className="rounded-lg shadow-md"
                  />
                ))}
              </div>
            </div>
            <CardContent className="p-4 text-center">
              <h3 className="text-xl font-semibold text-green-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link}>
                <Button>Explore Service</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;




