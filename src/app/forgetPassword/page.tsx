'use client';

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
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
            <h2 className="text-2xl text-center font-bold text-gray-800">Reset Your Password</h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Enter your email, and we&apos;ll send you a link to reset your password.
            </p>

            <form action="#" method="POST" className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              <Button 
                bgColor="bg-green-600" 
                textColor="text-white" 
                text="Send Reset Link" 
              />  
            </form>
            
            <p className="mt-4 text-sm text-center text-gray-600">
              <Link href="/signin" className="text-green-500 hover:underline">Back to Sign In</Link>
            </p>
            
            <div className="mt-4">
              <p className="text-center text-gray-500 text-sm">Or sign in with</p>

              <Button 
                bgColor="bg-transparent border border-gray-300 hover:border-gray-500 hover:text-black-500 w-full px-4 py-2 mt-2 rounded-lg"   
                textColor="text-black"
                icon={FcGoogle }
                text="Continue with Google"  
              />
              
              <Button 
                bgColor="bg-black border border-gray-300 hover:border-gray-500 hover:text-white w-full px-4 py-2 mt-2 rounded-lg"   
                textColor="text-white"
                icon={FaApple}
                text="Continue with Apple"  
              />

              <Button 
                bgColor="bg-blue-500 border border-gray-300 hover:border-gray-500 hover:text-white w-full px-4 py-2 mt-2 rounded-lg"   
                textColor="text-white"
                icon={FaFacebook}
                text="Continue with Facebook"  
              />
            </div>

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
