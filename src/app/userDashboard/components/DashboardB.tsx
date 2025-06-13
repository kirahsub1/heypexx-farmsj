// pages/dashboard.tsx
"use client";

import { motion } from "framer-motion";
import DashboardCtaPanel from "./Cta";
import { TrendingUp, Users, ShoppingBag, LucideIcon } from "lucide-react";

interface StatItem {
	label: string;
	value: string;
	icon: LucideIcon;
	trend: string;
	color: string;
}

const statsData = [
	{
		label: "Active Orders",
		value: "24",
		icon: ShoppingBag,
		trend: "+12%",
		color: "bg-emerald-500",
	},
	{
		label: "Total Customers",
		value: "1.2K",
		icon: Users,
		trend: "+18%",
		color: "bg-blue-500",
	},
	{
		label: "Revenue Growth",
		value: "$12.5K",
		icon: TrendingUp,
		trend: "+25%",
		color: "bg-purple-500",
	},
];

const StatCard = ({ stat }: { stat: StatItem }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		whileHover={{ y: -5 }}
		className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5"
	>
		<div className="flex items-center justify-between">
			<div>
				<p className="text-sm text-gray-600">{stat.label}</p>
				<h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
				<p className="text-sm text-emerald-600 mt-1">{stat.trend}</p>
			</div>
			<div className={`${stat.color} p-3 rounded-xl`}>
				<stat.icon className="w-6 h-6 text-white" />
			</div>
		</div>
	</motion.div>
);

export default function Dashboard() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="p-6 space-y-6"
		>
			{/* Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{statsData.map((stat) => (
					<StatCard key={stat.label} stat={stat} />
				))}
			</div>

			{/* Main CTA Panel */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
			>
				<DashboardCtaPanel
					title="Get the Latest Farm Products"
					description="Fresh produce straight from our fields to your table. Limited stock available!"
					imageSrc="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745931388/image_4_wtmnuy.png"
					buttonLink="/shop"
				/>
			</motion.div>
		</motion.div>
	);
}
