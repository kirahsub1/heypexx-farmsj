'use client';

import { Button } from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
	{
		title: 'Selling fresh farm produce.',
		description:
			'Enjoy a variety of fresh, high-quality farm produce carefully sourced to meet your needs.',
		images: [
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_46_wjmb4j.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088509/image_47_ljib9t.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088482/image_48_vhu6kb.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088509/image_49_mkxunm.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088509/image_51_ljeaxr.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088509/image_50_x7nkks.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088510/image_53_kgthnl.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088510/image_54_znno56.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741088510/image_52_b7ucko.png',
		],
		link: '/dashboard/web-development',
	},
	{
		title: 'Land leasing',
		description:
			'We provide flexible land leasing options for your agricultural and business needs.',
		images: [
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_55_cimti4.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_58_jkrd4b.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_56_qwzcu3.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_57_otnd9k.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_59_l1fjjk.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099201/image_60_aeqfv6.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099202/image_62_mjswyn.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741099202/image_61_aw1fug.png',
		],
		link: '/dashboard/ui-ux-design',
	},
	{
		title: 'Farm Produce Export',
		description:
			'Expand your reach with seamless export services, connecting your farm produce to international markets efficiently.',
		images: [
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_39_fquohg.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_43_z9aucg.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_40_xgp5qd.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_41_ckygpi.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_42_csvf12.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011467/image_44_xd4zlb.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_45_rygpfh.png',
			'https://res.cloudinary.com/dgcjq4kbf/image/upload/v1741011471/image_46_wjmb4j.png',
		],
		link: '/dashboard/seo-optimization',
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
		transition: { duration: 0.5, ease: 'easeOut' },
	},
};

const imageVariants = {
	hidden: { scale: 0.8, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.3 },
	},
	hover: {
		scale: 1.05,
		transition: { duration: 0.2 },
	},
};

const Services = () => {
	return (
		<section className="relative py-20 px-6 overflow-hidden">
			{/* Decorative background */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#c3e4aa]/80 to-white">
				<div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_#46A908_1px,_transparent_1px)] [background-size:24px_24px]" />
			</div>

			<div className="relative max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Our Services
					</h2>
					<div className="w-20 h-1 bg-[#46A908] mx-auto rounded-full" />
					<p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
						Experience excellence in agriculture with our comprehensive range of
						services
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{ y: -5 }}
							className="h-full"
						>
							<Card className="rounded-2xl overflow-hidden bg-white w-full h-full transform transition-all duration-300 hover:shadow-2xl">
								<div className="relative bg-gradient-to-br from-[#C3E4AA] to-[#a8d585] p-6">
									<div className="grid grid-cols-3 gap-3">
										{service.images.map((img, idx) => (
											<motion.div
												key={idx}
												variants={imageVariants}
												whileHover="hover"
												className="relative group"
											>
												<div className="absolute -inset-1 bg-gradient-to-r from-[#46A908] to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
												<Image
													src={img}
													alt={`${service.title} image ${idx + 1}`}
													width={80}
													height={90}
													className="rounded-xl shadow-lg relative transform transition-all duration-300 group-hover:shadow-xl"
												/>
											</motion.div>
										))}
									</div>
								</div>

								<CardContent className="p-6 text-center bg-white relative">
									<motion.h3
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: 0.2 }}
										className="text-2xl font-semibold text-[#46A908] mb-3"
									>
										{service.title}
									</motion.h3>
									<motion.p
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: 0.3 }}
										className="text-gray-600 leading-relaxed mb-6"
									>
										{service.description}
									</motion.p>
									<Link href={service.link} className="inline-block">
										<Button className="bg-[#46A908] text-white hover:bg-[#378107] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full">
											Explore Service
											<svg
												className="w-5 h-5 ml-2 inline-block"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</svg>
										</Button>
									</Link>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;




