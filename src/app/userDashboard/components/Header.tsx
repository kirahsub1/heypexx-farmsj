"use client";

const Header = () => {
  return (
    <header className="h-16 bg-white shadow px-6 flex items-center justify-between sticky top-0 z-10 ml-64">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hello, User</span>
      </div>
    </header>
  );
};

export default Header;
