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

  return (
    <html lang="en">
      <body>
        {!isUserDashboard && <Navbar />}
        <main>{children}</main>
        {!isUserDashboard && (
          <>
            <ChatBotButton />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}



