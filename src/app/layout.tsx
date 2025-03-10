import "../app/globals.css"; // Ensure correct path
import Navbar from "./components/static/Navbar";
import { ReactNode } from "react"; // Import ReactNode for type


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Correctly render Navbar as a component */}
        <main>{children}</main>
      </body>
    </html>
  );
}



