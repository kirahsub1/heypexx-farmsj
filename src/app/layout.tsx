"use client";

import "../app/globals.css"; 
import Navbar from "./components/static/Navbar";
import { ReactNode } from "react"; 
import ChatBotButton from "./components/landing/Chatbot";
import Footer from "./components/static/Footer";
import { usePathname } from 'next/navigation';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const isUserDashboard = pathname?.startsWith('/userDashboard');
  const hideNavbar = pathname === '/register' || pathname === '/signin';

  return (
    <html lang="en">
      <body>
        {!isUserDashboard && !hideNavbar && <Navbar />}
        <main>{children}</main>
        {!isUserDashboard && !hideNavbar && (
          <>
            <ChatBotButton />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}



