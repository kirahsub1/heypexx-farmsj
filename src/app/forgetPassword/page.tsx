"use client";

import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import Button from "@/app/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-blue-100 px-4">
      <section className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden border border-blue-100">
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
          <div className="p-8 md:p-12 w-full flex flex-col justify-center">
            <h2 className="text-3xl text-center font-extrabold text-green-700 mb-2">
              Reset Your Password
            </h2>
            <p className="mb-6 text-sm text-center text-gray-500">
              Enter your email, and we&apos;ll send you a link to reset your
              password.
            </p>
            <form action="#" method="POST" className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-gray-600 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
              </div>
              <Button
                bgColor="bg-green-600 hover:bg-green-700"
                textColor="text-white"
                text="Send Reset Link"
              />
            </form>
            <p className="mt-4 text-xs text-center text-gray-500">
              <Link
                href="/signin"
                className="text-green-600 hover:underline font-semibold"
              >
                Back to Sign In
              </Link>
            </p>
            <div className="mt-6 space-y-2">
              <Button
                bgColor="bg-white border border-gray-300 hover:border-gray-400"
                textColor="text-black"
                icon={FcGoogle}
                text="Continue with Google"
              />
              <Button
                bgColor="bg-black border border-gray-300 hover:border-gray-400"
                textColor="text-white"
                icon={FaApple}
                text="Continue with Apple"
              />
              <Button
                bgColor="bg-blue-600 border border-gray-300 hover:border-gray-400"
                textColor="text-white"
                icon={FaFacebook}
                text="Continue with Facebook"
              />
            </div>
            {/* Footer Section */}
            <footer className="mt-6 text-center text-gray-400 text-xs">
              <p>By continuing, you agree to Heypexx Farms</p>
              <Link href="#" className="text-green-600 hover:underline">
                Terms of Service
              </Link>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
