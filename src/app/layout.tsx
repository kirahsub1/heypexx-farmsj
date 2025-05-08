import "../app/globals.css"; 
import Navbar from "./components/static/Navbar";
import { ReactNode } from "react"; 
import Footer from "./components/static/Footer"


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}



