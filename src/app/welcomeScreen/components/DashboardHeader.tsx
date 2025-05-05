import DashboardHeader from "./Header"; // or adjust relative path

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <DashboardHeader username="John Doe" />
    </main>
  );
}
