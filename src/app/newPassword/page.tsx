'use client';

import Button from "@/app/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";


const Page: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <section className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Section */}
          <div className="hidden md:block w-full relative">
            <Image 
              src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1737984171/Frame_472_gbq5od.png"
              alt="Side Image" 
              width={600} 
              height={500} 
              priority
              className="object-cover w-full h-full"
            />
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-12 w-full">
            <h2 className="text-2xl text-center font-bold text-gray-800">Set a New Password</h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Enter your new password below.
            </p>

            <form action="#" method="POST" className="mt-6 space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Enter new password" 
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input 
                  type="password" 
                  id="confirm-password" 
                  name="confirm-password" 
                  placeholder="Confirm new password" 
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              <Button 
                bgColor="bg-green-600" 
                textColor="text-white" 
                text="Reset Password" 
              />  
            </form>
            
            <p className="mt-4 text-sm text-center text-gray-600">
              Back to <Link href="/signin" className="text-green-500 hover:underline">Sign In</Link>
            </p>
 <p>my name</p>
            {/* Footer Section */}
            <footer className="mt-6 text-center text-gray-600 text-sm">
              <p>By continuing, you agree to Heypexx Farms</p>
              <Link href="#" className="text-green-500 hover:underline">Terms of Service</Link>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
