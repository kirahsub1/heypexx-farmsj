'use client';

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import Button from "@/app/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";

const page: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <section className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="hidden md:block w-full">
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
            <h2 className="text-2xl text-center font-bold text-gray-800">Welcome to Heypexx Farm</h2>
            <p className="mt-2 text-sm text-center text-gray-600">Create your account to get started!</p>

            <form action="#" method="POST" className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your full name" 
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
{/* 
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  placeholder="Enter your username" 
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div> */}

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

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="Enter your password" 
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              <Button 
                bgColor="bg-green-600" 
                textColor="text-white" 
                text="Register" 
              />  
            </form>
            
            <p className="mt-4 text-sm text-center text-gray-600">
              Already have an account? <Link href="/signin" className="text-green-500 hover:underline">Sign In</Link>
            </p>
            
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
            {/* Footer Section */}
            <footer className="mt-4 text-center text-gray-600 text-md">
              <p>By continuing, you agree to Heypexx Farm’s</p>
              <Link href="#" className="text-green-500 font-medium hover:underline">Terms of Service</Link> 
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;






