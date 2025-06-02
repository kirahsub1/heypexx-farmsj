// pages/dashboard.tsx
import DashboardCtaPanel from "./Cta";

export default function Dashboard() {
  return (
    <div className="p-6">
      <DashboardCtaPanel
        title="Get the Latest Farm Products"
        description="Fresh produce straight from our fields to your table. Limited stock available!"
        imageSrc="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1745931388/image_4_wtmnuy.png"
        buttonLink="/shop"
      />
    </div>
  );
}
